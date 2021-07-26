# 路由

```
import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'

const routes: Routes = [
  // The top level does not need '/'
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      onSameUrlNavigation: 'reload'
    })
  ],
  exports: [RouterModule]
})

export class AppRouting {}

```

```
const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  ...
})
export class AppModule { }
```

这些路由的定义顺序是刻意如此设计的。路由器使用先匹配者优先的策略来匹配路由，所以，具体路由应该放在通用路由的前面。在上面的配置中，带静态路径的路由被放在了前面，后面是空路径路由，因此它会作为默认路由。而通配符路由被放在最后面，这是因为它能匹配上每一个 URL，因此应该只有在前面找不到其它能匹配的路由时才匹配它

路由器链接

```
<nav>  <a routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>  <a routerLink="/heroes" routerLinkActive="active">Heroes</a></nav><router-outlet></router-outlet>
```

路由链接的激活状态会向下级联到路由树中的每个层级，所以，父子路由链接可能会同时激活。要覆盖这种行为，可以把 [routerLinkActiveOptions] 绑定为 { exact: true } 表达式，这样 RouterLink 只有当 URL 与当前 URL 精确匹配时才会激活

把路由集成到应用中

路由应用范例中默认不包含路由。 要想在使用 Angular CLI 创建项目时支持路由，请为项目或应用的每个 NgModule 设置 –routing 选项。

```
ng generate module my-module --routing
```