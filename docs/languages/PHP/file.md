# 004.PHP异常与文件上传与文件读写

## 文件读写

### 操作

> 变异方法

- fopen($file, $model) 打开文件（流）
- fwite($resource, $string)
- file_put_contents($file, $data) 把一个字符串 / 数组写入文件中 // 整合了fopen fwrite fclose为一步

> 非变异方法

- fopen($file, $model) 打开文件（流）
- fclose($resource) 关闭文件（流）
- fgets($resource) 一次读取一行数据
- fgetc() 一次读取一个字节
- fread() 一次读取指定字节数
- fpassthru()/ file() 一次读取全部数据
- foef($resource) 判断（指针）是否到文件末尾
- file_get_contents($file, $data) 把整个文件读入一个字符串中 // 整合了fopen fwrite fclose为一步
- file($file, $data) 把整个文件读入一个数组中 // 整合了fopen fwrite fclose为一步

### fopen model

- r 只读。在文件的开头开始
- r+ 读写。在文件的开头开始
- w 只写。打开并清空文件的内容；如果文件不存在，则创建新文件
- w+ 读/写。打开并清空文件的内容；如果文件不存在，则创建新文件
- a 追加。打开并向文件末尾进行写操作，如果文件不存在，则创建新文件
- a+ 读/追加。通过向文件末尾写内容，来保持文件内容
- x 只写。创建新文件。如果文件已存在，则返回 FALSE 和一个错误
- x+ 读/写。创建新文件。如果文件已存在，则返回 FALSE 和一个错误

### 案例

```
<?php$link = fopen("./a.txt", "r") or die("文件不存在");while(!feof($link) {    echo fgets($link); // 遍历输出内容}fwrite($link, "hello world\n"); //会在文件开头写入?>
```

## $_FILES

> 前提

- form的enctype = “multipart/form-data”
- input type = “file” name=“xx”

### 流程

1. form表单添加文件
2. form提交 // 或ajax通过Formdata() 上传文件
3. 提交的文件被放在$_FILES文件流里
4. php通过$_FILES操作文件

> $_FILES // 第一个下标是input type = “file” 的 name

- $_FILES[“file”][“name”] - 上传文件的名称
- $_FILES[“file”][“type”] - 上传文件的类型
- $_FILES[“file”][“size”] - 上传文件的大小，以字节计
- $_FILES[“file”][“tmp_name”] - 存储在服务器的文件的临时副本的名称
- $_FILES[“file”][“error”] - 由文件上传导致的错误代码

```
function chkExt($filename){    // 允许的后缀    $allowedExts = array("gif", "jpeg", "jpg", "png");    // 获取当前文件的后缀    $tmp = explode('.', $filename);    $currentExt = end($tmp);//参数必须写变量名 因为原理是引用    // 判断是否匹配    return in_array($currentExt, $allowedExts);}if ($_FILES['file']['error'] === 0) {    // 判断后缀    if (chkExt($_FILES['file']['name'])) {        // 判断存放文件夹是否存在        $path = "./upload/";        if (file_exists($path)) {            //  TODO:判断文件大小 类型（类型与后缀两回事）            $res = move_uploaded_file($_FILES['file']['tmp_name'], $path . $_FILES['file']['name']);            if ($res) {                echo "上传成功！存放路径为：" . $path . $_FILES['file']['name'];            }        }    } else {        echo "不允许的类型！";    }}
```

### error的几种情况

- 0 上传成功
- 1 超出php配置max_upload_filesize限制
- 2 超出form指定大小
- 3 部分被上传
- 4 没有文件被上传
- 6 找不到临时文件夹
- 7 写入失败