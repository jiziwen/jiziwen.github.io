import { defineUserConfig } from 'vuepress';
import { searchPlugin } from "@vuepress/plugin-search";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  lang: 'zh-CN',
  title: "Awen's Blog！",
  description: '前端，js，css，ts，html',
  theme: hopeTheme({
    logo: '/logo.svg',
    repo: 'https://github.com/jiziwen/jiziwen.github.io',
    navbar: [
      { text: '首页', link: '/' },
      { text: '分类', link: '/class/' },
      { text: '标签', link: '/tag/' },
      { text: '声明', link: '/about' },
    ],
    sidebar: {
      "/class/": "structure",
      "/tag/": "structure",
    },
  }),
  plugins: [
    searchPlugin()
  ]
})