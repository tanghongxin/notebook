import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { generateSidebar, generateNavbar } from './configs'

export default new Promise(async (resolve) => {
  const [sidebar, navbar] = await Promise.all([generateSidebar(), generateNavbar()])

  resolve(defineUserConfig<DefaultThemeOptions>({
    title: 'Abyssal Notebook',
    description: 'Personal technical notebook collections based on VuePress',
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
      sidebar,
      navbar,
    },
    bundler: '@vuepress/bundler-vite'
  }))
})
