# 数据类型

## 数据类型的作用

- 负责存储的分配

## 六大类型

1. ```Number```
2. ```Boolean```
3. ```String```
4. ```Object```
5. ```Null```
6. ```Undefined```

## 查看数据类型

> typeof

- ```Array```、```Null``` 输出 ```Object```

## Boolean

```javascript
var flag = true;
```

> 定义

1. ```1```  等同于 ```true```
2. ```0 ``` 等同于 ```false```

```javascript
Number(true) == 1; 100 / 0 == Infinity; 100 / false == Infinity;
```

> 表示（常用变量名）

- ```status```
- ```state```
- ```flag```
- ```boolean```

## String

```javascript
var str = "hello world";
```

> 注意

1. 字符串可以用下标取值，但字符串不是数组（不推荐）
2. 规范用单引号

> 非变异方法

- ```toUpperCase()```
- ```toLowerCase()```
- ```charCodeAt(index)``` 返回字符串中某个字母的 Unicode 码
- ```charAt()``` //index不存在返回空字符串 chaAt()返回undefined
- ```substring()``` 截取字符串//左闭右开
- ```substr()``` 截取字符串//起点 长度
- ```slice()``` 截取字符串//左闭右开 参数为空默认为起点/终点
- ```split()```
- ```indexOf()``` //找不到返回-1
- ```lastIndexOf()``` //从后向前
- ```includes()``` //返回Boolean值
- ```replace()```

## Array

```javascript
var arr = [1,2,3,4];var arr = new Array(1,2,3,4);
```

> 注意

1. ```queue```：队列，先入先出
2. ```stack```：栈，先入后出

> 变异方法

- ```push()``` 向数组的末尾添加一个或多个元素，并返回新的长度
- ```pop()``` 删除数组的最后一个元素 // 数组长度-1，并返回被删除的元素的值
- ```unshift()``` 向数组的开头添加一个或更多元素，并返回新的长度
- ```shift()``` 把数组的第一个元素从其中删除，并返回第一个元素的值
- ```splice(start, length[, item1, item2, …])``` 向/从数组中添加/删除项目，然后返回包含被删除的项目的数组
- ```slice(start,end)``` 返回指定位置的数组 // 左闭右开
- ```reverse()```
- ```fill(val, [start, end])``` // 使用val填充数组（左闭右开) （如果填充的类型为对象，那么被赋值的是同一个内存地址的对象）

> 非变异方法

- ```slice()```
- ```indexOf()```
- ```lastIndexOf()```
- ```inCludes()```
- ```join()```
- ```forEach()``` 对数组的每一个元素都执行一次提供的函数 // 不改变原数组，返回undefined
- ```reduce((argu1, argu2) => argu1 + argu2)``` // 遍历，第一次的结果作为第二次的参数1，第一次的参数1为第一个元素，参数2始终为后一个元素


- ```map()``` 创建一个新的数组

### 删除数组中间的元素

- ```delete(position)``` // 不重建索引，数组下标取值为undefined 遍历输出也会跳过它
- ```splice(start, length)``` // 重建索引

## Object

### 创建

> 字面量创建

```javascript
var person = { name: 'Tang', age: 18 }
person = new Object(); person.name = 'Tang'; person.age = 18
```

> new运算符

```javascript
var person = new Object();person['name'] = 'Tang';person.age = 18;
```

> 构造函数

```javascript
function person (firstname, lastname, age, eyecolor) {
  this.firstname = firstname
  this.lastname = lastname
  this.age = age
  this.eyecolor = eyecolor
};
var myFather = new person('Bill', 'Gates', 56, 'blue')
```

### 操作

### 属性

> 读取

```javascript
var person = { name: 'Tang', age: 18 }
console.log(person.name)
var n = 'name'; console.log(person.n)
// 报错console.log(person.[n]);//Object自身有name属性console.log(person.name);
```

> 删除

```javascript
var person = { name: 'Tang', age: 18 }
delete person.name
```

> 检测

- ```in ```检测属性是否存在

```javascript
var person = { name: 'Tang', age: 18 }
alert(('name' in person)) // true
```

- ```hasOwnProperty``` 检测是否为自定义属性

```javascript
var person = { name: 'Tang', age: 18 }
alert(person.hasOwnProperty('name')) // true
```

- ```propertyIsEnumerable``` 检测属性是否可枚举 （跳过）

### 遍历

> for…in…

```javascript
var person = { name: 'Tang', age: 18 }
for (var k in person) { console.log(person[k]) };
```

> Object.keys()遍历

```javascript
var person = { name: 'Tang', age: 18 }
Object.keys(person).forEach(function (key) { console.log(key, person[key]) })
```

## Number

> 数字 NaN

> 变异方法

- ```toFixed()```

> 非变异方法

- ```toString()```
- ```valueOf()```

## Null Undefined

> 辨析

- 未初始化的变量为 undefined
- 不存在的变量为 null

# 003.JS数据类型（下）

# 数据类型（特殊）

> 绝种对象（不能实例化）

- ```JSON```
- ```Math```
- ```arguments```

## Math

> 属性

- PI

> 非变异方法

- ```round()``` 四舍五入
- ```floor()``` 向下取整
- ```ceil()``` 向上取整
- ```pow()``` 次方//参数1底数 参数2指数
- ```sqrt()``` 开方//参数1被开方数 参数二次数
- ```sin()```
- ```abs()``` 绝对值
- ```random()``` 返回0-1之间的随机数 无形参 // 真随机数！

## Date

> 实例化

```javascript
//创建当前日期对象
var date = New Date();
//创建指定日期对象
var date = New Date('1999/02/02 12:12:12');
var date = New Date('1999-02-02 12:12:12');
```

> 非变异方法

- ```toLocaleDateString()``` 根据本地时间把Date对象的日期部分转换为字符串
- ```toLocaleTimeString()``` 根据本地时间把Date对象的上下午时分秒转换为字符串
- ```getDay()``` 获取星期几
- ```getDate()``` 获取几号
- ```getMonth()``` 获取月份 需要加一
- ```getYear()``` 获取以1990为基数的差值年
- ```getFullYear()```获取当前年
- ```getMinutes()```
- ```getSeconds()```
- ```getMilliseconds()```
- ```getTime()```返回距1970-1-1之间的毫秒数

## 正则表达式

- 匹配英文

  ```javascript
  /[a-z]/
  ```

- 匹配数字

  ```javascript
  /[0-9]/
  ```

- 匹配电话

  ```javascript
  /^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/
  ```

- 指定长度的数字

  ```javascript
   /^\d{6}$/ /^[0-9]{6}$/
  ```

- 非数字

  ```javascript
  /[^0-9]/
  ```

- 匹配特殊字符

  ```javascript
  /[-+_]/
  ```

- 匹配包括下划线的任何单词字符

  ```javascript
  /[A-Za-z0-9_]//\w/
  ```

## Symbol <Badge text="TODO" type="warning" />

> Symbol

每个从 `Symbol()` 返回的symbol值都是唯一的，一个symbol值能作为对象属性的标识符。

```javascript
console.log(Symbol('foo') === Symbol('foo'))
// expected output: false
```

> Symbol.for

和 `Symbol()` 不同的是，用 `Symbol.for()` 方法创建的的 symbol 会被放入一个全局 symbol 注册表中。`Symbol.for() 并不是每次都会创建一个新的 symbol`，它会首先检查给定的 key 是否已经在注册表中了。假如是，则会直接返回上次存储的那个。否则，它会再新建一个。

```javascript
console.log(Symbol.for("bar") === Symbol.for("bar"))
// expected output: true
```

