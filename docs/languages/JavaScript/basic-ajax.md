# Ajax

Asynchronous Javascript and XML，最早在 IE 上推出。

## 原理

- 异步事件触发

## status

- ```401``` 鉴权不通过
- ```404``` 资源不存在
- ```405``` 拒绝访问
- ```304``` 未更新（将从缓存读取）
- ```200``` 请求成功

## readyState

- ```0``` （未初始化）还没有调用send()方法
- ```1``` （载入）已调用send()方法，正在发送请求
- ```2``` （载入完成）send()方法执行完成，已经接收到全部响应内容
- ```3``` （交互）正在解析响应内容
- ```4``` （完成）响应内容解析完成，可以在客户端调用了 ## 请求方法

## methods

- ```HEAD```
- ```POST```
- ```GET```
- ```PUT```
- ```PATCH```
- ```DELETE```

## 数据格式

- ```string```
- ```stream```

## 步骤

1. 新建 ```XMLHttpRequest``` 对象
2. 打开链接
3. 发送
4. 返回结果

```javascript
var xhr = new XMLHttpRequest();
// 打开链接
xhr.open("GET", "http://localhost/Shen/practice/Ajax/response.php?page=1");
// 如果是POST方式提交需要设置RequestHeader（以form表单方式提交）
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// 发送
xhr.send();
// 返回结果
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var res = xhr.response
    var resJson = JSON.parse(res); console.log(resJson)
  ***REMOVED***
***REMOVED***
```