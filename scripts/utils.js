class Log {
  static start(message) {
    console.log('\x1b[36m%s\x1b[0m', `${message***REMOVED***开始`)
  ***REMOVED***

  static success(message) {
    console.log('\x1b[32m%s\x1b[0m', `${message***REMOVED***完成`)
  ***REMOVED***

  static failure(message) {
    console.log('\x1b[31m%s\x1b[0m', `${message***REMOVED***失败`)
  ***REMOVED***

  static info(message) {
    console.log('\x1b[35m%s\x1b[0m', `${message***REMOVED***`)
  ***REMOVED***
***REMOVED***

function now() {
  // To ensure the server has the same timezone with locale
  return require('dayjs').locale('zh-cn').format('YYYY-MM-DD-HH:mm:ss')
***REMOVED***

module.exports = {
  Log,
  now
***REMOVED***
