# 008.PDO初识

# PDO(PHP Data Object)

## PDO什么是

- PHP访问数据库定义的一个轻量级的一致接口

## PDO的优点

- 兼容多种数据库
- 同一种语法操作不同数据库

## PDO类库

### PDO类常用函数

- PDO->beginTransaction() 标明回滚起始点
- PDO->commit() 标明回滚结束点，并执行SQL
- PDO->rollBack() 数据库操作出现问题的时候执行回滚操作
- PDO->exec() 处理一条DML SQL语句，并返回所影响的条目数
- PDO->lastInsertId() 获取写入的最后一条数据的主键值
- PDO->prepare() 生成一个“PDOStatement预查询对象
- PDO->query($sql) 执行查询，返回查询结果
- PDO->setAttribute() 设置PDO属性
- PDOStatement->bindParam() SQL参数绑定
- PDOStatement->columnCount() 获得查询结果中列的个数
- PDOStatement->execute() 执行预查询
- PDOStatement->fetch() 从查询结果中获得下一行数据
- PDOStatement->fetchAll() 从查询结果中获得所有行数据
- PDOStatement->rowCount() 获得查询结果中行的个数
- PDOStatement->fetchObject() 以对象的形式获取下一行
- PDOStatement->setFetchMode() 设置结果集获取模式

### PDOException 类常用函数

- PDO::ERRMODE_WARNING PDO将会发出一个传统的E_WARNING信息
- PDO::ERRMODE_EXCEPTION PDO会抛出一个PDOException异常

> 案例

```
// 修改默认的错误显示级别为警告$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);// 修改默认的错误显示级别为异常$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
```

## PDO预处理

// TODO

### 预处理语句是什么

- 要运行的 SQL 的一种编译过的模板，可以使用变量参数进行定制

### 预处理的优点

- 查询仅需解析（或预处理）一次，但可以用相同或不同的参数执行多次
- 预处理语句的参数不需要用引号括起来，（一般情况下）不会发生SQL注入

## PDO使用案例（MySQL为例）

> 一段代码

```
// 定义数据库连接常量define('DBHOST', 'localhost');define('DBPORT', 3306);define('DBUSER', 'root');define('DBPWD', '');define('DBNAME', 'pdo');// 打开连接$conn = new PDO(    "mysql:host=" . DBHOST . ";port=" . DBPORT . ";dbname=" . DBNAME,    DBUSER,    DBPWD,    array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8;"));// 设置异常处理 （类的静态变量）$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // EXCEPTION：异常自动throw，但需要人为捕获// DML操作try {    // 定义sql字符串    $sql = "INSERT INTO tb_test VALUES (3,'王五')";    $sql1 = "select * from tb_test";    // 执行sql语句    $res = $conn->exec($sql); // exec()执行DML，返回受影响行数    $results = $conn->query($sql1); // query()执行DQL，返回结果集对象    $rows = $results->fetchAll(PDO::FETCH_ASSOC); // 指定以key->value的形式返回，默认是key->value与数字下标的混合格式        $results2 = $conn->query($sql1);    while ($row = $results->fetch()) {        // TODO    }    $rows = $results2->fetchAll(); // 功能同上} catch (PDOException $exception) {    echo $exception->getMessage();} finally {    $conn = null;}
```

## 注意事项

- PDO可以同时处理多条sql语句，但发送到sql服务器后语句是排队执行的