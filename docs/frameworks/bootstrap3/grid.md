# 003.Bootstrap栅格系统

# Bootstrap栅格系统

## 栅格系统

> 案例

```html
<div class="row">
  <div class="col-xs-12 col-md-8">.col-xs-12 .col-md-8</div>
  <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
</div>
<div class="row">
  <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
  <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
  <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
</div>
```

### 应用场景

- 手机屏幕 col-xs-12 @media screen and (max-width: 767px)
- 平板屏幕 col-sm-12 @media (min-width: 768px)
- 大型屏幕 col-md-12 @media (min-width: 992px)
- 超大屏幕 col-lg-12 @media (min-width: 1200px)

### 原理：CSS3媒体查询

> 部分源码

```css
.row {
  margin-right: -15px;
  margin-left: -15px;
}

.row::before {
  display: table;
  content: '';
}

.row::after {
  clear: both;
}

.col-md-2 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}

@media (min-width: 992px) {
  .col-md-2 {
    float: left;
    width: 20%;
  }
}
```

## 注意

- row必须放置在 container / container-fulid或col里，用于抵消15px的边距
- col-md-offset-x 采用的是margin
- col-push-x / col-pull-x 采用的是定位
- 栅格系统应当只用于（同类）个体（间）的（响应式）布局样式 // 个人见解