# 005.JS BOM DOM

# DOM BOM

## DOM节点引用

> 返回HTMLCollection类数组

1. ```getElementById(’’)```
2. ```getElementsByName(’’)```
3. ```getElementsByTagName(’’)```
4. ```getElementsByClassName(’’)```

> 返回NodeList类数组

1. ```querySelector(’’)```
2. ```querySelectorAll(’’)```

> 引用其他节点

- ```parentNode```
- ```parentElement``` IE
- ```childNodes```
- ```firstChild```
- ```lastChild```
- ```previousSibling```
- ```nextSibling```

## DOM节点操作

> DOM操作

- ```createElement(’’)``` 创建节点
- ```createTextNode(’’)``` 创建文本节点
- ```appendChild(newDiv)``` 添加节点
- ```insertBefore(newDiv,son)``` 插入节点
- ```replaceChild(newDiv,son)``` 替换子节点
- ```cloneNode(false)``` 复制节点
- ```removeChild(’’)``` 删除子节点 // this.parentNode.removeChild(this); …
- ```getAttribute(’’)``` 读取节点属性
- ```setAttribute(’‘,’’)``` 添加/删除节点属性
- ```removeAttribute(’’)``` 删除节点属性
- ```getComputedStyle(“元素”[, “伪类”])``` //颜色输出16进制

> 其他操作：原型对象转数组

```javascript
var divDoms = document.getElementsByTagName('div');
var divDomsArr = Array.prototype.slice.call(divDoms);
var divDomsArr = [].slice.call(divDoms);
```

## BOM操作

> 同步方法

- ```prompt()```
- ```alert()```
- ```clearInterval()```

> 异步方法

- ```setInterval()```