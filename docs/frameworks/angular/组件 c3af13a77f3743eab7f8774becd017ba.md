# 组件

## 组件通信

### 单向数据流

- @input()

> 子组件

```
import { Input } from '@angular/core'

export class test {
    @input() name: string //
}
```

> 父组件模板

```
<app-root></app-root><app-child [name]="'name'"></app-child>
```