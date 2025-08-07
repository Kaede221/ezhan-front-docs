import {defineConfig} from 'vitepress'

export default defineConfig({
  title: "E Station Docs",
  description: "E Stations's Front Docs",
  lang: 'zh-CN',
  head: [
    ['link', {rel: 'icon', href: '/logo.jpg'}]
  ],
  themeConfig: {
    nav: [
      {text: '快速开始', link: '/docs/start'},
      {
        text: "组件", items: [
          {text: "Shared", link: '/docs/shared'}
        ]
      }
    ],

    sidebar: {
      '/docs/shared': [
        {
          text: '共享组件',
          link: '/docs/shared',
          items: [
            {text: "CustomNavBar", link: '/docs/shared/CustomNavBar'}
          ]
        }
      ]
    },

    socialLinks: [
      {icon: 'gitee', link: 'https://gitee.com/kaede221/e-zhan-front-docs'}
    ]
  }
})
