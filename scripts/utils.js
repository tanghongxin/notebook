class Log {
  static start(message) {
    console.log('\x1b[36m%s\x1b[0m', `${message}开始`)
  }

  static success(message) {
    console.log('\x1b[32m%s\x1b[0m', `${message}完成`)
  }

  static failure(message) {
    console.log('\x1b[31m%s\x1b[0m', `${message}失败`)
  }

  static info(message) {
    console.log('\x1b[35m%s\x1b[0m', `${message}`)
  }
}

// FIXME: tz does not work on azure
function now() {
  // To ensure the server has the same timezone with local
  const timezone = require('dayjs/plugin/timezone')
  const dayjs = require('dayjs')
  require('dayjs/locale/zh-cn')
  dayjs.extend(timezone)
  dayjs.tz.setDefault('Asia/Shanghai')
  dayjs.locale('zh-cn')
  
  return dayjs().format('YYYY-MM-DD-HH:mm:ss')
}

module.exports = {
  Log,
  now
}
