# 安装（Linux）

## 国外环境（参照官方文档）

## 国内环境

### 安装

```bash
# 最新版本可前往 https://mirrors.tuna.tsinghua.edu.cn/jenkins/redhat-stable/ 查看
wget https://mirrors.tuna.tsinghua.edu.cn/jenkins/redhat-stable/jenkins-2.235.1-1.1.noarch.rpm
sudo yum install ./jenkins-2.235.1-1.1.noarch.rpm
```

### 配置端口

```bash
vim /etc/sysconfig/jenkins
```

### 启动

```bash
systemctl start jenkins.service
# root?
```

### 获取密钥

```bash
cat /var/lib/jenkins/secrets/initialAdminPassword
```

### 修改插件镜像源

```bash
vim /var/lib/jenkins/hudson.model.UpdateCenter.xml
```

```xml
<?xml version='1.1' encoding='UTF-8'?>
<sites>
  <site>
    <id>default</id>
    <url>https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json</url>
  </site>
</sites>
```

### 访问地址

Jenkins 初次启动需等待，期间页面出现自动刷新属正常现象

