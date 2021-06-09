# ngOnChanges()

用途及时机: 当 Angular（重新）设置数据绑定输入属性时响应。 该方法接受当前和上一属性值的 SimpleChanges 对象。当被绑定的输入属性的值发生变化时调用，首次调用一定会发生在 ngOnInit() 之前。