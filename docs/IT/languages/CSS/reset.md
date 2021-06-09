# CSS基本样式与重置

# 基本样式（user agent stylesheet）与重置

> HTML4 部分基本样式

```
th {    font-weight: bolder; text-align: center ***REMOVED***;caption {    text-align: center ***REMOVED***;body {margin: 8px ***REMOVED***;h1 {    font-size: 2em; margin: .67em 0 ***REMOVED***;button, textarea,input, object,select {    display:inline-block; ***REMOVED***;strong {     font-weight: bolder ***REMOVED***;:link, :visited {     text-decoration: underline ***REMOVED***
```

## 形成原因

- 在没有指定的CSS样式时浏览器按内置样式表渲染

## 缺点

- 不同浏览器甚至同一浏览器不同版本的默认样式是不同的
- 不能满足个性化需求

## 解决

- css reset

# 重置（reset）

## 什么时候不需要reset

- 行内元素不会应用width属性，其宽度由内容撑开
- 行内元素不会应用height属性，其高度也是由内容撑开的，但是高度可以通过line-height调节
- 行内元素的padding属性只对padding-left和padding-right生效，padding-top和padding-bottom会改变元素范围，但不会对其它元素造成影响
- 行内元素的margin属性只对margin-left和margin-right有效
- 行内元素的overflow属性无效
- 行内元素的vertical-align属性无效（height属性无效）

## reset的注意

- float元素不指定width，其width根据内容变化
- 对absolute和fixed元素，设置了width之后，left和right同时存在，只有left生效；不设置width，只有content时，left和right同时生效。同样，设置了height之后，top和bottom同时存在时，只有top生效；不设置height，只有内容时，top和bottom同时生效
- 对absolute和fixed元素，float无效
- 元素设置了float属性或者是absolute、fixed定位，那么vertical-align属性不再起作用
- float和position: absolute与position: fixed后display为block，未指定宽高则由内容决定

## 案例（部分代码）

> 天猫前端cssreset

```
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td {margin: 0;padding: 0***REMOVED***body, button, input, select, textarea {font: 12px "microsoft yahei";line-height: 1.5;-ms-overflow-style: scrollbar***REMOVED***h1, h2, h3, h4, h5, h6 {font-size: 100%***REMOVED***ul, ol {list-style: none***REMOVED***a {text-decoration: none;cursor:pointer***REMOVED***a:hover {text-decoration: underline***REMOVED***img {border: 0***REMOVED***
```