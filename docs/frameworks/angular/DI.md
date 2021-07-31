# 依赖注入

服务由提供商提供，注入器负责将使用者与提供商建立联系

注入器

```typescript
// 注入器在看到这样一条语句时，
// 会去应用中寻找ProductService的实例注入进去（单例模式）
constructor(private productService: ProductService)
```

提供器

```
providers:[ProductService]

// 等同于
providers: [
    {
        provide: ProduceService, // token
        useClass: ProduceService // 实例名
    }
]

// 或者
providers: [
    {
        provide: ProduceService, // token
        useFactory() {
            // 返回实例
        }
    }
]

// 
constructor(private productService(实例名): ProductService(token))
```

三种设置元数据的方式

- 在服务本身的 @Injectable() 装饰器中
- 在 NgModule 的 @NgModule() 装饰器中 // providers 元数据选项，配置 NgModule的注入器
- 在组件的 @Component() 装饰器中 // // providers 元数据选项，配置组件级的注入器

可选依赖

```typescript
constructor(@Optional() private logger: Logger) {
  if (this.logger) {
    this.logger.log(some_message);
  }
}
```

```typescript
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRouting
  ],
  // 在非根 NgModule 元数据的 providedIn 选项中配置一个模块级的提供商，以便把该服务的范围限定到该模块一级。 
  // 这和在 @Injectable() 元数据中指定一个非根模块是基本等效的，但以这种方式提供的服务无法被摇树优化掉
  providers: [
    LoginService
  ]
})
```

```typescript
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl'],
  // providers: [
  //   // {
  //   //   provide: LoginService,
  //   //   useClass: MyLoginService
  //   // },
  //   // 如果service自身指定了提供商，那组件的providers可以不写服务，一旦写了，就把这个提供商的范围限定到该组件及其子组件
  //   // TestService
  // ]
})

constructor(private Test: LoginService) {}
```