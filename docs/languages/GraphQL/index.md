# 名次解释

## query

## mutation

- insert：插入
- upsert：INSERT ON CONFLICT，当插入遇到冲突时（如唯一性、主键等），支持on_conflict回调更新字段再插入
- delete：删除
- Multiple mutations in a request：按顺序执行事务，有一项失败则回滚

# 注意事项

## where

- where 为空对象时会对所有数据做修改，所以 where 不要指定默认值 {}
- 其他查询条件同上要求

