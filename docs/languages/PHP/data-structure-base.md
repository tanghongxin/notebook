# 003.PHP数据类型

# 数据类型

> 基本数据类型（一般存放在栈）

- boolean
- string
- integer
- double

> 复合数据类型（一般存放在堆）

- array
- object
- resource

## string

> 创建

```
$str = "xxx";
```

> 操作

- strlen($str) 获得长度
- mb_strlen($str, $encoding) 含有中文的字符串获得长度
- strpos(‘xx’, $str) 返回索引位置 无返回false // 从前往后 区分大小写
- stripos() // 同上 不区分大小写
- strrpos() // 返回索引位置 无返回false // 从后往前 区分大小写
- strripos() // 同上 不区分大小写
- str_split($str[,len]) 将字符串按len等分割为多个数组 // 默认每个数组长度为1
- explode(‘xx’, $str) 字符串打散为数组
- ucfirst($str) 把字符串中的首字符转换为大写
- ucwords($str) 每个单词的首字符转换为大写
- strtolower($str) 字符串转小写
- strtoupper($str)
- str_word_count($str) 统计单词个数
- trim($str, ‘xx’) 移除字符串两侧的空白字符和其他字符
- ltrim($str, ‘xx’)
- rtrim($str, ‘xx’)
- substr($str, ‘start’[, ‘len’]) 截取指定长度字符串（左开右闭）
- mb_substr($str, $start, $length, $encoding) 含有中文的字符串截取
- strrev($str) 字符串反转
- str_replace(‘ori’, ‘now’, $str) 替换字符串中指定的字符 // 变异方法

## array

- 索引数组（下标为自增的自然数）
- 关联数组（下标为字符串）

### 创建

> 三种方式

```
$arr1 = array(1, 2, ...);$arr2[0] = 1, $arr[1] = 2;$arr3 = array(    key1 => value1,    key2 => value2,    ...);
```

> 注意

- 使用bool作为下标会转换为0或1
- 使用小数作为下标会自动截断小数部分

### 操作

> 非变异方法

- count($arr) 获取数组长度
- end($arr) 获取数组最后一个元素 / /参数必须是变量名 因为其原理是引用
- foreach($ar as $value) 遍历 // 不能修改原数组
- foreach($arr as $key => $value) 同上
- array_search(“x”, $arr); 查找 返回索引或false
- in_array(“x”, $arr[, $type]) 查找 返回true或false // type 默认false 不区分大小写

> 变异方法

- sort($arr) 升序
- rsort($arr) 降序
- foreach($arr as &$value) 遍历 // 可以修改原数组
- foreach ($arr as $key => &$value) 遍历 // 可以修改原数组
- unset(*arr*[index}) 删除键值对 但不会重建索引
- array_push($arr, $el1[, $el2, …]) 入栈并返回新长度
- array_slice(arr, $start[, length, preserve]) 截取数组 // preserve true 保留键名 false（默认）重置键名

### 注意

- array_push() 按照最大键名插入

```
<?php$arr =  (    '1' => 'a',    '5' => 'b',    '4' => 'c');arrary_push($arr, 'd'); print_r($arr);//输出$arr[1] = a;$arr[5] = b;$arr[4] = c;$arr[6] = d;?>
```

## 存储空间

### 栈(Stak)

- 存储变量与常量
- 内存负责回收
- FILO（先入后出）

> 变量过程

```
$a = 1;
```

1. 在栈区找1这个（值）对象，没有则创建（此时为游离态：未被引用）
2. 在栈区找a这个（变量名）对象，没有则创建
3. 引用（一个值可以被多个变量引用）
4. 修改值时，不会修改当前引用的值，而是重复1

### 堆(Heap)

- 在程序运行的时候被对象变量创建并且分离内存地址和空间
- 堆里面的对象必须由程序员进行回收（PHP有垃圾回收机制）
- 堆用来保存对象
- 堆和栈可以关联（如对象在堆，对象（变量）名在栈区）