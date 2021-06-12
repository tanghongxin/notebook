# Reflow && Repaint

# 浏览器渲染过程

> 一段HTML代码

```
<!-- Author:TangHongxin Date:20180728 --><!DOCTYPE html><html lang="zh-CN"><head>    <meta charset="UTF-8">    <link href="style.css" rel="stylesheet">    <title>example</title>  </head>  <body>    <p>        Hello         <span>web performance</span>         students!    </p>    <div>        <img src="awesome-photo.jpg">    </div>  </body></html>
```

> 一段CSS代码

```
body {    font-size: 16px***REMOVED***p {    font-weight: bold***REMOVED***span {    color: red***REMOVED***p span {    display: none***REMOVED***img {    float: right***REMOVED***
```

> Render Tree

[https://note.youdao.com/yws/api/personal/sync?method=download&fileId=00E2BA62E89F4C66A8197787EE1154F9&version=2875&cstk=nZV%20LRV4M&keyfrom=web](https://note.youdao.com/yws/api/personal/sync?method=download&fileId=00E2BA62E89F4C66A8197787EE1154F9&version=2875&cstk=nZV%20LRV4M&keyfrom=web)

image

> 上述过程

1. 首先，解析 HTML Source，构建 DOM Tree；
2. 同时，解析 CSS Style，构建 CSSOM Tree；
3. 然后，组合 DOM Tree 与 CSSOM Tree，去除不可见元素，构建 Render Tree；
4. 再，执行 Reflow；
5. 最后，执行 Repaint。

> 完整过程

[https://note.youdao.com/yws/api/personal/sync?method=download&fileId=0CA2F284E1974454B1C1971BFAD913C6&version=2872&cstk=nZVLRV4M&keyfrom=web](https://note.youdao.com/yws/api/personal/sync?method=download&fileId=0CA2F284E1974454B1C1971BFAD913C6&version=2872&cstk=nZVLRV4M&keyfrom=web)

image

> 到底啥是Reflow和Repaint

1. Reflow 过程是布局计算每个对象的精确位置和大小；
2. Repaint 过程则是将 Render Tree 的每个像素渲染到屏幕上。

> 注意

1. Render Tree 只包含渲染网页所需要的节点；
2. Reflow一定会引起Repaint，Repaint不一定引起Reflow。

> 触发Reflow与Repaint的情况

1. 页面初始渲染
2. 添加/删除/修改DOM元素
3. 改变窗口尺寸：resize、scroll…

# 性能影响

## 表现

1. 页面加载缓慢；
2. 页面卡顿。

## 解决方案

### HTML优化

1. 减少不必要的 DOM 层级（DOM depth）。

### CSS优化

1. 动画元素采用fixed或absolute的定位；
2. 牺牲动画平滑度满足性能；
3. 使用class修改样式；
4. 选择器优化；
5. 为图片指定宽高。

### JS优化

1. 节流（提交事件、16ms渲染帧…）；
2. 防抖（输入事件…）。

### 浏览器优化

1. 队列批处理。

### 其他

1. 使用雪碧/精灵图。