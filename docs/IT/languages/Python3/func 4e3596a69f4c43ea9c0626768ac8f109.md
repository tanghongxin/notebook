# func

## 基本语法

- 定义

```
def  函数名（参数列表）：    函数体
```

- 关键字参数

```
# 定义def parrot(voltage, state='a stiff', action='voom', type='Norwegian Blue'):    print("-- This parrot wouldn't", action, end=' ')    print("if you put", voltage, "volts through it.")    print("-- Lovely plumage, the", type)    print("-- It's", state, "!")    # 调用parrot(1000)                                          # 1 positional argumentparrot(voltage=1000)                                  # 1 keyword argumentparrot(voltage=1000000, action='VOOOOOM')             # 2 keyword argumentsparrot(action='VOOOOOM', voltage=1000000)             # 2 keyword argumentsparrot('a million', 'bereft of life', 'jump')         # 3 positional arguments 依次传入parrot('a thousand', state='pushing up the daisies')  # 1 positional, 1 keyword
```

- 可变参数列表

```
# 类似 js 中 arguments# 不支持重载？def arithmetic_mean(*args):    sum = 0    for x in args:        sum += x    return sumprint(arithmetic_mean(45,32,89,78))print(arithmetic_mean(8989.8,78787.78,3453,78778.73))print(arithmetic_mean(45,32))print(arithmetic_mean(45))print(arithmetic_mean())
```