import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar'

const vitePressOptions = {
  title: "E Station Docs",
  description: "E Stations's Front Docs",
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: '/logo.jpg' }]
  ],
  themeConfig: {
    nav: [
      { text: '快速开始', link: '/快速开始' },
      {
        text: "组件", items: [
          { text: "Shared", link: '/组件/shared' }
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
