## 异常处理

- Error 人为造成的错误代码，不能被解释或编译
- Exception

> 案例

```
$b = 0;$c = 0;$b / $c; // Exception$a = '111++  // Error
```

### 异常处理

### try- - throw- catch

> 案例

```
<?phpfunction chkNum ($num) {    if ($num > 1) {        throw  new Exception("值必须小于等于1"); // 抛出异常后后面的代码不执行（捕获中会跳出try进入catch）        echo "我不会执行！"; // 不执行    } else {        return false;    }}try {    chkNum(2);} catch (Exception $e) {    echo $e->getMessage();}?>
```

### die() 函数输出一条消息，并退出当前脚本

> 案例

```
<?php$a = 1;if ($a == 1) {    die ("!!!");}?> 
```