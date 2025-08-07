import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar'

const vitePressOptions = {
  lastUpdated: true,
  title: "E Station Docs",
  description: "E Stations's Front Docs",
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: '/logo.jpg' }]
  ],
  themeConfig: {

    nav: [
      { text: '快速开始', link: '/指南/快速开始' },
      {
        text: "组件", items: [
          { text: "Index", link: "/组件/Index" },
          { text: "Shared", link: '/组件/Shared' },
          { text: "Chat", link: '/组件/Chat' },
          { text: "Message", link: "/组件//Message" }
        ]
      }
    ],

    socialLinks: [
      { icon: 'gitee', link: 'https://gitee.com/kaede221/e-zhan-front-docs' }
    ]
  }
}

const vitePressSliderBarOptions = {
  documentRootPath: '/',
  collapsed: false,
  capitalizeFirst: true
}

// @ts-ignore
export default defineConfig(withSidebar(vitePressOptions, vitePressSliderBarOptions))
