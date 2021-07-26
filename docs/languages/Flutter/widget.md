# widget

Flutter 里面包含两种widget 一种可变的，一种不可变的； 在可变的widget中可以使用 setstate(){} 函数，视图也会跟着更新

flutter的渲染机制了，她的渲染机制用的是skia,和web的渲染是一样的，非常个轻量化和快速。 setState(){}的调用时吧视图重新绘制了一遍，但是并不是把整个视图diss掉再从新绘制。而是调用了build方法，绘制只是绘制不一样的地方。

