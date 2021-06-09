# 异常

## 异常捕获执行顺序

1. try
2. except xxxError
3. except xxxError2
4. …
5. except （匹配前面未匹配到的异常）
6. else （必须放在所有 except 之后，在 try 字句没有发生任何异常的时候执行）（注意区别 final）
7. finally (无论任何情况下都会执行的清理行为)

## 语法

- raise Error(xxx) 抛出异常

    ```
    try:              # 指定异常        raise NameError('HiThere')    except NameError:        print('An exception flew by!')        # raise 不指定具体异常，可以将上文 catch 到的异常再次抛出          raise
    ```

## 自定义异常

通过创建一个新的exception类来拥有自己的异常。异常应该继承自 Exception 类，或者直接继承，或者间接继承

```
class MyError(Exception):        def __init__(self, value):            self.value = value        def __str__(self):            return repr(self.value)try:        raise MyError(2*2)    except MyError as e:        print('My exception occurred, value:', e.value)
```