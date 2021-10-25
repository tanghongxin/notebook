import type { SidebarConfigArray, NavbarConfig, NavbarItem, NavLink } from '@vuepress/theme-default/lib/node'
import path from 'path'
import locales from './locales'
import { readdir, NAV_CATEGORIES } from './common'

const generateNavLinkChildren = relative => new Promise<NavLink[]>((resolve, reject) => {
  return readdir(path.resolve(__dirname, '../', relative))
    .then(files => {
      return resolve(files.map((child) => ({
        text: locales.get(child) || child,
        link: path.normalize(`/${path.relative(__dirname, relative)}/${child}/`),
      } as NavbarItem)))
    })
    .catch(reject)
})

export const generateNavbar = () => new Promise<NavbarConfig>(async (resolve) => {
  const itemsCollection = await Promise.all(NAV_CATEGORIES.map(nc => generateNavLinkChildren(`../${nc}/`)))
  
  resolve([
    { text: '关于', link: '/' },
    ...[
      { text: '编程语言', children: itemsCollection[0] },
      { text: '框架 & 类库', children: itemsCollection[1] },
      { text: '软件工程', children: itemsCollection[2] },
      {
        text: '其他',
        children: [
          { text: 'IDEA', children: itemsCollection[3] },
          { text: '工具', children: itemsCollection[4] },
          { text: '操作系统', children: itemsCollection[5] },
        ]
      },
      { text: '树洞时间', children: itemsCollection[6] },
    ],
    {
      text: '站内管理',
      children: [
        { text: 'Azure', link: 'https://dev.azure.com/hongxintang' },
        { text: '阿里云', link: 'https://account.aliyun.com' },
        { text: 'Github', link: 'https://github.com/tanghongxin/notebook.git' }
      ]
    }
  ])
})
