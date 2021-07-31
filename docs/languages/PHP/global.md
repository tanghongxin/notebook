# 005.PHP全局变量 魔术常量 函数

# 全局变量

- $GLOBALS
- $_SERVER
- $_REQUEST
- $_POST
- $_GET
- $_FILES
- $_ENV
- $_COOKIE 有长度限制，并且只能存储字符串
- $_SESSION

## COOKIE

### 设值

- setcookie(name,value[,expire,path,domain,secure]) 返回boolean值 // 键、值、过期时间、路径、域名、是否使用HTTPS

```
<?php// 把失效日期设置为一小时后setcookie ("TestCookie", "", time() + 3600);?>
```

### 取值

```
<?phpecho $_COOKIE["user"];?>
```

### 删除

> 删除 cookie 时应当使过期日期变更为过去的时间点

- setcookie($var, null);
- *OOKIE*[var] = null;

    *C*

### 其他

- 没有设置过期时间，cookie存储在浏览器（随浏览器关闭而结束）
- 设置了过期时间，cookie存储在本地（硬盘）

## SESSION（本质是COOKIE）

### 设值

```
<?phpsession_start(); // 先启动，在启动前不能有任何输出，所以必须位于 <html> 标签之前$_SESSION[$str] = xx;?>
```

### 取值

```
<?phpecho $_SESSION[$var];?>
```

### 删除

- *ESSION*[var] = null;

    *S*

- unset(*ESSION*[var]);

    *S*

- session_destroy(); // 删除所有session

### 其他

- SESSION存储在服务器端

# 魔术常量 魔术函数

> 魔术常量

```
<?phpecho __LINE__ ; // 文件中的当前行号echo __FILE__; // 文件的完整路径和文件名echo __DIR__ ; // 文件所在的目录echo __FUNCTION__ ; // 返回该函数被定义时的名字echo __CLASS__; // 返回该类被定义时的名字echo __METHOD__ ; // 返回该方法被定义时的名字echo __NAMESPACE__ ; // 当前命名空间的名称?>
```

> 魔术函数