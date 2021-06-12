# 原型链

```jsx
constructor.constructor("alert('xkjtwcp')")();
Window.prototype.constructor.constructor("alert('xkjtwcp')")();

class T {***REMOVED***; const t = new T();
t.constructor === T
t.constructor === T.prototype.constructor
new t.constructor() instanceof T
```

