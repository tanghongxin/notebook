import fs from 'fs'
import junk from 'junk'

export const NAV_CATEGORY_LANGUAGES = 'languages'
export const NAV_CATEGORY_FRAMEWORKS = 'frameworks'
export const NAV_CATEGORY_SE = 'SE'
export const NAV_CATEGORY_IDEA = 'IDEA'
export const NAV_CATEGORY_TOOLS = 'tools'
export const NAV_CATEGORY_OS = 'OS'
export const NAV_CATEGORY_ROBOT = 'robot'
export const NAV_CATEGORIES = [
  NAV_CATEGORY_LANGUAGES, NAV_CATEGORY_FRAMEWORKS, NAV_CATEGORY_SE,
  NAV_CATEGORY_IDEA, NAV_CATEGORY_TOOLS, NAV_CATEGORY_OS, NAV_CATEGORY_ROBOT
]

export const readdir = dir => new Promise<string[]>((resolve, reject) => {
  fs.readdir(dir, (err, files) => {
    if (err) return reject(err)
    return resolve(files.filter(junk.not))
  })
})
