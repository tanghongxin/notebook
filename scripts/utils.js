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
  const d = new Date()
  const Y = d.getFullYear()
  const M = d.getMonth() + 1
  const D = d.getDay()
  const H = d.getHours()
  const m = d.getMinutes()
  const s = d.getSeconds()
  const pad = num => num.toString().padStart(2, '0')
  return `${Y***REMOVED***-${pad(M)***REMOVED***-${pad(D)***REMOVED***-${pad(H)***REMOVED***:${pad(m)***REMOVED***:${pad(s)***REMOVED***`
***REMOVED***

module.exports = {
  Log,
  now
***REMOVED***
