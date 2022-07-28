import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

const base = '/notebook/'

export default new Promise(async (resolve) => {
  resolve(defineUserConfig<DefaultThemeOptions>({
    port: 8080,
    base,
    title: '#',
    description: '',
    head: [
      ['link', { rel: 'icon', href: `${base}sea.svg` }]
    ],
    plugins: [
      '@vuepress/back-to-top',
      '@vuepress/nprogress',
      '@vuepress/medium-zoom',
      [
        '@vuepress/plugin-search',
        {
          locales: {
            '/': {
              placeholder: '搜索',
            },
            '/zh/': {
              placeholder: '搜索',
            },
          },
        },
      ],
      ['@snippetors/vuepress-plugin-code-copy', {
        backgroundTransition: false,
        successText: '复制成功',
        successTextColor: '#3AA675',
        color: 'var(--code-ln-color)',
      }],
    ],
    themeConfig: {
      docsDir: 'docs',
      contributors: false,
      lastUpdatedText: '最后更新',
      smoothScroll: true,
      displayAllHeaders: true,
      sidebar: false,
      navbar: [
        {
          text: '站内管理',
          children: [
            { text: 'Azure', link: 'https://dev.azure.com/hongxintang' },
            { text: '腾讯云', link: 'https://cloud.tencent.com/login' },
            { text: 'Github', link: 'https://github.com/tanghongxin/notebook.git' }
          ]
        }
      ],
    },
    bundler: '@vuepress/bundler-vite'
  }))
})
