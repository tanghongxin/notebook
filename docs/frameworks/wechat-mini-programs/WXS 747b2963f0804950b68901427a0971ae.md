# WXS

WXS（WeiXin Script）是小程序的一套脚本语言（微信模版？）

注

- wxs 不依赖于运行时的基础库版本，可以在所有版本的小程序中运行
- wxs 与 javascript 是不同的语言，有自己的语法，并不和 javascript 一致
- wxs 的运行环境和其他 javascript 代码是隔离的，wxs 中不能调用其他 javascript 文件中定义的函数，也不能调用小程序提供的API
- wxs 函数不能作为组件的事件回调
- 由于运行环境的差异，在 iOS 设备上小程序内的 wxs 会比 javascript 代码快 2 ~ 20 倍。在 android 设备上二者运行效率无差异