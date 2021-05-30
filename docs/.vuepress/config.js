const pluginConf = require('./config/pluginConf.js');
const navConf = require('./config/navConf.js');
const headConf = require('./config/headConf.js');

module.exports = {
  
  base: '/js-Docs/',
  title: 'ET魔改框架使用教程',
  description: 'js1130的文档, vuepress 文档',
  head: headConf,
  plugins: pluginConf,
  themeConfig: {
    sidebar: [
      {
        '/guide/':
        [
         'README',
         'QuitStart',
         'UIFrameWork',
         'OdinDataEditor'
        ]
        // title: '指南',   // 必要的
        // path: '/guide/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        // collapsable: false, // 可选的, 默认值是 true,
        // sidebarDepth: 1,    // 可选的, 默认值是 1
        // children: [
        //   'README.md',
        //   'QuitStart.md',
        //   'UIFrameWork.md',
        //   'OdinDataEditor.md'
        // ]
      }
    ],
    lastUpdated: '上次更新',
    repo: 'js11301130/js-Docs',
    editLinks: true,
    editLinkText: '编辑文档！',
    docsDir: 'docs',
    nav: navConf
  },
}