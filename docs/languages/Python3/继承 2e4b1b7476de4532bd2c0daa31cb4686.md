# 继承

## 继承

- 继承（多个）类

```
# 同名方法从左至右查找继承class DerivedClassName(BaseClassName1, BaseClassName2, ...):    <statement-1>    .    .    .    <statement-N>
```

- public / private
    - __ 开头的变量为私有属性，外部无法直接访问
    - 正常定义的变量为公开属性，外部可以直接访问

### 类的专有方法：

- **init :** 构造函数，在生成对象时调用
- **del :** 析构函数，释放对象时使用
- **repr :** 打印，转换
- **setitem :** 按照索引赋值
- **getitem:** 按照索引获取值
- **len:** 获得长度
- **cmp:** 比较运算
- **call:** 函数调用
- **add:** 加运算
- **sub:** 减运算
- **mul:** 乘运算
- **div:** 除运算
- **mod:** 求余运算
- **pow:** 乘方