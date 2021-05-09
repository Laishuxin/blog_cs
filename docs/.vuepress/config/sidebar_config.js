const { getFileNames, getFileNamesByGroups } = require('./utils')
const { resolve } = require('path')
const basePath = resolve(__dirname, '../../')

const sidebar = {
  '/cate/csapp/': getCsapp('Part I: Program Structure and Execution'),
  '/cate/': ['csapp']
}

function getCsapp(...groups) {
  const path = resolve(basePath, './cate/csapp/')
  const group = getFileNamesByGroups(path, groups)
  return groups.map((item) => {
    return {
      title: item,
      collapsable: false,
      children: group[item]
    }
  })
}
module.exports = sidebar
