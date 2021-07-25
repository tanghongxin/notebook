# 配置

## jsconfig.json

可看作  ```tsconfig.json``` 中 ```allowJs``` 为 ```true``` 时的配置，配置内容完全一致，适用于非  TypeScript  项目。

当 VSCode 检测到该文件时，认为该文件所属目录为 workspace 根目录，并以根目录为 baseUrl 识别 alias 等相应配置。