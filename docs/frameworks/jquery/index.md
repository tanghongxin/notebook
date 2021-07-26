# 001.jQuery初识

# 初识

## 选择器

> CSS支持的选择器jQuery选择器都支持

1. 后（子）代选择器

- find 所有后代
- children 儿子代

1. 兄弟选择器

- silbings
- next 紧跟的兄弟元素
- nextAll 后方的所有兄弟元素
- prevAlll

1. （祖）父辈选择器

- parent 父辈元素
- parents 祖先元素

1. 属性选择器

- [att=val]
- [att*=val] 匹配给定的属性是以包含某些值的元素
- [att^=val] 匹配给定的属性是以某些值开始的元素
- [att$=val] 匹配给定的属性是以某些值结尾的元素

5.其他

- :first
- :last
- :first-child
- :last-child

## 兼容性

- 1.x 兼容ie9以下
- 3.x ie9+

## 入口函数

> $是jQuery的别称 jQuery可以有多个入口函数（按顺序执行）

- $(‘document’).ready(function () {} )
- $(function () {} )
- jQuery(‘document’).ready(function () {} )
- jQuery(function () {} )

## jQuery对象与DOM对象

- jQuery对象是DOM对象的数组（对象）包含
- DOM对象是jQuery对象的取下标（或使用get()）

> 案例

```
$('audio')[0].play();// 等同于$('audio').get(0).play();var btnDom = getElementById("btn");$(btnDom).show();// 等同于$('#btn').show();
```

## jQuery与其他框架共存

- noConflict() 释放$标识符

```
// demo1$.noConflict();jQuery(document).ready(function(){  jQuery("button").click(function(){    jQuery("p").text("jQuery 仍在运行！");  });});// demo2var jq = $.noConflict();jq(document).ready(function(){  jq("button").click(function(){    jq("p").text("jQuery 仍在运行！");  });});// demo3 把 $ 符号作为变量传递给 ready 方法$.noConflict();jQuery(document).ready(function($){  $("button").click(function(){    $("p").text("jQuery 仍在运行！");  });});
```

# 003.jQuery基本操作

# 基本操作

## 返回jQuery对象

### 属性

- attr()
- removeAttr()
- prop()
- removeProp()

> attr()与prop()对比

```
<input type="checkbox" checkd /> //checked默认为false
```

```
let attrA = $('input').attr("checked"); // 返回undefined而非falselet propA = $('input').prop("checked"); // 返回false/* * attr() * As of jQuery 1.6, the .attr() method returns undefined for attributes  * that have not been set. To retrieve and change DOM properties such as the  * checked, selected, or disabled state of form elements, use the .prop() method.*/
```

### CSS

- css() // 原生css写法而非小驼峰命名法
- addClass() //如果已存在则不追加
- removeClass() // 如果不存在则不删除
- toggleClass()
- height([value][, function (index, height))
- width()
- innerHeight() 获取第一个匹配元素内部区域高度（不包括补白和边框）// 此方法对可见和隐藏元素均有效
- innerWidth()
- outerHeight([true]) 获取第一个匹配元素外部高度（默认包括补白和边框）// 同上
- outerWidth([true])
- offset()
- position() 返回的对象包含两个整型属性：top 和 left // 此方法只对可见元素有效
- scrollTop([number]) 返回/设置滚动条顶部偏移
- scrollLeft([number]) ~~~左侧偏移

```
$("p").css("background-color", 'red'); // 设置单个csscss({"background-color":"red","font-size":"14px"}); //设置多个css
```

### 事件

- on()
- off()
- trigger()

```
// demo1事件绑定$('li').click(function () {    $(this).css('background-color', 'red');});// 等同于$('li').on('click', function () {    $(this).css('background-color', 'red');})// demo2事件委托$('ul').on('click', 'li', [,data] function () {    $(this).css('background-color', 'red');})
```

### 文本

- text([‘xx’]) 获取/重置内容
- html([‘xx’]) 获取/重置内容
- append() 追加内容

### DOM

1. 内部插入

- append(‘xx’[, function (index, html]) // function 略过
- appendTo(‘xx’)
- prepend(‘xx’[, function (index, html]) // 向所有匹配元素内部的开始处插入
- prependTo(‘xx’)

1. 外部插入

- after()
- before()
- insertAfter()
- insertBefore()

1. 包裹
2. 替换

- replaceWidth(‘xx’)
- replactAll($selector)

1. 删除

- empty()
- remove() 删除元素
- detach() 删除子元素

1. 复制

- clone([false]) 复制节点对象 // 为true时将事件也复制

### 工具

- $.each() 遍历数组

```
var arr=[1,2,3,4];$.each(arr,function(i,n){    alert("索引" + i + "对应的值" + n);});
```

- each() 为每个匹配元素规定运行的函数

```
$("button").click(function(){  $("li").each(function(){ // function(index,element)默认    alert($(this).text())  });});
```

### ajax