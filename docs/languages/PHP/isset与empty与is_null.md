# isset与empty与is_null

# empty

- 判断一个变量值是否为空

> 为空的几种情况

- null
- false
- 0
- ‘0’
- 没有值

> 解决0为空

```
$a = 0;if ($a === '' || empty($a) {    echo '值为空';***REMOVED***
```

# isset

- 判断一个变量是否存在

# is_null

- 判断一个变量是否不为空（可以看作!isset）