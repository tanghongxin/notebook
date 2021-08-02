# 002.jQuery选择器操作

# 筛选器操作

- index() 取得当前元素的索引
- index(el) 返回el（jQuery对象/DOM对象）的索引
- eq() // 返回jQuery对象数组指定下标的jQuery对象（直接用下标返回DOM对象）

```
<ul>    <li><a href="javascript:void(0)">1</a></li>    <li><a href="javascript:void(0)">2</a></li></ul>
```

```
$(document).ready(function () {        $('li').click(function (e) {            console.log($('li').index($(this)));            /*console.log($('li').index()); // 返回第一个元素索引*/        })    });
```

## 链式调用

- 前提是返回值的jQuery对象

```
$('img').css('width', 100).attr('alt', '图片'); // 100会自动补全变为100px
```