# 001.响应式入门

# 响应式入门

## 什么是响应式

- 应用程序（网站）在不同（尺寸/分辨率）的设备上都能够正确的显示

## 原理

- 基于CSS3媒体查询

> 案例

```css
@media screen and (max-width: 768px) {
  .container {
    background-color: pink;
    width: 100%;
  }
}

@media screen and (min-width: 768px) and (max-width: 992px) {
  .container {
    background-color: green;
    width: 750px;
  }
}
```