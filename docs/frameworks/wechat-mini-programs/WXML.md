# WXML

- 数据

```
<view>{{message}}</view>
```

- 列表渲染

```
<view wx:for="{{array}}">{{item}}</view>
```

- 条件渲染

```
<view wx:if="{{view == 'WEBVIEW'}}">WEBVIEW</view>
<view wx:elif="{{view == 'APP'}}">APP</view>
<view wx:else="{{view == 'MINA'}}">MINA</view>
```

- 模板

```
<template name="staffName">
  <view>
    FirstName: {{firstName}}, LastName: {{lastName}}
  </view>
</template>

<template is="staffName" data="{{...staffA}}"></template>
<template is="staffName" data="{{...staffB}}"></template>
<template is="staffName" data="{{...staffC}}"></template>
```

- 事件

```
<view bindtap="add">{{count}}</view>
```