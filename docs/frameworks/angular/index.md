# 起步

# 常用命令

1. ng generate component xxx

> 注：可以cd到src/app/xxx下再执行ng genarate component x 创建二级目录组件

- mkdir src/app/xxx
- create src/app/xxx.compontent.html
- create src/app/xxx.compontent.spec.ets // 单元测试文件
- create src/app/xxx.compontent.ts
- create src/app/xxx.compontent.css
- UPDATE src/app/app.module.ts // 声明新创建的组件（实现引用组件时自动载入, Angular也支持懒加载）

> 注：Angular没有为component提供修改/删除指令，只能手动更新

## 装饰器（注解）

```typescript
// 设置元数据/meta：用来说明类的信息
@Component({
  selector: 'app-login', // 类似css选择器, 筛选出<app-login></app-login>组件
  templateUrl: 'login.component.html',
  // template： '<p>This is a paragraph.</p>' // template与templateUrl只能有一个
  styleUrls: ['login.component.scss'] // 可以传入多个样式表
})
```