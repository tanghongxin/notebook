# WXML

- 数据

```
<view>{{message***REMOVED******REMOVED***</view>
```

- 列表渲染

```
<view wx:for="{{array***REMOVED******REMOVED***">{{item***REMOVED******REMOVED***</view>
```

- 条件渲染

```
<view wx:if="{{view == 'WEBVIEW'***REMOVED******REMOVED***">WEBVIEW</view>
<view wx:elif="{{view == 'APP'***REMOVED******REMOVED***">APP</view>
<view wx:else="{{view == 'MINA'***REMOVED******REMOVED***">MINA</view>
```

- 模板

```
<template name="staffName">
  <view>
    FirstName: {{firstName***REMOVED******REMOVED***, LastName: {{lastName***REMOVED******REMOVED***
  </view>
</template>

<template is="staffName" data="{{...staffA***REMOVED******REMOVED***"></template>
<template is="staffName" data="{{...staffB***REMOVED******REMOVED***"></template>
<template is="staffName" data="{{...staffC***REMOVED******REMOVED***"></template>
```

- 事件

```
<view bindtap="add">{{count***REMOVED******REMOVED***</view>
```