***REMOVED***
const fs = require('fs')
const junk = require('junk')

module.exports = {
  title: 'Abyssal Notebook',
  description: '',
  markdown: {
    lineNumbers: true,
  ***REMOVED***,
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/nprogress',
    '@vuepress/medium-zoom'
  ],
  themeConfig: {
    lastUpdated: '最后更新',
    smoothScroll: true,
    displayAllHeaders: true,
    // sidebar: 'auto',
    sidebar: gSidebar(),
    nav: [
      { text: 'Home', link: '/' ***REMOVED***,
      { text: '编程语言', items: gItems('../languages/') ***REMOVED***,
      { text: '框架 & 类库', items: gItems('../frameworks/') ***REMOVED***,
      { text: '软件工程', items: gItems('../SE/') ***REMOVED***,
      {
        text: '其他',
        items: [
          { text: 'IDEA', items: gItems('../IDEA/') ***REMOVED***,
          { text: '工具', items: gItems('../tools/') ***REMOVED***,
        ]
      ***REMOVED***,
      { text: '树洞时间', items: gItems('../robot/') ***REMOVED***,
      {
        text: '站内管理',
        items: [
          { text: 'Jenkins', link: 'https://jenkins.abyssal.site' ***REMOVED***,
          { text: '阿里云', link: 'https://account.aliyun.com' ***REMOVED***,
        ]
      ***REMOVED***
    ],
  ***REMOVED***,
***REMOVED***

function gChildren(dir) {
  return fs
    .readdirSync(dir)
    .filter(junk.not)
***REMOVED***

function gItems (relative) {
  return fs
    .readdirSync(path.resolve(__dirname, relative))
    .filter(junk.not)
    .map((child) => ({
      text: child,
      link: path.normalize(`/${path.relative(__dirname, relative)***REMOVED***/${child***REMOVED***/`),
    ***REMOVED***))
***REMOVED***

function gSidebar() {
  const sidebar = Object.create({***REMOVED***)
  const root = path.join(__dirname, '../')
  // 约定目录层级均为两层
  for (const category of ['frameworks', 'languages', 'tools']) {
    for (const docs of gChildren(path.join(root, category))) {
      for (doc of gChildren(path.join(root, category, docs))) {
        const key = `/${category***REMOVED***/${docs***REMOVED***/`
        sidebar[key] = sidebar[key] || []
        if (doc === 'index.md') {
          sidebar[key].unshift('')
        ***REMOVED*** else {
          sidebar[key].push(doc)
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***
  return sidebar
***REMOVED***
