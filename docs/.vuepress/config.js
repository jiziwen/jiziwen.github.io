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
      { text: '加密', link: '/encrypt' },
      { text: '声明', link: '/about' },
    ],
    sidebar: {
      "/class/": "structure",
      "/tag/": "structure",
      "/encrypt/": "structure",
    },
    encrypt: {
      config: {
        // 这会加密整个 encrypt 目录，并且两个密码都是可用的
        "/encrypt/": ["0305", "0211"],
        // 这只会加密 config/page.html
      },
    },
  }),
  plugins: [
    searchPlugin()
  ]
})