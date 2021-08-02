# 变量与作用域

## 变量与作用域

### global（全局）变量

> global全局变量

```
$i = 1;function test() {    global $i;    echo $i;}
```

> GLOBALS超全局变量数组

```
var_dump($GLOBALS);$i = 1;var_dump($GLOBALS[i]);
```

### static（静态）变量（类似于常量）

- 执行结束不被回收（避免初始化）
- 根据脚本运行时间决定回收时间

```
function test() {    static $i = 0;    echo ++$i;}test(); // 初始化为0 输出1test(): // 根据上一次的结果初始化 输出2
```

### local（局部）变量

- 函数内变量
- 函数形参

### 常量

- 常量类似变量，但是一经定义就无法更改或撤销定义
- 使用时不需要写$

> 创建 define(param1, param2, param2) // 5.3之前用const()

1. 定义常量的名称（必须用双引号）
2. 定义常量的值
3. 规定常量名是否对大小写不敏感。默认是 false

```
define("PI", 3.14);define("PI", 3.15); echo PI //输出3.15
```