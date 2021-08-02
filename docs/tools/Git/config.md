# Config

## 查看当前配置

```bash
git config --global --list
```

## alias

```bash
git config --global alias.sl 'stash list'
```

## autocrlf

自动转换不同平台的换行符

```bash
# Mac、Linux
# 提交时转换 CRLF 为 LF，签出代码时不转换
git config --global core.autocrlf input

# Windows
# 提交时转换 CRLF 为 LF，签出代码时转换 LF 为 CRLF
git config --global core.autocrlf true
```

