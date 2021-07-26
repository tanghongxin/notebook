const CompressionWebpackPlugin = require('compression-webpack-plugin')
const { DYNAMIC_SIDEBAR, DYNAMIC_NAV_LIST } = require('./nav')

module.exports = {
  theme: 'default-prefers-color-scheme',
  title: 'Abyssal Notebook',
  description: 'Personal technical notebook collections based on VuePress',
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
    sidebar: DYNAMIC_SIDEBAR,
    nav: [
      { text: '关于', link: '/' },
      ...DYNAMIC_NAV_LIST,
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
