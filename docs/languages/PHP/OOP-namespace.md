# 006.PHP命名空间 面向对象

# 命名空间（PHP5引入）

> 解决问题

- 自定义类库与第三方类库名字冲突
- 缩减名称长度，提高源代码可读性

> 使用

```
<?phpnamespace MyProject {class Connection {     class connect{};}$a = MyProject\connect();namespace {     // 全局空间}// 全局空间定义的内容，全局可用?>
```

## 对象

### 三大特征

### 封装

### 继承

### 多态

### 静态变量 / 方法

- 静态属性只能被初始化为文字或常量
- 静态属性不可以由对象通过 -> 操作符来访问
- 静态方式调用一个非静态方法会导致一个 E_STRICT 级别的错误
- 静态方法不需要通过对象即可调用，所以伪变量 $this 在静态方法中不可用

> 使用

- 类名::
- self::

```
<?phpclass person {    public static $number = 0;    public $num = 0;    __construct() {        self::number ++;        $this->num ++;    }}$a = new person();$b = new person();$c = new person();echo person::number; // 输出3echo person::number; // 输出3?>
```

### >和::的区别

- >只用于对象调用非静态属性
- :: 可用于类或对象调用静态属性