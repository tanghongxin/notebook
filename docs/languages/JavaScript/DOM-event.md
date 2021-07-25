# DOM 事件

## 常用事件

> Window/Element事件

- ```onload``` 一个页面后一幅图像加载完成 // 推荐使用DOMContentLoaded
- ```onresize``` 浏览器窗口被调整大小时触发
- ```onscroll``` 滚动条改变时
- ```onunload``` 离开页面时
- ```onerror``` 在错误发生时运行的脚本
- ```onhaschange``` 文档已改变时运行的脚本
- ```onafterprint``` 文档打印后~
- ```onbeforeprint``` 担当打印前~
- ```oonpageshow``` 窗口成为可见时~

> 鼠标事件

- ```onclick``` 点击（左键）
- ```oncontextmenu``` 点击（右键）
- ```ondblclick``` 双击
- ```onmousedown``` 鼠标按下
- ```onmousemove``` 鼠标移动
- ```onmouseout``` 鼠标移出
- ```mouseleave``` 同上 可以避免事件穿透
- ```onmouseover``` 鼠标移动到元素上
- ```mouseenter``` 同上 可以避免事件穿透
- ```onmouseup``` 在元素上释放鼠标
- ```ondrag``` 元素被拖动时运行的脚本（H5）

> 键盘事件

- ```onkeydown``` 按下键
- ```onkeyup``` 抬起键
- ```onkeypress``` 长按

### 注意

- 事件可能会相互影响，如onkeypress会触发onkeydown

> DOM0 vs DOM2

- DOM0级，后面的事件会覆盖前面的事件，触发时执行最新事件
- DOM2级，多个相同事件可以并存，触发时依次执行

## 事件对象

> ie事件对象

```javascript
window.onload = function () {    console.log(window.event);***REMOVED***;
```

> 其他浏览器事件对象

```javascript
window.onload = function(event) {    console.log(event);***REMOVED***;
```

# 属性

> DOM Event属性（无单位）

- ```clientX``` 鼠标相对于浏览器可视区域的坐标（受滚动影响）
- ```clientY```
- ```offsetX``` 鼠标相对元素的坐标（穿透闪烁）
- ```offsetY```
- ```screenX``` 鼠标相对于电脑屏幕的坐标
- ```screenY```
- ```pageX``` 鼠标相对于视窗左侧的距离（不受滚动影响）
- ```pageY```

```javascript
// 计算鼠标所属位置在某个元素的相对位置
const { top, left ***REMOVED*** = element.getBoundingClientRect(
const { pageX, pageY, screenX, screenY ***REMOVED*** = event 
const style = {
	top: pageY - top,
	left: pageX - left
***REMOVED***
```

> DOM Element 属性（无单位）

- ```clientWidth``` 元素可视区域的宽度（可视内容+padding）
- ```clientHeight```
- ```offsetWidth``` 元素的宽度（内容+padding+border）
- ```offsetHeight```
- ```offsetLeft``` 鼠标所在元素相对于父元素的定位
- ```offsetTop```
- ```scrollWidth``` 元素整体宽度（可视内容+滚动条内容+padding）
- ```scrollHeight```
- ```scrollTop``` 元素最上方到可视区域最上边的距离（即滚动条向下滚动的距离）
- ```scrollLeft```
- ```width``` 宽度（img等标签）
- ```height```

## 绑定事件（异步）

- addListener('eventName', callback, options)

## 注销事件（同上）

- removeEventListener ('eventName', callback, useCapture);
- detachEvent ('eventName', callback, useCapture); // ie独有 跳过

## 捕获vs冒泡

> 标准模型的传播机制分为三个阶段

1. 捕获
2. 目标节点触发事件
3. 冒泡（默认）

> 传播机制

1. 捕获：从外到里
2. 冒泡：从里到外

### 阻止事件的方法

> 停止传播/冒泡（ie）

- window.event.cancelBubble = true;

> 停止传播/冒泡

- e.stopPropagation();

> 阻止浏览器默认行为

- e.preventDefault();