# 生命周期钩子

# 生命周期钩子

## 生命周期

| 钩子                    | 时机                                                         |
| ----------------------- | ------------------------------------------------------------ |
| ngOnChanges()           | 当 Angular（重新）设置数据绑定输入属性时响应。 该方法接受当前和上一属性值的 SimpleChanges 对象。当被绑定的输入属性的值发生变化时调用，首次调用一定会发生在 ngOnInit() 之前。 |
| ngOnInit()              | 在 Angular 第一次显示数据绑定和设置指令/组件的输入属性之后，初始化指令/组件。在第一轮ngOnChanges() 完成之后调用，只调用一次。 |
| ngDoCheck()             | 检测，并在发生 Angular 无法或不愿意自己检测的变化时作出反应。在每个变更检测周期中调用，ngOnChanges() 和 ngOnInit() 之后。 |
| ngAfterContentInit()    | 每当 Angular 把外部内容投影进组件/指令的视图之后调用。第一次 ngDoCheck() 之后调用，只调用一次。 |
| ngAfterContentChecked() | 每当 Angular 完成被投影组件内容的变更检测之后调用。ngAfterContentInit() 和每次 ngDoCheck() 之后调用。 |
| ngAfterViewInit()       | 每当 Angular 初始化完组件视图及其子视图之后调用。第一次 ngAfterContentChecked() 之后调用，只调用一次。 |
| ngAfterViewChecked()    | 每当 Angular 做完组件视图和子视图的变更检测之后调用。ngAfterViewInit() 和每次 ngAfterContentChecked() 之后调用。 |
| ngOnDestroy()           | 每当 Angular 每次销毁指令/组件之前调用并清扫。在这儿反订阅可观察对象和分离事件处理器，以防内存泄漏。 |



## 使用钩子

```typescript
import { OnDestroy, OnInit } from '@angular/core'

// 每个接口都有唯一的一个钩子方法，它们的名字是由接口名再加上 ng 前缀构成

export class IndexComponent implements OnInit, OnDestroy {
    /**
     * ngOnInit纯粹是通知开发者组件/指令已经被初始化完成了
     * 经常在ngOnInit做一些初始化的工作
     * 这些工作尽量要避免在constructor中进行
     * constructor中应该只进行依赖注入而不是进行真正的业务操作
     */
    ngOnInit() {}
    ngOnDestroy() {}
}
```

