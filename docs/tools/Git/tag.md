# Tag

## 添加 tag

```bash
# 添加 tag
git tag {tagName}

# 添加 tag 并填写内容
git tag {tagName} - a

# 针对某条 commit 添加 tag
git tag -m {tagContent} {tagName} {commitHash}
```

## 删除 tag

```bash
# 删除本地 tag
git tag -d {tagName}

# 删除远程 tag
git push -d {remoteName} {tagName}
```

