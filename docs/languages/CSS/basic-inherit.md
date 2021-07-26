# 继承

## inherit 关键字

> 某些类型的属性是不会默认继承的，而某些元素则不会继承某些属性。但是在某些情况下，可以使用inherit 来强制继承，但要慎用（例如我不想重设em的斜体，然后再次添加上它）

```css
* {
  font-family: inherit;
  line-height: inherit;
  color: inherit;
}

html {
  font-size: 125%;
  font-family: sans-serif;
  line-height: 1.5;
  color: black;
}
```

```html
<!-- a链接颜色由蓝色被强制继承为是黑色 --><a>我是一个a链接</a>
```

### 无继承性的属性

1. ```display```
2. 文本属性
- ```vertical-align``` 垂直文本对齐
- ```text-decoration``` 规定添加到文本的装饰
- ```text-shadow``` 文本阴影效果
- ```white-space``` 空白符的处理
- ```unicode-bidi``` 设置文本的方向
1. 盒子模型的属性
- ```width```
- ```height```（百分比继承要求父元素有缺省值）
- ```margin```（百分比继承全是相对于 ```width```，下同）
- ```padding```
- ```border```
1. 背景属性
- ```background```
- ```background-color```
- ```background-image```
- ```background-repeat```
- ```background-position```
- ```background-attachment```
1. 定位属性
- ```float```
- ```clear```
- ```position```
- ```top```
- ```right```
- ```bottom```
- ```left```
- ```min-width```
- ```min-height```
- ```max-width```
- ```max-height```
- ```overflow```
- ```clip```
- ```z-index```
1. 生成内容属性
- ```content```
- ```counter-reset```
- ```counter-increment```
1. 轮廓样式属性
- ```outline-style```
- ```outline-width```
- ```outline-color```
- ```outline```
1. 页面样式属性
- ```rgba```
- ```opacity ```// 不继承 但子元素会被父元素的opacity蒙蔽
- ```size```
- ```page-break-before```
- ```page-break-after```
1. 声音样式属性
- ```pause-before```
- ```pause-after```
- ```pause```
- ```cue-before```
- ```cue-after```
- ```cue```
- ```play-during```

### 有继承性的属性

1. 字体系列属性
- ```font``` 组合字体
- ```font-family``` 规定元素的字体系列
- ```font-weight``` 设置字体的粗细
- ```font-size``` 设置字体的尺寸
- ```font-style``` 定义字体的风格
- ```font-variant``` 设置小型大写字母的字体显示文本，这意味着所有的小写字母均会被转换为大写，但是所有使用小型大写字体的字母与其余文本相比，其字体尺寸更小
- ```font-stretch``` 对当前的 ```font-family``` 进行伸缩变形。所有主流浏览器都不支持
- ```font-size-adjust``` 为某个元素规定一个 ```aspect``` 值，这样就可以保持首选字体的 ```x-height```
1. 文本系列属性
- ```text-indent``` 文本缩进
- ```text-align``` 文本水平对齐
- ```line-height``` 行高
- ```word-spacing``` 增加或减少单词间的空白（即字间隔）
- ```letter-spacing``` 增加或减少字符间的空白（字符间距）
- ```text-transform``` 控制文本大小写
- ```direction``` 规定文本的书写方向
- ```color``` 文本颜色
1. 元素可见性
- ```visibility```
1. 表格布局属性
- ```caption-side```
- ```border-collapse```
- ```border-spacing```
- ```empty-cells```
- ```table-layout```
1. 列表布局属性
- ```list-style-type```
- ```list-style-image```
- ```list-style-position```
- ```list-style```
1. 生成内容属性
- ```quotes```
1. 光标属性
- ```cursor```
1. 页面样式属性
- ```page```
- ```page-break-inside```
- ```windows```
- ```orphans```
1. 声音样式属性
- ```speak```
- ```speak-punctuation```
- ```speak-numeral```
- ```speak-header```
- ```speech-rate```
- ```volume```
- ```voice-family```
- ```pitch```
- ```pitch-range```
- ```stress```
- ```richness```
- ```azimuth```
- ```elevation```

### 所有元素可以继承的属性

- ```visibility```
- ```cursor```

### 内联元素可以继承的属性

- 字体系列属性
- 除 ```text-indent```、```text-align``` 之外的文本系列属性

### 块级元素可以继承的属性

- ```text-indent```
- ```text-align```

## 继承情况

1. ```line-height```
- 值为系数/百分比，后代行高 = line-height * font-size
- 值为具体值（px），后代行高 = line-height
1. !important
- 可以被继承，但不能被重写

> 注：line-height为具体值，可以达到inline（-block）与文本居中对齐，但这会被inline（-block）继承下去
