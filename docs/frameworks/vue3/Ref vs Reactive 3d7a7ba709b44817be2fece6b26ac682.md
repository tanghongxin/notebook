# Ref vs Reactive

## reactive

接受一个传入对象，返回经由 Proxy 修饰过的响应式对象，__v_reactive 指向自身

```jsx
import { reactive ***REMOVED*** from 'vue'

const obj = { name: 'name' ***REMOVED***
const reactiveObj = reactive(obj)
// 输出 Proxy {name: "name", __v_reactive: Proxy***REMOVED***
console.log(reactiveObj)
```

## ref

接受一个变量，返回一个对象，__v_isRef 为 true，变量类型为复杂类型时，value 为经 reactive 修饰过的变量，反之为原变量

```jsx
import { ref***REMOVED*** from 'vue'

const obj = { name: 'name' ***REMOVED***
const refObj = ref(obj)

// 输出 { value: Proxy, __v_isRef: true ***REMOVED***
console.log(refObj)
// 输出 Proxy {name: "name", __v_reactive: Proxy***REMOVED***
console.log(refObj.value)

const flag = true
const refFlag = ref(flag)

// 输出 { value: true, __v_isRef: true ***REMOVED***
console.log(refFlag)
// 输出 true
console.log(refFlag.value)
```

## toRefs

把一个响应式对象转换成普通对象，该普通对象的每个 property 都是一个 ref ，和响应式对象 property 一一对应

```jsx
const state = reactive({
  foo: 1,
  bar: 2,
***REMOVED***)

const stateAsRefs = toRefs(state)
/*
stateAsRefs 的类型如下:

{
  foo: Ref<number>,
  bar: Ref<number>
***REMOVED***
*/
```

## 区别

ref 始终返回 object，配合 toRefs，可以在即便解构的情况下仍然使变量具有响应式属性

```jsx
function useFeatureX() {
  const state = reactive({
    foo: 1,
    bar: 2,
  ***REMOVED***)

  // 对 state 的逻辑操作

  // 返回时将属性都转为 ref
  return toRefs(state)
***REMOVED***

export default {
  setup() {
    // 可以解构，不会丢失响应性
    const { foo, bar ***REMOVED*** = useFeatureX()

    return {
      foo,
      bar,
    ***REMOVED***
  ***REMOVED***,
***REMOVED***
```