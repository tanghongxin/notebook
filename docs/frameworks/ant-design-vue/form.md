# 表单

labelCol、wrapperCol默认值为undefined?

t同时赋值后即开启了栅格布局，其值与的参数一致：span、offset，

反之则根据form布局要求：vertical、horizontal

checkbox 貌似用 setFieldsValue 不能生效，需要在 v-decocator里指定 { valuePropName: ‘checked’ ｝

## setFieldsValue

未经 v-decorator 修饰的key，直接赋值会报错，can not set a value before renderning

比如 form.setFieldsValue(record)，record 对象未挑选键时一次性传入会报错，一般可以忽略，但如果传入的对象层级很深或比较庞大，可能会迭代多次报错，简单的解决方案是，form.getFieldsValue 可取得声明的对象，再做键值匹配写入

## 表单内置校验规则

### Type

- `string`: Must be of type `string`. `This is the default type.`
- `number`: Must be of type `number`.
- `boolean`: Must be of type `boolean`.
- `method`: Must be of type `function`.
- `regexp`: Must be an instance of `RegExp` or a string that does not generate an exception when creating a new `RegExp`.
- `integer`: Must be of type `number` and an integer.
- `float`: Must be of type `number` and a floating point number.
- `array`: Must be an array as determined by `Array.isArray`.
- `object`: Must be of type `object` and not `Array.isArray`.
- `enum`: Value must exist in the `enum`.
- `date`: Value must be valid as determined by `Date`
- `url`: Must be of type `url`.
- `hex`: Must be of type `hex`.
- `email`: Must be of type `email`.
- `any`: Can be any type.

## 自定义校验

```
<a-input v-decorator = ['xx', {         validator: (rule, value, cb) => cb(value ? undefined : 'value为假')}]></a-input>
```

## FAQ

- 为何在 Modal 中调用 form 控制台会报错？Modal 还未初始化导致 form 没有关联任何 Form 组件。你可以通过给 Modal 设置 forceRender 将其预渲染