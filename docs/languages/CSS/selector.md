# 001.CSS选择器

# CSS选择器

## 基本语法

```css
p { color: red; ***REMOVED***
```

## 语法结构

1. 选择器
2. {***REMOVED***
3. 属性: 值;

## 选择器

### 标签选择器

> 直接使用标签作为选择器

```css
div {    color: red;***REMOVED***
```

### 类选择器

> 先定义类名，而后进行类选择 .类名

```html
<style>
  .box { color: red; ***REMOVED***
</style>

<div class="box"></div>
```

### id选择器

> 先定义ID名，而后进行id选择 #id名

```html
<style>
  #box { color: red; ***REMOVED***
</style>

<div id="box"></div>
```

### 交集选择器

```html
<style>
  div.box { color: red; ***REMOVED***
</style>

<div class="box"></div>
```

### 后代选择器

```html
<style>
  .parent .box { color: red; ***REMOVED***
</style>

<div class="parent">
  <p class="box">hello</p>
</div>
```

## 选择器优先级

交集或后代选择器 > id选择器 > class选择器 > 标签选择器



# CSS高级选择器

# CSS高级选择器

1. 属性选择器
- ```[att=val]```
- ```[att*=val]``` 匹配给定的属性是以包含某些值的元素
- ```[att^=val]``` 匹配给定的属性是以某些值开始的元素
- ```[att$=val]``` 匹配给定的属性是以某些值结尾的元素
1. 伪类选择器
- ```:link```
- ```:visited```
- ```:hover```
- ```:active```
1. 伪元素选择器（后代选择器要求必须为同一个父类）
- ```:before```
- ```:after```
- ```:root``` 文档树的最顶层结构的元素…
- ```:empty``` 指定当元素的内容为空时使用样式
- ```:first-child```
- ```:last-child```
- ```:nth-child()```
- ```:nth-last-child()``` 倒数第几个元素
- …

```css
/*所有第奇数个子元素的样式设置*/
li:nth-child(odd) { background:yellow; ***REMOVED***
/*所有第偶数个子元素的样式设置*/
li:nth-child(even) { background:red; ***REMOVED*** 
```