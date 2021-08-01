# Bootstrap入门

## 初识

> Bootstrap是什么

- Bootstrap是（Twitter公司开源的）一个前端开发框架，它集成了html+css+javascript，给前端开发提供了各式各样的工具集

> 版本

- 2.x 已停止维护
- 3.x 稳定版本（<ie8不支持，ie8兼容性不好需要引入兼容工具）
- 4.x css预编译完全迁移到Sass 国内属于测试阶段

## 引入

```html
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Bootstrap模板</title>
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <!-- HTML5 shiv 和 Respond.js 用于让IE8支持H5元素和 CSS3媒体查询 -->
  <!--
    [if lt IE 9]>
      <script src="html5shiv/html5shiv.min.js" />
      <script src="respond/respond.min.js" />
    <![endif]
  -->
  <!-- jQuery (Bootstrap 的所有 JavaScript 插件都依赖 jQuery) -->
  <script src="jquery/jquery-3.3.1.js"></script>
  <script src="js/bootstrap.min.js"></script>
</head>


```