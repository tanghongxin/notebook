# OOP基础

## 定义

- 语法

```
class ClassName:    <statement-1>    .    .    .    <statement-N>
```

- 构造函数

```
class ClassName:  def __init__(self, [optionalArgus...]):    # self 指代当前实例    # 可以不用先声明？申明好的变量直接用变量名可以访问？    self.data = []
```

- 方法：def关键字可以为类定义一个方法，与一般函数定义不同，类方法必须包含参数self,且为第一个参数