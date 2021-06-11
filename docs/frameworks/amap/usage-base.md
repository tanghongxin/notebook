# 基础用法

- 脚本引入

```html
<!--同步引入-->
<script type="text/javascript" src="https://webapi.amap.com/maps?v=1.4.15&key=key"></script> <script>document.onLoad = function () {    let map = new AMap.Map('container') ***REMOVED***</script><!--异步引入--><script>window.onLoad  = function(){    let map = new AMap.Map('container');***REMOVED***let url = 'https://webapi.amap.com/maps?v=1.4.15&key=key&callback=onLoad';let jsapi = document.createElement('script');jsapi.charset = 'utf-8';jsapi.src = url;document.head.appendChild(jsapi);</script><body>    <div id="container" style="height: 100px; height: 100px"></div></body>
```

- 插件加载

```html
<!--同步加载--><script type="text/javascript" src="https://webapi.amap.com/maps?v=1.4.15&key=您申请的key值&plugin=AMap.ToolBar"></script> <script type="text/javascript" >    var map = new AMap.Map('mapContainer',{        zoom:12,        center:[116.39,39.9]    ***REMOVED***);    var toolbar = new AMap.ToolBar();    map.plugin(toolbar);</script><!--异步加载--><script type="text/javascript" src="https://webapi.amap.com/maps?v=1.4.15&key=您申请的key值"></script> <script type="text/javascript" >    var map = new AMap.Map('container',{        zoom:12,        center:[116.39,39.9]    ***REMOVED***);    AMap.plugin('AMap.ToolBar',function(){        var toolbar = new AMap.ToolBar();        map.addControl(toolbar);    ***REMOVED***);</script>
```