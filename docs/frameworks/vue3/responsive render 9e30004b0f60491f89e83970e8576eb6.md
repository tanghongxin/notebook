# responsive render

## 注意

响应式模板 / render 均在 setup 返回体内（后）生效（追踪依赖）

```jsx
import { h, reactive, onMounted } from 'vue'

export default {
	setup () {
		const state = reactive({ show: true })

		const content = h('span', state.show ? ['show'] : ['false'])

		onMounted(() => {
			state.show = false
		})		
		
		// 视图不更新
		return () => content

		// 视图更新
		return () => h('span', state.show ? ['show'] : ['false'])
	}
}
```