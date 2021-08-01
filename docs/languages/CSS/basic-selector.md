# 选择器

## 语法结构

1. 选择器
2. {}
3. 属性: 值;

```css
p { color: red; }
```

## 类型

### 标签选择器

```css
div { color: red;}
```

### 类选择器

```html
<style>
  .box { color: red; }
</style>

<div class="box"></div>
```

### id 选择器

```html
<style>
  #box { color: red; }
</style>

<div id="box"></div>
```

### 交集选择器

```html
<style>
  div.box { color: red; }
</style>

<div class="box"></div>
```

### 后代选择器

```html
<style>
  .parent .box { color: red; }
</style>

<div class="parent">
  <p class="box">hello</p>
</div>
```
### 属性选择器
- ```[att=val]```
- ```[att*=val]``` 匹配给定的属性是以包含某些值的元素
- ```[att^=val]``` 匹配给定的属性是以某些值开始的元素
- ```[att$=val]``` 匹配给定的属性是以某些值结尾的元素

### 伪类选择器
- ```:link```
- ```:visited```
- ```:hover```
- ```:active```

### 伪元素选择器（后代选择器要求必须为同一个父类）
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
li:nth-child(odd) { background:yellow; }
/*所有第偶数个子元素的样式设置*/
li:nth-child(even) { background:red; } 
```

## 优先级

交集或后代选择器 > id选择器 > class选择器 > 标签选择器