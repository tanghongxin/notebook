# 函数

## 用途

- 功能封装
- 复用

## 结构

1. 函数名（非必须）
2. 形参（可以为空）
3. 函数体（可以为空）

> 函数名

1. 匿名函数被紧跟着的第一个括号执行，或将匿名函数封装在一个有名函数中

> 参数

1. 使用参数，是为了函数内部与外部隔离（作用域）
2. 参数会放在 ```arguments``` 数组中
3. 形参在定义函数时给定
4. 实参在调用函数时给定
5. 任何数据类型都可以做参数，数组、对象、函数等做参数时为浅复制

> 结构体

1. ```return``` 用于返回结果或跳出循环，没有显式设置 ```return``` 值默认 ```return undefined```
2. ```continue``` 用于结束档次循环，进入下一次循环
3. ```break``` 结束循环

## 声明

1. ```function``` // (关键字)会导致函数提升
2. ```var a = function () {***REMOVED***``` // (表达式) ES5导致变量提升 ES6不提升
3. ```[new] Function (arguments, functionBody)```


## this

- this 始终指向运行时所属的对象，箭头函数中的 this 指向其外层作用域

## 改变 this 指向

### apply

```javascript
// 模拟实现
Function.prototype.apply = function (ctx, argus = []) {
  const key = new Symbol(`${Date.now()***REMOVED***-${Math.random()***REMOVED***`)
  if (!ctx) {
    ctx = window
  ***REMOVED***
  Reflect.defineProperty(ctx, key, this)
  const result = ctx[key](...argus)
  Reflect.deleteProperty(ctx, key)
  return result
***REMOVED***
```

### call
```javascript
// 模拟实现
Function.prototype.call = function (ctx, ...argus) {
  return this.apply(ctx, argus)
***REMOVED***
```

### bind
```javascript
// 模拟实现
Function.prototype.bind = function (ctx, ...argus) {
  return function () {
    return this.apply(ctx, argus)
  ***REMOVED***
***REMOVED***
```

## 清除

```javascript
// setTimeout 异步
var time = setInterval(function () {
    //
***REMOVED***, 1000);

clear(time); //重新初始化变量
time = Null; //销毁变量
```

## 特点

1. 函数声明可以放在调用之后
2. 函数内部可以访问函数上下文中的任何变量
3. 作用域与闭包：闭包用来访问自己作用域中的变量
4. 使用var声明时作用域会提升到栈顶，此时先声明后调用

## 回调函数

> 作为参数的函数称为回调函数，多用于异步（异步是为了解决JS单线程性能问题与轮询性能消耗）：ES5 callback / ES6: promise / ES7:async/await

```javascript
var fn = function () {
	console.log("hello")
***REMOVED***
setTimeout(fn, 1000)
fn = Null // 打印失败
```

## IIFE

> ()()定义后立马调用

### 用途

- 解决作用域污染

```javascript
(function test () {    console.log("hello");***REMOVED***)();//打印hellotest();//打印失败
```

