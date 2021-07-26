# 可观察对象

可观察对象特点

- 在有消费者订阅它之前，发布函数不会执行
- 消费者使用完成后需要取消订阅

操作流程

1. 创建一个 Observable 的实例
2. 调用它的 subscribe() 方法，并传入一个观察者（observer），负责定义了你收到的这些消息的处理器（handler） subscribe() 方法还可以接收定义在同一行中的回调函数，无论 next、error 还是 complete 处理器
3. subscribe() 调用会返回一个 Subscription 对象，该对象具有一个 unsubscribe() 方法，用于停止接收通知

> 注

可观察对象可以发送多个任意类型的值 —— 字面量、消息、事件等，取消订阅可以用于清除定时器，事件防抖，节流等

```
// 创建一个 Observable 的实例
// 参数为观察的函数，当调用实例的subscribe方法时，才是调用这个函数
const locations = new Observable((observer= {
    next: Function,
    error: Function,
    complete?: Function
}) => {
  const {next, error} = observer;
  let watchId;
 
  // 接口内部方法，演示用，跳过
  if ('geolocation' in navigator) {
    watchId = navigator.geolocation.watchPosition(next, error);
  } else {
    error('Geolocation not available');
  }
 
  // 消费者取消订阅时，接口内部停止推送
  return {unsubscribe() { navigator.geolocation.clearWatch(watchId); }};
});
 
// 调用它的 subscribe() 方法，并传入一个观察者（observer），负责定义了你收到的这些消息的处理器（handler）
const locationsSubscription = locations.subscribe({
  next(position) { console.log('Current Position: ', position); },
  error(msg) { console.log('Error Getting Location: ', msg); }
});
 
// 停止接收通知
setTimeout(() => { locationsSubscription.unsubscribe(); }, 10000);
```

```
// next 处理器都是必要的，而 error 和 complete 处理器是可选的
const myObserver = {
  next: x => console.log('Observer got a next value: ' + x),
  error: err => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
};

// 等同于

myObservable.subscribe(
  x => console.log('Observer got a next value: ' + x),
  err => console.error('Observer got an error: ' + err),
  () => console.log('Observer got a complete notification')
);
```

subscribe() 方法还可以接收定义在同一行中的回调函数

```
myObservable.subscribe(
  x => console.log('Observer got a next value: ' + x),
  err => console.error('Observer got an error: ' + err),
  () => console.log('Observer got a complete notification')
);
```

多播

可观察对象在一次执行中同时广播给多个订阅者。借助支持多播的可观察对象，你不必注册多个监听器，而是复用第一个（next）监听器，并且把值发送给各个订阅者（类似广播？）

思路：在可观察对象内部记录订阅者

RxJS

RxJS 提供了一种对 Observable 类型的实现，在Observable 成为了JavaScript语言的一部分并且浏览器支持它之前，它都是有必要的

> ajax

```
import { fromPromise } from 'rxjs';

// Create an Observable out of a promise
const data = fromPromise(fetch('/api/endpoint'));
// Subscribe to begin listening for async result
data.subscribe({
 next(response) { console.log(response); },
 error(err) { console.error('Error: ' + err); },
 complete() { console.log('Completed'); }
});
```

> 事件

```
import { fromEvent } from 'rxjs';
 
const el = document.getElementById('my-element');
 
// Create an Observable that will publish mouse movements
const mouseMoves = fromEvent(el, 'mousemove');
 
// Subscribe to start listening for mouse-move events
const subscription = mouseMoves.subscribe((evt: MouseEvent) => {
  // Log coords of mouse movements
  console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);
 
  // When the mouse is over the upper-left of the screen,
  // unsubscribe to stop listening for mouse movements
  if (evt.clientX < 40 && evt.clientY < 40) {
    subscription.unsubscribe();
  }
});
```

> pipe (管道与流？)

```
import { filter, map } from 'rxjs/operators';

const squareOdd = of(1, 2, 3, 4, 5)
  .pipe(
    filter(n => n % 2 !== 0),
    map(n => n * n)
  );

// Subscribe to get values
squareOdd.subscribe(x => console.log(x));
```

> 注 Angular提倡使用管道来组合操作符，而不是使用链式写法

Angular约定俗成可观察对象的名字以“$”符号结尾