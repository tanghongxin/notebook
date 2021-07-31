# Vue 集成

## With Vue 思路

- props 动态构造
- 实例暴露
- 上下文 prps 传递
- 事件监听

```html
<amap-map @complete="loading = false">
  <template slot="tools" slot-scope="{ map }">
    <amap-fence-selector :map="map" />
  </template>
</amap-map>
```

- 响应式

![](https://gitee.com/net-space/picture_bed/raw/master/uPic/2021/07/31/5.12-29-52.gif)

## 案例

- 事件传递

![](https://gitee.com/net-space/picture_bed/raw/master/uPic/2021/07/31/4.12-31-24.gif)

- 组件封装

![](https://gitee.com/net-space/picture_bed/raw/master/uPic/2021/07/31/3.12-32-25.gif)

## 踩坑点

- 领域知识，文档学习成本
- 秘钥安全

![](https://gitee.com/net-space/picture_bed/raw/master/uPic/2021/07/31/2.12-33-11.png)

- 缓存

![](https://gitee.com/net-space/picture_bed/raw/master/uPic/2021/07/31/1.12-33-40.png)

- 异步等待

## 待改进

- 插件间异步等待方案（流量 / 首屏加载）
- 高效的封装与维护策略 / 源码可读性
- 缓存可行性 / 网络波动
