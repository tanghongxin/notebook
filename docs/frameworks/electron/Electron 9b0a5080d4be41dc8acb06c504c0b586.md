# Electron

进程

## 概念

- ipcMain

    主进程，入口进程，全局只有一个

- ipcRenderer

    渲染进程，可以有多个。

    ipcRenderer可以新建 BrowserWindow 实例

- BrowserWindow

    browserWindow 可以认为是一个浏览器窗口或 web 领域中的 window 对象，具有最大化，最小化等方法，

- webContents

    browserWindow 的一个属性，可以理解为 web 页面或 document 对象

## 区分

- 分工

    webContents 关注页面的呈现与交互，但不应该操作 GUI API，相关操作应通知到其渲染进程由其渲染进程完成

- 进程间

    在electron 5.x（及以后？）的版本中，不允许子进程间通信，要实现通信必须经由主进程转发？