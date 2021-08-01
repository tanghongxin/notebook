# 结构指令

## 常用指令

- ngFor

```html
<ul>
  <li *ngFor="let name of names">{{ name }}</li> 
  <li *ngFor="let name of names; let num = index">{{ name }}</li>
</ul>
```

- ngStyle

```html
<!-- font-size作为对象的键时，需要用单引号（此处不支持驼峰？ -->
<div [style.background-color]="'yellow'"></div>
<!-- 绑定变量与指定单位 -->
<div [ngStyle]="{ color: 'red', 'font-size': '14px' }"></div>
<div [style.font-size.px]="fontSize"></div>
```

- ngClass

```html
<div [ngClass]="{active: true}"></div>
<div [ngClass]="{isActive ? 'active' : ''}"></div>
<div [ngClass]="['active', 'avaliable']"></div>
```

- ngIf

```html
<!-- 这会移除一个DOM
如果只是改变可见性，用ngStyle或者ngClass
使用 else 时，其对应区域必须是 ng-template -->
<div *ngIf="false; else test"></div>
<ng-template #test>111</ng-template>
```

- ngSwitch

```html
<div [ngSwitch]="myVar">
  <div *ngSwitchCase="'A'">A</div>
  <div *ngSwitchCase="'A'">我也是A</div>
  <div *ngSwitchCase="'B'">B</div>
  <div *ngSwitchDefault>C</div>
</div>
```

- ngNonBindable 不编译指定部分（按普通文本输出）

```html
<p ngNonBindable>{{ text }}</p>
```

- ng-container

```html
<!-- <ng-container> 是一个分组元素，但它不会污染样式或元素布局， -->
<!-- 因为 Angular 压根不会把它放进 DOM 中 -->
<p>
  I turned the corner
  <ng-container *ngIf="hero"> and saw {{hero.name}}. I waved </ng-container>
  and continued on my way.
</p>
```