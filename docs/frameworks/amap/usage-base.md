# 基础用法

- [JS API 的加载-入门-教程-地图 JS API|高德地图API (amap.com)](https://lbs.amap.com/api/javascript-api/guide/abc/load)

```html
<!--同步引入-->
<script src="https://webapi.amap.com/maps?v=1.4.15&key=key"></script>
<script>
  window.onLoad = function () { 
    const map = new AMap.Map('container')
  }
</script>

<!--异步引入-->
<script>
  window.onLoad = function () {
    const map = new AMap.Map('container') 
  }
  const url = 'https://webapi.amap.com/maps?v=1.4.15&key=key&callback=onLoad'
  const jsapi = document.createElement('script')
  jsapi.charset = 'utf-8'
  jsapi.src = url
  document.head.appendChild(jsapi)
</script>

<body>
  <div id="container" style="height: 100px; height: 100px"></div>
</body>


```

- [插件的使用-入门-教程-地图 JS API|高德地图API (amap.com)](https://lbs.amap.com/api/javascript-api/guide/abc/plugins)

```html
<!--同步加载-->
<script src="https://webapi.amap.com/maps?v=1.4.15&key=您申请的key值&plugin=AMap.ToolBar"></script>
<script>
  const map = new AMap.Map('mapContainer', { zoom: 12, center: [116.39, 39.9] })
  const toolbar = new AMap.ToolBar()
  map.plugin(toolbar)
</script>

<!--异步加载-->
<script src="https://webapi.amap.com/maps?v=1.4.15&key=您申请的key值"></script>
<script>
  const map = new AMap.Map('container', { zoom: 12, center: [116.39, 39.9] })
  AMap.plugin('AMap.ToolBar', function () {
    const toolbar = new AMap.ToolBar()
    map.addControl(toolbar)
  })
</script>

```