const { getFileNames, getFileNamesByGroups } = require('./utils')
const { resolve } = require('path')
const basePath = resolve(__dirname, '../../')

const cate = ['csapp', 'design-patterns', 'computer-network']
const getSidebarName = (name) => `/cate/${name}/`


const sidebar = {
  [getSidebarName('csapp')]: getCsapp('Part I: Program Structure and Execution'),
  [getSidebarName('design-patterns')]: getDesignPatterns(),
  [getSidebarName('computer-network')]: getFilesByName('computer-network'),
  '/cate/': cate
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

function getDesignPatterns() {
  const path = resolve(basePath, './cate/design-patterns')
  return getFileNames(path)
}

function getFilesByName(path, prefix='./cate') {
  prefix = resolve(basePath, prefix);
  return getFileNames(`${prefix}/${path}`);
}

module.exports = sidebar
