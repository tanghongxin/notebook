const { NodeSSH } = require('node-ssh')
const path = require('path')
const { zip, COMPRESSION_LEVEL } = require('zip-a-folder')
const { Log, now } = require('./utils')

const [,,host, username, password] = process.argv

const ssh = new NodeSSH()

const { execCommand } = ssh

// for better log
ssh.execCommand = function() {
  return execCommand
    .apply(this, Array.from(arguments))
    .then(({ stdout, stderr }) => stderr ? Promise.reject(stderr) : Promise.resolve(stdout))
}

Log.start('服务器部署')
ssh
  .connect({ host, username, password })
  .then(async() => {
    Log.start('打包')
    const distDir = path.join(__dirname, '../docs/.vuepress/dist')
    const distZip = path.join(__dirname, '../docs/.vuepress/dist.zip')
    await zip(distDir, distZip, COMPRESSION_LEVEL.medium)
    Log.success('打包')

    const clean = () => ssh.execCommand('rm -rf dist dist.zip', { cwd: '/tmp' })
    await clean()

    Log.start('上传压缩包')
    await ssh.putFiles([{
      local: distZip,
      remote: '/tmp/dist.zip'
    }])
    Log.success('上传压缩包')

    Log.start('解压缩')
    await ssh.execCommand('unzip -o dist.zip -d dist', { cwd: '/tmp' })
    Log.success('解压缩')

    Log.start('备份上一版本')
    // TODO: replace ${now()}.back with ${version} + symbol link
    const backup = `notebook.${now()}.back`
    await ssh
      .execCommand(`mv notebook ${backup}`, { cwd: '/usr/share/nginx' })
      .then(() => Log.success(`备份上一版本 ${backup} `))
      .catch((err) => err.includes('No such file or directory') ? Log.info('暂无上一版本') : Promise.reject(err))

    Log.start('部署最新版本')
    await ssh.execCommand(`mv dist notebook`, { cwd: '/tmp' })
    await ssh.execCommand(`mv notebook /usr/share/nginx/`, { cwd: '/tmp' })
    Log.success('部署最新版本')

    await clean()
  })
  .then(() => {
    Log.success('服务器部署')
    process.exit(0)
  })
  .catch((err) => {
    Log.failure('服务器部署')
    console.error(err)
    process.exit(1)
  })
