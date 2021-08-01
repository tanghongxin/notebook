# 动画

步骤

1. 启用动画模块

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  declarations: [ ],
  bootstrap: [ ]
})
export class AppModule { }
```

1. 把动画功能导入组件文件中

```typescript
// 如果你准备在组件文件中使用特定的动画函数，
// 请从 @angular/animations 中导入这些函数
import { Component, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
```

1. 添加动画的元数据属性

```typescript
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  animations: [
    // animation triggers go here
  ]
})
```

```typescript
import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations'

export const enrtyAnimation = [
  trigger('loginAnimationImg', [
    transition(':enter', [style({ opacity: 0, transform: 'translateY(40px)'}), animate('1s cubic-bezier(0.4, 0.0, 0.2, 1)', style({ opacity: 1, transform: 'translateY(0)' }))])]),

  trigger('loginAnimationText', [
    transition(':enter', [
      query('*', style({ opacity: 0, transform: 'translateY(40px)'})),
      query('*', stagger('.6s', [animate('1s .8s cubic-bezier(0.4, 0.0, 0.2, 1)', style({ opacity: 1, transform: 'translateY(0)' }))])
      )
    ])
    // state('open', style({
    //   opacity: 0,
    //   transform: 'translateY(40px)'
    // })),
    // state('closed', style({
    //   opacity: 1,
    //   transform: 'translateY(0)'
    // })),
    // transition('open <=> closed', [
    //   animate('1s .8s cubic-bezier(0.4, 0.0, 0.2, 1)')
    // ])
  ])
]

```