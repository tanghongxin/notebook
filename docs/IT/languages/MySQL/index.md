# 001.MySQL初识

# 初识

# 引擎

- MyISAM
- InnoDB 支持事务 支持外键

# 002.MySQL外键

# 外键

## 外键约束的条件

- restrict 约束（默认）。在对主表表进行修改的时候要进行外键检查
- cascade 级联。```不进行外键检查，直接删除从表的信息。

## 外键约束的设置

> 建立外键约束

```
alter table 当前表 add constraint [外键别名] foreign key (外键字段名) REFERENCES 外表表名(主键字段名)；
```

> 设置外键约束

```
alter table 当前表 add constraint [外键别名] foreign key (外键字段名) REFERENCES 外表表名(主键字段名)on deleta cascade on update cascade;
```

> 解除外键约束

```
alter table 当前表 drop forken key 外键名/ [外键别名];
```