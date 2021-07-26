const path = require('path')
const fs = require('fs')
const junk = require('junk')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = {
  theme: 'default-prefers-color-scheme',
  title: 'Abyssal Notebook',
  description: '',
  markdown: {
    lineNumbers: true,
  },
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
      { text: 'Home', link: '/' },
      { text: '编程语言', items: gItems('../languages/') },
      { text: '框架 & 类库', items: gItems('../frameworks/') },
      { text: '软件工程', items: gItems('../SE/') },
      {
        text: '其他',
        items: [
          { text: 'IDEA', items: gItems('../IDEA/') },
          { text: '工具', items: gItems('../tools/') },
        ]
      },
      { text: '树洞时间', items: gItems('../robot/') },
      {
        text: '站内管理',
        items: [
          { text: 'Jenkins', link: 'https://jenkins.abyssal.site' },
          { text: '阿里云', link: 'https://account.aliyun.com' },
        ]
      }
    ],
  },
  configureWebpack: (config) => {
    config.plugins = [
      ...config.plugins,
      ...process.env.NODE_ENV === 'production' ? [
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: /\.(js|css|json|txt|html|ico|svg|png|TTF)(\?.*)?$/i,
          threshold: 10240,
          minRatio: 0.7,
          compressionOptions: {
            level: 7
          },
          deleteOriginalAssets: false
        })
      ] : []
    ]
  }
}

function gChildren(dir) {
  return fs
    .readdirSync(dir)
    .filter(junk.not)
}

function gItems (relative) {
  return fs
    .readdirSync(path.resolve(__dirname, relative))
    .filter(junk.not)
    .map((child) => ({
      text: child,
      link: path.normalize(`/${path.relative(__dirname, relative)}/${child}/`),
    }))
}

function gSidebar() {
  const sidebar = Object.create({})
  const root = path.join(__dirname, '../')
  // 约定目录层级均为两层
  for (const category of ['frameworks', 'languages', 'IDEA', 'tools']) {
    for (const docs of gChildren(path.join(root, category))) {
      for (doc of gChildren(path.join(root, category, docs))) {
        const key = `/${category}/${docs}/`
        sidebar[key] = sidebar[key] || []
        if (doc === 'index.md') {
          sidebar[key].unshift('')
        } else {
          sidebar[key].push(doc)
        }
      }
    }
  }
  return sidebar
}
