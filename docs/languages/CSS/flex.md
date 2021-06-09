# CSS flex

# flex: flexible box

> 概念

## 容器的属性

- ```flex-direction```
- ```flex-wrap```
- ```flex-flow```
- ```justify-content```
- ```align-items```
- ```align-content```

### flex-direction: 决定主轴的方向

- ```row```
- ```row-reverse```
- ```column```
- ```column-reverse```

### flex-wrap: 定义当主轴排列不下项目时如何换行

- ```nowrap``` // 不换行(挤在一起)
- ```wrap ```// 向下换行
- ```wrap-reverse``` // 向上换行

### flex-flow: flex-direction属性和flex-wrap属性的简写形式

> 案例

```css
.box {
	flex-flow: row nowrap; // 默认值
***REMOVED***
```

### justify-content: 项目在主轴上的对齐方式

- ```flex-start``` // 左对齐
- ```flex-end```// 右对齐
- ```cente```r // 居中
- ```space-between``` // 两段对齐（中间部分的间隔相等）
- ```space-around``` // 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍

### align-items: 定义项目在交叉轴上如何对齐

- ```flex-start``` // 同上
- ```flex-end``` // 同上
- ```center``` // 同上
- ```baseline``` // 项目的第一行文字的基线对齐
- ```stretch``` // （默认值）如果项目未设置高度或设为auto，将占满整个容器的高度

### align-content``` 定义多根轴线的对齐方式

// 跳过

## 项目的属性

- ```order```
- ```flex-grow```
- ```flex-shrink```
- ```flex-basis```
- ```align-self```

### order: 定义项目的顺序，越小越靠前（默认值为0）

### flex-grow: 定义项目的放大比例，