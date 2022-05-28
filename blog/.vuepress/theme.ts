import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
// import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-v2-demo.mrhope.site",

  author: {
    name: "Mr.Hope",
    url: "https://mrhope.site",
  },

  iconPrefix: "",

  logo: "/logo.svg",

  repo: "jinweiOS/blog", // TODO: 修改默认跳转仓库

  docsDir: "blog",

  // navbar
  navbar: navbar,

  // sidebar
  // sidebar: sidebar,

  footer: "默认页脚",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    description: "一个前端开发者", //TODO: 一个前端开发者
    intro: "/intro.html",
    medias: {
      GitHub: "https://github.com" // TODO: 有人self github
    },
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
