# operators

> 非变异（纯函数），它们不会改变已经存在的 Observable 实例。相反，它们返回一个新的 Observable

- map

  同 Array.prototype.map

- filter

  同 Array.prototype.filter

- pipe

  类似 *.pipe，但调用方式有不同* .pipe()()、obsersvble$.pipe()

- zip

  将多个 Observable 组合以创建一个 Observable，如果最后一个参数是函数, 这个函数被用来计算最终发出的值.否则, 返回一个顺序包含所有输入值的数组

  ```
  let age$ = Observable.of<number>(27, 25, 29);let name$ = Observable.of<string>('Foo', 'Bar', 'Beer');let isDev$ = Observable.of<boolean>(true, true, false);Observable    .zip(age$,         name$,         isDev$,         (age: number, name: string, isDev: boolean) => ({ age, name, isDev ***REMOVED***))    .subscribe(x => console.log(x));// 输出：// { age: 27, name: 'Foo', isDev: true ***REMOVED***// { age: 25, name: 'Bar', isDev: true ***REMOVED***// { age: 29, name: 'Beer', isDev: false ***REMOVED***
  ```

- mapTo

  收常量 value 作为参数，并每当源 Observable 发出值时都发出这个值。换句话说， 就是忽略实际的源值

  ```
  var clicks = Rx.Observable.fromEvent(document, 'click');var greetings = clicks.mapTo('Hi');greetings.subscribe(x => console.log(x))// 输出 Hi
  ```

- startWith （any)

  先触发指定的值，再（另一次）触发事件值，即增加了第一次的触发