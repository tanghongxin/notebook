# 关于 JavaScript

## 发展历史

- 1995 LiveScript
- 1996 NetSpace2
- 1997 ECMAScript
- 1999 EMCAScript3
- 2009 ECMAScript5
- 2015 ECMAScript6

## 用途

- 表单验证-减轻服务器压力
- 页面动态效果
- RIA富客户端开发
- 服务器端开发（node.js）
- …

## 组成（web）

1. ```ECMAScript```
2. ```BOM```
3. ```DOM```

## 语言特点

1. 单线程
2. 解释型
3. 一切皆对象
4. 安全性
5. 跨平台
6. 动态类型、弱语言
7. 区分大小写
8. 事件驱动

## 运算符

> 算数运算符

```javascript
var a = 0, b = 1
a + b
a - b
a * b
a / b
a % b
a ++
a --
```

> 比较运算符

```javascript
var a = 0, b = 1
if (a > b) {***REMOVED***
if (a < b) {***REMOVED***
if (a == b) {***REMOVED***
if (a === b) {***REMOVED***
if (a >= b) {***REMOVED***
if (a <= b) {***REMOVED***
```

> 逻辑运算符

```javascript
var a = 0, b = 1
if(a == 1 && b == 1) {***REMOVED***
if(a !== 1 || b == 1) {***REMOVED***
```

> 隐式转换

```javascript
if(0) {***REMOVED***
if(1) {***REMOVED***
if(true) {***REMOVED***
if(false) {***REMOVED***
if(null) {***REMOVED***
if(undefined) {***REMOVED***
if('hello world') {***REMOVED***
```

> 其他运算符

- ```new```
- ```instanceof```
- 三目运算符
- 逗号运算符

## 流程控制语句

> while

```javascript
var i = 0;while(i < 10) {    i++;***REMOVED***;
```

> for

```javascript
for (var i = 0; i < 10; i++) {***REMOVED***;
```

> if else

```javascript
var i = 0;if (i === 0) {***REMOVED*** 
else if (if === 1) {***REMOVED***
else {***REMOVED***
```

> switch case

```javascript
switch(new Date().getDay()) {
  case 1:
    break
  default
    break
***REMOVED***
```