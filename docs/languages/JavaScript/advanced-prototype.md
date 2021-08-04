# 原型链

## prototype 与 __proto__

```prototype``` 是类的属性，```__proto__``` 是实例的属性，其指向类的 ```prototype``` （引用）

```prototype``` 指向类或实例的原型对象，定义一个类的 ```constructor``` 其实是定义（描述）其原型对象的 ```constructor```

```jsx
constructor.constructor("alert('xkjtwcp')")();
Window.prototype.constructor.constructor("alert('xkjtwcp')")();

class T {}; const t = new T();
t.constructor === T
t.constructor === T.prototype.constructor
new t.constructor() instanceof T
```

