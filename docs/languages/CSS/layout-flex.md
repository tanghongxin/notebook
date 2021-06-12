# [flex](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex)

## 容器属性

### [flex-direction](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-direction) 

主轴方向

- ```row```
- ```row-reverse```
- ```column```
- ```column-reverse```

### [flex-wrap](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-wrap) 

当主轴排列不下项目时如何换行

- ```nowrap```
- ```wrap ```
- ```wrap-reverse```

### flex-flow: flex-direction 和 flex-wrap 属性的简写形式

```css
.box {
	/* 默认 */
	flex-flow: row nowrap;
***REMOVED***
```

### [justify-content](https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content)

项目在主轴上的对齐方式

- ```flex-start``` 左对齐
- ```flex-end```右对齐
- ```center``` 居中
- ```space-between``` 两段对齐（中间部分的间隔相等）
- ```space-around``` 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍

### [align-items](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items) 

项目在交叉轴上如何对齐

- ```flex-start``` 同上
- ```flex-end``` 同上
- ```center``` 同上
- ```baseline``` 项目的第一行文字的基线对齐
- ```stretch``` （默认值）如果项目未设置高度或设为auto，将占满整个容器的高度

### [align-content](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-content) 

多根轴线的对齐方式

## 元素属性

- ```order```
- ```flex-grow```
- ```flex-shrink```
- ```flex-basis```
- ```align-self```

### order: 定义项目的顺序，越小越靠前（默认值为0）

### flex-grow: 定义项目的放大比例，