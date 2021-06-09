# HTML标签属性与DOM属性

# HTML标签属性与DOM属性

- attribute（HTML标签属性）
- property（DOM对象属性）

## 关系：两者有联系 但是不同的两个东西

- attribute可以通过dom core规范的接口 getAttribute和setAttribute进行获取修改
- property可以通过对象访问属性的方式 . 或者 [" "]来修改获取

### 特殊情况

- 自定义的attribute不能通过property设置
- property不存在的属性无法设置attribute

> 问题案例

```
let divDom = document.querySelector("#div");// 通过attribute接口divDom.name = "123"; // 无效 因为DOM对象没有name这个属性 不能直接映射到HTML标签// 通过propertydivDom.setAttribute('name', '123'); // 生效
```

- 兼容性

> 问题案例

```
// ie 6 7 8(Q)divDom.setAttribute('name', '123'); // 不生效setter..... // 生效
```