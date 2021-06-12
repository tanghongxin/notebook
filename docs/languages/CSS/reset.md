# User Agent Stylesheet

> HTML4 部分基本样式

```css
th { font-weight: bolder; text-align: center; ***REMOVED***;
caption { text-align: center; ***REMOVED***
body { margin: 8px; ***REMOVED***;
h1 { font-size: 2em; margin: .67em 0; ***REMOVED***
button,
textarea,
input,
object,
select { display:inline-block; ***REMOVED***
strong { font-weight: bolder; ***REMOVED***
link,
:visited { text-decoration: underline; ***REMOVED***
```

## 形成原因

- 在没有指定的CSS样式时浏览器按内置样式表渲染

## 缺点

- 不同浏览器甚至同一浏览器不同版本的默认样式是不同的
- 不能满足个性化需求

## 解决

- css reset

### 什么时候不需要 reset

- 行内元素不会应用 ```width``` 属性，其宽度由内容撑开
- 行内元素不会应用 ```height``` 属性，其高度也是由内容撑开的，但是高度可以通过line-height调节
- 行内元素的 ```padding``` 属性只对 ```padding-left``` 和 ```padding-right``` 生效，``` padding-top``` 和 ```padding-bottom``` 会改变元素范围，但不会对其它元素造成影响
- 行内元素的 ```margin``` 属性只对 ```margin-left``` 和 ```margin-right``` 有效
- 行内元素的 ```overflow``` 属性无效
- 行内元素的 ```vertical-align``` 属性无效（```height``` 属性无效）

### reset 的注意

- ```float``` 元素不指定 ```width```，其 ```width``` 根据内容变化
- 对 ```absolute``` 和f ```fixed``` 元素，设置了 ```width``` 之后，```left``` 和```right``` 同时存在，只有 ```left``` 生效；不设置 ```width```，只有 ```content``` 时，```left``` 和 ```right``` 同时生效。同样，设置了 ```height``` 之后，```top``` 和 ```bottom``` 同时存在时，只有 ```top``` 生效；不设置 ```height```，只有内容时，```top``` 和 ```bottom``` 同时生效
- 对 ```absolute``` 和 ```fixed``` 元素，```float```无效
- 元素设置了 ```float``` 属性或者是``` absolute``` ```fixed``` 定位，那么 ```vertical-align``` 属性不再起作用
- ```float``` 和 ```position: absolute``` 与 ```position: fixed``` 后 ```display``` 为 ```block```，未指定宽高则由内容决定

> 天猫前端 cssreset

```css
body,
h1 ,h2, h3, h4, h5, h6, hr, p,
blockquote, dl, dt, dd, ul, ol, li, pre,
form, fieldset, legend, button, input, textarea,
th, td { margin: 0; padding: 0; ***REMOVED*** 

body, button, input, select, textarea {
  font: 12px "microsoft yahei";
  line-height: 1.5;
  -ms-overflow-style: scrollbar;
***REMOVED***

h1, h2, h3, h4, h5, h6 { font-size: 100%; ***REMOVED***
ul, ol { list-style: none;***REMOVED***

a { text-decoration: none; cursor:pointer; ***REMOVED***
a:hover { text-decoration: underline; ***REMOVED***

img { border: 0 ***REMOVED***
```
