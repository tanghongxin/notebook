# 007.PHP抽象类与接口

# 抽象类

- 抽象方法/方法必须用abstract修饰
- 抽象方法不能有函数体
- 抽象类可以没有抽象方法
- 抽象类可以被抽象/普通类继承
- 抽象类被普通类继承，其抽象方法必须被实现

```
abstract class Person {    abstract function walk()}class Man extends Person {    public function walk {        //    }}abstract class People extends Person {    //}
```

# 接口

- 接口不能被实例化
- 接口中的方法不能有方法体
- 接口中的方法必须为public
- 接口中可以有常量，默认是public
- 一个类可以实现多个接口
- 一个接口可以继承别的接口

```
interface USB{        public function start();        public function end();    }    class Phone implements USB{        public function start()        {            echo "手机开始充电...";        }        public function end()        {            echo "手机充电结束...";        }    }
```

# final

- final修饰的类不能被继承
- final修饰的方法不能被重写

```
class A {    final public function test() {        //    }}
```

# const

- 常量变量名一般字母全大写
- 常量定义必须赋初值
- const关键字前不能用public/protected/private修饰

```
class Company{    const RATE=1.1;｝
```