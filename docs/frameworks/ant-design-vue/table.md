# Table

[组件规范](https://www.hongweipeng.com/index.php/archives/1724/?from=groupmessage&isappinstalled=0)

## Scroll

### x

原则：即在1920页面宽度尽量不出现滚动条，且最好是左侧菜单不收缩的情况下不出现滚动条

### y

```
const top = '10px'const scroll = {    y: 'calc(100vh - ${top})'}
```

## 换行

1. 当某列宽度不足内容宽度时，内容发生换行，行高发生畸变，在 fixed 列情况下对造成列无法对齐

## 溢出

如何在行宽度过大或不确定时设置自动省略号 + tooltip？

## 问题

当使用customRender + slot-scop 时，直接修改数据里的内容插槽非响应式更新？