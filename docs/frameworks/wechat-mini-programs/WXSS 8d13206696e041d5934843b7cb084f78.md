# WXSS

WXSS 相比CSS扩展的特性有

- rpx // 类比 vh vw

```
.service-button {
  position: absolute;
  top: 40rpx;
}
```

- 样式导入 // 类比scss @import

```
@import "common.wxss";
.middle-p {
  padding:15px;
}
```

> 开发建议以iphone6为模版

> 较小屏幕上不可避免会有一些毛刺，开发时尽量避免这种情况

内联样式

- style
- style只负责接收动态样式

```
<view style="color:{{color}};" />
```

- class

```
<view class="normal_view" />
```

选择器

- class
- id
- el
- el, el
- ::after
- ::before

全局样式与局部样式

- 定义在 app.wxss 中的样式为全局样式
- page 的 wxss 文件中定义的样式为局部样式