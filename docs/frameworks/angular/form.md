# 表单

如果某个组件、指令或管道是属于 imports 中所导入的某个模块的，那就不能再把它再声明到本模块的 declarations 数组中。 如果它是你自己写的，并且确实属于当前模块，才应该把它声明在 declarations 数组中。

> ==============================================================================

```html
<!-- 表示单向绑定(Angular => HTML) -->
<option [value]="val"></option>
<!-- ()表示单向绑定(HTML => Angular) -->
<form (ngSubmit)="onSubmit()"></form>
<!-- [()]表示双向绑定
当在表单中使用 [(ngModel)] 时，必须要定义 name 属性(使用任何唯一的值都可以)
使用 [(ngModel)] 时，每个 input 元素都有 name 属性，Angular 表单用它注册控件 -->
<input
  type="text"
  class="form-control"
  name="name"
  id="name"
  required 
  [(ngModel)]="model.name"
>

```

> ==============================================================================

‘#’ 代表引用，类似VUE中的ref?

```html
<form #heroForm="ngForm">
```

在表单中使用 ngModel 可以获得比仅使用双向数据绑定更多的控制权(双向绑定仅仅是值的绑定？)

> ==============================================================================

| 状态                 | 为真时的 CSS 类 | 为假时的 CSS 类 |
| -------------------- | --------------- | --------------- |
| 控件被访问过         | ng-touched      | ng-untouched    |
| 控件的值变化了（脏） | ng-dirty        | ng-pristine     |
| 控件的值有效         | ng-valid        | ng-invalid      |

// 变化为初始值，是否也为ng-dirty? // Valid与验证器有关？

```html
<div [hidden]="fasle"> </div>
```

> ==============================================================================

模板驱动验证 VS 响应式表单验证

模板驱动验证是采用ngModel监控value，在html模版中写验证器

```html
<input
  id="name"
  name="name"
  class="form-control"
  required
  minlength="4"
  appForbiddenName="bob"
  [(ngModel)]="hero.name"
  #name="ngModel"
>

```

响应式表单验证是将表单元素封装为formControl对象进行管理，验证器是对象的一个方法

- 同步验证器。你可以在实例化一个 FormControl 时把它作为构造函数的第二个参数传进去。 // 因为传入的是一个数组，所以返回的是一组验证错误或null
- 异步验证器函数接受一个控件实例，并返回一个承诺（Promise）或可观察对象（Observable），它们稍后会发出一组验证错误或者 null。你可以在实例化一个 FormControl 时把它作为构造函数的第三个参数传进去。

```tsx
ngOnInit(): void {
  this.heroForm = new FormGroup({
    'name': new FormControl(this.hero.name, [
      Validators.required,
      Validators.minLength(4)
    ]),
    'alterEgo': new FormControl(this.hero.alterEgo),
    'power': new FormControl(this.hero.power, Validators.required)
  });

}
```

[FormBuilder语法糖](https://www.angular.cn/api/forms/FormBuilder)