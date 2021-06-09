# TypeScript

## 类型推论

如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查

```typescript
let myFavoriteNumber;myFavoriteNumber = 'seven';myFavoriteNumber = 7;
```

## 联合类型

```typescript
let myFavoriteNumber: string | number;myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
```

