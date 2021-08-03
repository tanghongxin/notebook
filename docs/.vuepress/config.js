// const CompressionWebpackPlugin = require('compression-webpack-plugin')
const fs = require('fs')
const path = require('path')
const junk = require('junk')
const locales = require('../../locales')

const NAV_CATEGORY_LANGUAGES = 'languages'
const NAV_CATEGORY_FRAMEWORKS = 'frameworks'
const NAV_CATEGORY_SE = 'SE'
const NAV_CATEGORY_IDEA = 'IDEA'
const NAV_CATEGORY_TOOLS = 'tools'
const NAV_CATEGORY_OS = 'OS'
const NAV_CATEGORY_ROBOT = 'robot'
const NAV_CATEGORIES = [
  NAV_CATEGORY_LANGUAGES, NAV_CATEGORY_FRAMEWORKS, NAV_CATEGORY_SE,
  NAV_CATEGORY_IDEA, NAV_CATEGORY_TOOLS, NAV_CATEGORY_OS, NAV_CATEGORY_ROBOT
]

const readdir = dir => new Promise((resolve, reject) => {
  fs.readdir(dir, (err, files) => {
    if (err) return reject(err)
    return resolve(files.filter(junk.not))
  })
})

const generateItems = relative => new Promise((resolve, reject) => {
  return readdir(path.resolve(__dirname, relative))
    .then(files => {
      return resolve(files.map((child) => ({
        text: locales.get(child) || child,
        link: path.normalize(`/${path.relative(__dirname, relative)}/${child}/`),
      })))
    })
    .catch(reject)
})

const generateDynamicNavList = () => new Promise(async (resolve) => {
  const itemsCollection = await Promise.all(NAV_CATEGORIES.map(nc => generateItems(`../${nc}/`)))

  resolve([
    { text: '编程语言', items: itemsCollection[0] },
    { text: '框架 & 类库', items: itemsCollection[1] },
    { text: '软件工程', items: itemsCollection[2] },
    {
      text: '其他',
      items: [
        { text: 'IDEA', items: itemsCollection[3] },
        { text: '工具', items: itemsCollection[4] },
        { text: '操作系统', items: itemsCollection[5] },
      ]
    },
    { text: '树洞时间', items: itemsCollection[6] },
  ])
})

const generateDynamicSidebar = () => new Promise(async (resolve) => {
  const sidebar = Object.create({})
  const root = path.join(__dirname, '../')
  
  await Promise.all(NAV_CATEGORIES.map(async category => {
    const ___ = await readdir(path.join(root, category))
    // 约定目录层级均为两层
    // 层级一
    for (const docs of ___) {
      const __ = await readdir(path.join(root, category, docs))
      // 层级二
      for (doc of __) {
        const key = `/${category}/${docs}/`
        sidebar[key] = sidebar[key] || []
        if (doc === 'index.md') {
          sidebar[key].unshift('')
        } else {
          sidebar[key].push(doc)
        }
      }
    }
  }))

  resolve(sidebar)
})

module.exports = () => new Promise(async (resolve) => {
  const [dynamicSidebar, dynamicNavList] = await Promise.all([generateDynamicSidebar(), generateDynamicNavList()])

  resolve({
    theme: 'default-prefers-color-scheme',
    title: 'Abyssal Notebook',
    description: 'Personal technical notebook collections based on VuePress',
    head: [
      ['link', { rel: 'icon', href: 'sea.svg' }]
    ],
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
      sidebar: dynamicSidebar,
      nav: [
        { text: '关于', link: '/' },
        ...dynamicNavList,
        {
          text: '站内管理',
          items: [
            { text: 'Azure', link: 'https://dev.azure.com/hongxintang' },
            { text: '阿里云', link: 'https://account.aliyun.com' },
            { text: 'Github', link: 'https://github.com/tanghongxin/notebook.git' }
          ]
        }
      ],
    },
    configureWebpack: (config) => {
      config.plugins = [
        ...config.plugins,
        ...process.env.NODE_ENV === 'production' ? [
          /**
           * FIXME
           * 启用后导致自定义插件无法正常工作
           * 初步断定其 gzip 算法与 nginx 不一致
           */
          // new CompressionWebpackPlugin({
          //   algorithm: 'gzip',
          //   test: /\.(js|css|json|txt|html|ico|svg|png|TTF)(\?.*)?$/i,
          //   threshold: 10240,
          //   minRatio: 0.7,
          //   compressionOptions: {
          //     level: 7
          //   },
          //   deleteOriginalAssets: false
          // })
        ] : []
      ]
    }
  })
})
