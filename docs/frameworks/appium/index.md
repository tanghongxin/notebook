# appium

## 概念

appium 是一个自动化测试开源工具，支持 iOS 平台和 Android 平台上的原生应用，web应用和混合应用。

## appium 与 selenium

appium类库封装了标准Selenium客户端类库，为用户提供所有常见的JSON格式selenium命令以及额外的移动设备控制相关的命令，如多点触控手势和屏幕朝向。

appium客户端类库实现了Mobile JSON Wire Protocol（一个标准协议的官方扩展草稿）和W3C WebDriver spec（一个传输不可预知的自动化协议，该协议定义了MultiAction 接口）的元素。

appium服务端定义了官方协议的扩展，为appium 用户提供了方便的接口来执行各种设备动作，例如在测试过程中安装/卸载App。这就是为什么我们需要appium特定的客户端，而不是通用的Selenium 客户端。当然，appium 客户端类库只是增加了一些功能，而实际上这些功能就是简单的扩展了Selenium 客户端，所以他们仍然可以用来运行通用的Selenium会话。

## 工作原理

![](https://s2.loli.net/2022/03/31/K7BSZtNs89RbJHV.jpg)

