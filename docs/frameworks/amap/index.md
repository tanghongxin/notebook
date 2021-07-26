# 高德地图

## 技术特点

- 多端覆盖
- 原生语法


## 注意事项

### 生命周期

1. 引入
2. 创建
3. 加载
4. 销毁

### 上下文

- 插件，地图实例传递
- 事件传递
- …

### 内存泄漏

- 事件移除
- 销毁顺序
- …

## With Vue 思路

- props 动态构造
- 实例暴露
- 上下文 prps 传递
- 事件监听

```
<amap-map @complete="loading = false">    <template slot="tools" slot-scope="{ map }">      <amap-fence-selector :map="map" />    </template></amap-map>
```

- 响应式

[https://note.youdao.com/yws/api/personal/file/627BB55AE8954C1CBA001DE7A184A9D8?method=download&shareKey=a72ef07fb50d3a10011eeaf26b822973](https://note.youdao.com/yws/api/personal/file/627BB55AE8954C1CBA001DE7A184A9D8?method=download&shareKey=a72ef07fb50d3a10011eeaf26b822973)

image

## 案例

- 事件传递

[https://note.youdao.com/yws/api/personal/file/3231CA247C7B4A6C8A2EC69959231369?method=download&shareKey=9ebe199012c99c598ffae7a1a8e1ddf9](https://note.youdao.com/yws/api/personal/file/3231CA247C7B4A6C8A2EC69959231369?method=download&shareKey=9ebe199012c99c598ffae7a1a8e1ddf9)

image

- 组件封装

[https://note.youdao.com/yws/api/personal/file/AA5E8FC0B8034F6C80273C17C1F963A4?method=download&shareKey=464c1b03f81115460d0e9b772695f808](https://note.youdao.com/yws/api/personal/file/AA5E8FC0B8034F6C80273C17C1F963A4?method=download&shareKey=464c1b03f81115460d0e9b772695f808)

image

## 踩坑点

- 领域知识，文档学习成本
- 秘钥安全

[https://note.youdao.com/yws/api/personal/file/7640149EE65647A18E6D5E1A4BD9C4D6?method=download&shareKey=2d0765865536b63fbcc23d61ef10acb0](https://note.youdao.com/yws/api/personal/file/7640149EE65647A18E6D5E1A4BD9C4D6?method=download&shareKey=2d0765865536b63fbcc23d61ef10acb0)

image

- 缓存

[https://note.youdao.com/yws/api/personal/file/249CCF3B67AD4DFA9A13DBC83C2C05C2?method=download&shareKey=6e1e9a5ed8ff56f84aa3dd044e1e55dc](https://note.youdao.com/yws/api/personal/file/249CCF3B67AD4DFA9A13DBC83C2C05C2?method=download&shareKey=6e1e9a5ed8ff56f84aa3dd044e1e55dc)

image

- 异步等待

## 待改进

- 插件间异步等待方案（流量 / 首屏加载）
- 高效的封装与维护策略 / 源码可读性
- 缓存可行性 / 网络波动