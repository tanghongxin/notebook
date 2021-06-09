# Class

- fromJson 反序列化？用字面量实例化对象时调用，等同 TS 中的 constructor

- toJson 序列化？

- new 可省略

- .runtimeType 获取当前实例所属的类

  ```
  print('The type of a is ${a.runtimeType***REMOVED***');
  ```

- 普通构造函数

  ```
  // 简单写法
  class Point {
    num x, y;
  
    Point(num x, num y) {
      // There's a better way to do this, stay tuned.
      this.x = x;
      this.y = y;
    ***REMOVED***
  ***REMOVED***
  
  // 语法糖
  class Point {
    num x, y;
  
    // Syntactic sugar for setting x and y
    // before the constructor body runs.
    Point(this.x, this.y);
  ***REMOVED***
  ```

  相当于 TypeScript 中的

  ```
  class point {
      private x: number
      private y: number
      construcor (x, y) {
          this.x = x
          this.y = y
      ***REMOVED***
  ***REMOVED***
  
  class point {
      private x: number
      private y: number
      construcor (private x, private y) {***REMOVED***
  ***REMOVED***
  ```

  构造函数之外的函数，不用 this，默认指向 this?