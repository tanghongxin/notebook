# String

### String

- 查看数据类型

```
print(type('str'))
```

- 查看长度

```
print(len('str'))
```

- 重复多次

```
print('str' * 3)
```

- 截取下标

```
word = 'Python'# 指定元素，负数为倒序截取print(word[0], word[-1])# 指定区间：左闭右开，默认全部截取print(word[1:2], word[])
```

> 注：String 变量不可变，重新赋值会分配新内存，同 JAVA