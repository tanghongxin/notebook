import type { SidebarConfigArray } from '@vuepress/theme-default/lib/node'
import path from 'path'
import { readdir, NAV_CATEGORIES } from './common'

export const generateSidebar = () => new Promise<SidebarConfigArray>(async (resolve) => {
  const sidebar = Object.create({})
  const root = path.join(__dirname, '../../')
  
  await Promise.all(NAV_CATEGORIES.map(async category => {
    const ___ = await readdir(path.join(root, category))
    // 约定目录层级均为两层
    // 层级一
    for (const docs of ___) {
      const __ = await readdir(path.join(root, category, docs))
      // 层级二
      for (const doc of __) {
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
