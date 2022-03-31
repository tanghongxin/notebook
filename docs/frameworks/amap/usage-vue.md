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

![](https://s2.loli.net/2022/03/31/jtZNLxIhOHJU5kY.gif)

## 案例

- 事件传递

![](https://s2.loli.net/2022/03/31/X4VMRedCIgkKFil.gif)

- 组件封装

![](https://s2.loli.net/2022/03/31/nquJkgPaYQSVRe7.gif)

## 踩坑点

- 领域知识，文档学习成本
- 秘钥安全

![](https://s2.loli.net/2022/03/31/PzdWOj3qgbGMI1B.png)

- 缓存

![](https://s2.loli.net/2022/03/31/mvgzRI9GBOPklFc.png)

- 异步等待

## 待改进

- 插件间异步等待方案（流量 / 首屏加载）
- 高效的封装与维护策略 / 源码可读性
- 缓存可行性 / 网络波动
