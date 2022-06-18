import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default new Promise(async (resolve) => {
  resolve(defineUserConfig<DefaultThemeOptions>({
    base: '/notebook/',
    title: '#',
    description: '',
    head: [
      ['link', { rel: 'icon', href: '/sea.svg' }]
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
      ]
      // TODO
      // ['vuepress-plugin-code-copy', {
      //   staticIcon: true,
      //   successText: '🌈',
      // }],
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
            { text: '阿里云', link: 'https://account.aliyun.com' },
            { text: 'Github', link: 'https://github.com/tanghongxin/notebook.git' }
          ]
        }
      ],
    },
    bundler: '@vuepress/bundler-vite'
  }))
})
