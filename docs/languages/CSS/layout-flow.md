# 流

## 标准文档流

### 布局顺序

- 从上往下
- 从左往右

## 浮动

1. ```float: left;```
2. ```float: right;```

### 清除

- ```clear:both```
- ```overflow:hidden``` （下拉菜单不适用）

### 特点

1. 浮动是改变自己在父元素下的位置，脱离文档流
2. 未清除浮动不能撑开父元素高度
3. inline元素浮动后默认display: block;
4. 浮动元素width未指定则根据内容显示
5. 未清楚浮动，其下方元素会被覆盖，但内容会让出被覆盖的部分

## 定位

### 步骤

1. ```position``` 决定参照物
2. ```bottom``` ```top``` ```left``` ```right``` 决定位置

### 分类

1. ```static``` 默认，基于文档流
2. ```absolute``` 绝对定位，破坏文档流。从父级开始寻找第一个position不为static的盒子，到顶层则相对于
3. ```relative``` 相对定位，不破坏文档流。基于标准文档流下自己的初始位置，定位后实际位置改变，但原先位置保留
4. ```fixed``` 固定定位，破坏文档流。基于浏览器窗口
5. ```sticky``` 吸顶（滚动到一定距离后）

### 特点

1. 只有使用了定位 ```z-index```才有意义
2. ```absolute```不能撑开父元素高度
3. ```absolute``` ```fixed``` 后默认 ```display: block;``` 未指定宽高时由内容决定

## 定位 VS 浮动

- 两者都是流
- 设置了 ```position :absolute | fixed``` 则该元素就不能设置 ```float```
- 设置了 ```position :relative``` 可以浮动，因为它未脱离标准文档流
- ```position: absolute``` 和 ```float``` 会隐式地改变 ```display``` 为 ```inline-block``` 并且无法修改
- position: relative不改变 ```display ```的类型