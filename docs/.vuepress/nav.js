const fs = require('fs')
const path = require('path')
const junk = require('junk')

const NAV_CATEGORY_LANGUAGES = 'languages'
const PATH_CATEGORY_LANGUAGES = `../${NAV_CATEGORY_LANGUAGES}/`

const NAV_CATEGORY_FRAMEWORKS = 'frameworks'
const PATH_CATEGORY_FRAMEWORKS = `../${NAV_CATEGORY_FRAMEWORKS}/`

const NAV_CATEGORY_SOFTWARE_ENGINEERING = 'SE'
const PATH_CATEGORY_SOFTWARE_ENGINEERING = `../${NAV_CATEGORY_SOFTWARE_ENGINEERING}/`

const NAV_CATEGORY_IDEA = 'IDEA'
const PATH_CATEGORY_IDEA = `../${NAV_CATEGORY_IDEA}/`

const NAV_CATEGORY_TOOLS = 'tools'
const PATH_CATEGORY_TOOLS = `../${NAV_CATEGORY_TOOLS}/`

const NAV_CATEGORY_ROBOT = 'robot'
const PATH_CATEGORY_ROBOT = `../${NAV_CATEGORY_ROBOT}/`

// TODO: async
const generateChildren = dir => fs.readdirSync(dir).filter(junk.not)

const generateItems = relative => {
  return fs
    .readdirSync(path.resolve(__dirname, relative))
    .filter(junk.not)
    .map((child) => ({
      text: child,
      link: path.normalize(`/${path.relative(__dirname, relative)}/${child}/`),
    }))
}

module.exports.DYNAMIC_NAV_LIST = [
  { text: '编程语言', items: generateItems(PATH_CATEGORY_LANGUAGES) },
  { text: '框架 & 类库', items: generateItems(PATH_CATEGORY_FRAMEWORKS) },
  { text: '软件工程', items: generateItems(PATH_CATEGORY_SOFTWARE_ENGINEERING) },
  {
    text: '其他',
    items: [
      { text: 'IDEA', items: generateItems(PATH_CATEGORY_IDEA) },
      { text: '工具', items: generateItems(PATH_CATEGORY_TOOLS) },
    ]
  },
  { text: '树洞时间', items: generateItems(PATH_CATEGORY_ROBOT) },
]

module.exports.DYNAMIC_SIDEBAR = (function (){
  const sidebar = Object.create({})
  const root = path.join(__dirname, '../')
  // 约定目录层级均为两层
  for (const category of [NAV_CATEGORY_LANGUAGES, NAV_CATEGORY_FRAMEWORKS, NAV_CATEGORY_IDEA, NAV_CATEGORY_TOOLS]) {
    for (const docs of generateChildren(path.join(root, category))) {
      for (doc of generateChildren(path.join(root, category, docs))) {
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
})()
