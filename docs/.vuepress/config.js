***REMOVED***
const fs = require('fs')
const junk = require('junk')

module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  markdown: {
    lineNumbers: true,
  ***REMOVED***,
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/nprogress'
  ],
  themeConfig: {
    lastUpdated: '最后更新',
    smoothScroll: true,
    displayAllHeaders: true,
    // sidebar: 'auto',
    sidebar: {
      '/IT/languages/CSS/': [
        {
          title: '布局',
          collapsable: true,
          children: [
            {
              title: 'flex',
              path: '/IT/languages/CSS/布局/flex.md',
              collapsable: true
            ***REMOVED***,
          ]
        ***REMOVED***,
        {
          title: '颜色 & 主题',
          collapsable: true,
          children: [
            {
              title: '主题',
              // path 应当以英文、kabel-case 分割，如何自动化？
              path: '/IT/languages/CSS/颜色 & 主题/主题.md',
              collapsable: true
            ***REMOVED***,
          ]
        ***REMOVED***,
      ],
      '/': [
        ''
      ]
    ***REMOVED***,
    nav: [
      { text: 'Home', link: '/' ***REMOVED***,
      {
        text: '程序视界',
        items: [
          { text: '编程语言', items: gItems('../IT/languages/') ***REMOVED***,
          { text: '框架 & 类库', items: gItems('../IT/frameworks/') ***REMOVED***,
          { text: '工具', items: gItems('../IT/tools/') ***REMOVED***,
        ]
      ***REMOVED***,
      {
        text: '站内管理',
        items: [
          { text: 'Jenkins', link: 'https://jenkins.abyssal.site' ***REMOVED***,
          { text: 'Vultr', link: 'https://my.vultr.com' ***REMOVED***,
        ]
      ***REMOVED***
    ],
  ***REMOVED***,
  configureWebpack: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, '../../')
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***
***REMOVED***

function gItems (relative) {
  return fs
    .readdirSync(path.resolve(__dirname, relative))
    .filter(junk.not)
    .map((dir) => ({
      text: dir,
      link: path.normalize(`/${path.relative(__dirname, relative)***REMOVED***/${dir***REMOVED***/`),
      absPath: path.join(__dirname, relative, dir)
    ***REMOVED***))
***REMOVED***
