# Dictionaries

### Dictionaries

> 注：关键字必须使用不可变类型，也就是说list和包含可变类型的tuple不能做关键字

- 初始化

```
# 字面量{'jack': 4098, 'sape': 4139, 'guido': 4127***REMOVED***{x: x**2 for x in (2, 4, 6)***REMOVED***# 输出 {2: 4, 4: 16, 6: 36***REMOVED***# 构造函数（类似 js Object.fromEntries？）dict([('sape', 4139), ('guido', 4127), ('jack', 4098)])dict(sape=4139, guido=4127, jack=4098)
```

- 删除键值对

```
del obj['key']
```