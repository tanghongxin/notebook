# 优先级

## 层叠

> 多个来源的样式叠加在一起，结合样式特殊性与继承性确定最终的样式

### 五种来源

1. 浏览器默认样式
2. 用户自定义样式
3. 外部样式
4. 内联样式
5. 内部样式

## 层叠规则 <Tag text="TODO" />

- 权重
- 特殊性
- ```!important```

## 权重计算 <Tag text="TODO" />

1. id 选择器
2. 子代 + 交集 + class 选择器
3. 交集 + class 选择器
4. class 选择器
5. 子代选择器
6. 标签选择器

```css
h1 { color: blue; } /* 特性值：1P */
em { color: blue; } /* 特性值：2 */
.apple { color: blue;} /* 特性值：10 */
p.bright { color:blue; } /* 特性值：11 */
p.bright em.dark { color: blue; } /* 特性值：22 */
#id { color: blue } /* 特性值：100 */
```
