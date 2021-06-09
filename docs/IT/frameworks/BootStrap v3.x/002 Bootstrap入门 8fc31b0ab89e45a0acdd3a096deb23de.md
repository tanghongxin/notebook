# 002.Bootstrap入门

# Bootstrap入门

## 初识

> Bootstrap是什么

- Bootstrap是（Twitter公司开源的）一个前端开发框架，它集成了html+css+javascript，给前端开发提供了各式各样的工具集

> 版本

- 2.x 已停止维护
- 3.x 稳定版本（<ie8不支持，ie8兼容性不好需要引入兼容工具）
- 4.x css预编译完全迁移到Sass 国内属于测试阶段

## 引入

```
<head>    <meta charset="utf-8">    <!-- 当页面打开的时候进行页面渲染的时候使用浏览器的最高版本，比如IE就使用edge进行渲染 -->    <meta http-equiv="X-UA-Compatible" content="IE=edge">    <!-- 会根据终端设备的宽度进行自适应，initial-scale缩放比例，user-scalable=0用户不能缩放-->    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">    <title>Bootstrap模板</title>    <!-- Bootstrap 引入bs-css样式-->    <link href="css/bootstrap.min.css" rel="stylesheet">    <!-- HTML5 shiv 和 Respond.js 用于让IE8支持H5元素和 CSS3媒体查询 -->    <!-- 警告：通过 file:// 协议（就是直接将html页面拖拽到浏览器中)访问页面时 Respond.js不起作用 -->    <!--[if lt IE 9]>    <script src="html5shiv/html5shiv.min.js"></script>    <script src="respond/respond.min.js"></script>    <![endif]-->    <!-- jQuery (Bootstrap 的所有 JavaScript 插件都依赖 jQuery) -->    <script src="jquery/jquery-3.3.1.js"></script>    <!-- 加载 Bootstrap 的所有 JavaScript 插件,也可以根据需要只加载单个插件。 -->    <script src="js/bootstrap.min.js"></script></head>
```