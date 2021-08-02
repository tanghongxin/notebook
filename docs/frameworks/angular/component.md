# 组件

## 组件通信

### 单向数据流

- @input()

> 子组件

```typescript
import { Input } from '@angular/core'

export class test {
    @input() name: string //
}
```

> 父组件模板

```typescript
<app-root></app-root><app-child [name]="'name'"></app-child>
```