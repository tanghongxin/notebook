# 001.PHP基本语法（上）

# PHP: （Hypertext Preprocessor）：超文本预处理器

## 特性

- 解释型语言
- 弱语言类型

> 高级语言与低级语言的区别

- 函数重载 & 函数重写

## 变量

> 声明

- $
- 必须以下划线或字母开头
- 只允许数字、字母、下划线
- 变量名区分大小写
- 推荐小驼峰命名法

## 注释

> 单行注释 一般放在代码后

```
$a = 1; // xxxxx
```

> 多行注释 一般放在代码上方

```
/***/
```

> 块注释 一般放在函数或类的前面

```
/*** @param $a 被除数* @param $a  除数* @return $result 结果*/function divid ($a, $b) {    return $a / $b;}
```

- 由操作数和操作符组成

## 操作数（标识符）

- 变量名
- 类名
- 接口名
- 常量名
- 对象名
- …

## 操作符（运算符）

> 赋值运算符

```
$a = 0;
```

> 增强运算符

```
$a = 0;$a++; // $a === 1
```

> 增强赋值运算符 += -= *= /=

```
$a = 0;$b = 1;$a += $b; // $a === 1
```

> 算术运算符

```
$a = 10, $b = 5;$c = $a++ / $b--+$a--;/*** 等价于** $d = $a / $b; // $d = 2;** $a++; $b++; //$a == 11; $b == 6** $c = $d + $a--;// $c == 13*/$d = ++$b + $a-- % $b++;/*** 等价于** $d = ++$b; // $d == 6;** $e = $a-- % $b++; // $e == 4; $a == 9; $b == 7** $c = $d + $e; // $c == 10;*/
```

> 逻辑运算符

```
$a = 10, $b = 5;$c = $a > 5|| $b > 5; // $c == ture;
```

> 比较运算符

```
$a = 10, $b = 5;$c = $a > $b; // $c == true;
```

> 条件表达式

- if() {}
- if() {} else {}
- if() {} else if () {} else {}
- switch case

> 循环语句

- for () {}
- while () {}
- do {} while () {} // 最后需要以分号结束

# 002.PHP基本操作

- 双引号能解析变量 单引号会作为字符串输出

> echo() 主要用来打印普通变量

- 打印结果比较混乱
- 无法显示数据类型

```
$name = "Tang";echo $name;echo "$name"; // 双引号可以解析变量（以$开头）echo '$name'; // 单引号不能解析变量define('A', 123);echo "A"; // 双引号不能解析常量!
```

> print_r() 主要用来打印变量或者数组

- 打印结果比较清晰（结构化）
- 无法显示数据类型

> var_dump() 主要用来打印变量、数组、对象等

- 打印结果有逻辑性（结构化）
- 能够显示数据类型

> 换行

- PHP_EOL // 相比 能自动适应不同系统换行

## Date()

### 创建

- date_default_timezone_set(“Asia/Shanghai”) 设置（中国）时区
- date ($format [, int $timestamp]) 返回当前日期或根据时间戳计算出的日期
- time() 返回自Unix纪元（January 1 1970 00:00:00 GMT）起的当前时间的秒数（时间戳）

### timestamp 时间戳

- 一般在Linux/Unix下才出现/使用

### format

> 日

- d 01到31
- D Mon到Sun
- l Sunday到Staurday

> 月

- F January到December
- m 01到12
- M Jan到Dec

> 年

- Y 例如：1999或2003
- y 例如：99或03

> 时间

- h 01到12
- H 00到23
- i 00到59
- s 00到59

### 案例

```
$d= mktime(9, 12, 31, 6, 10, 2015);echo date("Y-m-d h:i:sa", $d);//输出2015-06-10 09:12:31am
```

## 文件包含

- include 遇见错误，生成一个警告（E_WARNING），在错误发生后脚本会继续执行
- require 遇见错误，生成一个致命错误（E_COMPILE_ERROR），在错误发生后脚本会停止执行

```
<?phpinclude 'header.php';?>
```

## 数据通信

### JSON

> 操作

- json_decode()
- json_encode()
- json_encode(“中文字符串”, JSON_UNESCAPED_UNICODE)

### 序列化

> 操作

- selialize() 序列化 将对象转换为字节流字符串
- unselialize() 反序列化

## Math

### 随机数

- ceil(X) 向上求整
- floor(x) 向下求整
- max(x) 返回最大值
- min(x) 返回最小值
- pi() 返回圆周率
- pow(x, y) 返回x的y次方
- sqrt(x) 开方
- abs(x) 取绝对值
- rand([min. max) 生成（指定范围）的随机数 // 真随机数！
- mt_rand([min. max]) 同上 效率与安全性更高