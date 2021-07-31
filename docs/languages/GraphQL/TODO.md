# note

## 封装

- 允许组件触碰到接口底层，这使得组件与接口成为一个复用的整体（或一次性的单体）

## Subscribe 场景

- 小增量：比如一个数据量很大的树下新增一个节点，不需要刷新整棵树

## S-Table

*hideOnSinglePage*

## 何时组件需要强制指定schema

- 表单
- 特定组件：如tree

## 何时需要封装GraphQL语句

- 有前置后置操作
- 需要复用
- 通用的schema

## Hasura 视图

## Postgrel

- like / ilike （不）区分大小写模糊查询，以%或_匹配
- similar / isimilar 在 like / ilike 的基础上支持正则查询

## GraphQL 小技巧

- 同一字段可使用alias在一个schema中出现多次
- fragment的声明不需要放到顶部
- 在固定数据格式（表单等）的组件中使用fragment
- 将graphql理解为数据结构的减法
- query 关键字可以省略，直接写一个结构体 execute

## GraphQL小知识

- 表之间可做关联，但外键的设立在服务端，查询时不暴露

## GraphQL 常见错误

- GraphQL提供的订阅基于websocket，与前端框架（如rxjs）提供的订阅有区别
- GraphQL关注语句与结构本身，其他特性是人为用于使用习惯支撑（与框架特点结合等），结合需求使用
- GraohQL一条语句的可复用性可能比Rest Api复用性低，而Rest Api的一个接口的使用频率是 >= 1，存在即合理

## GraphQL VS Rest

- GraphQL面向场景，Rest面向资源

## where

- where 为空对象时会对所有数据做修改，所以 where 不要指定默认值 {}
- 其他查询条件同上要求

# Untitled

## multiple mutation

一次连续执行多条 mutation，有一条失败时，整个请求都会回滚（自动 transaction）

## delete

用 id in [] 可以一次删除一到多个数据，数据不存在时会跳过（不进入报错？）

## update

对于 Boolean 类型的值，能否做一个 if else 判断，不用直接传值呢？