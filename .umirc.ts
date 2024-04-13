/* npx umi g page tabs
src/pages/tabs.tsx
src/pages/tabs.less */

import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index", name: "home 首页" },

    { path: "/banner", component: "banner", name: "Banner 头图" },

    { path: "/font", component: "font", name: "Font 文字" },

    { path: "/color", component: "color", name: "Color 颜色" },

    { path: "/button", component: "button", name: "Button 按钮" },

    { path: "/flex", component: "flex", name: "Flex 布局" },

    { path: "/pagination", component: "pagination", name: "Pagination 分页" },

    { path: "/form", component: "form", name: "Form 表单" }, 

    { path: "/tabs", component: "tabs", name: "Tabs 切换" }, 

    { path: "/modal", component: "modal", name: "Modal 对话框" }, 

    { path: "/input", component: "input", name: "Input 输入框" },

    { path: "/card", component: "card", name: "card 卡片" },

    { path: "/table", component: "table", name: "table 表格" },

    { path: "/products", component: "products", name: "products" },


    { path: "/comment", component: "comment", name: "comment 评论" },

    { path: "/test", component: "test", name: "test 测试" },


    { path: "/modules",
      
      name: "modules 模块页面",
      routes:[
        { path: "modules/chart", component: "chart", name: "chart图表" },

      ],


    
     },

    { path: "/dataManager", component: "dataManager", name: "dataManager" },

    { path: "/analysis", component: "analysis", name: "analysis" },

    { path: "/publish", component: "publish", name: "publish 发布页" },

    { path: "/login"},


  ],
  plugins: ["@umijs/plugins/dist/react-query"],
  reactQuery: {},
  // 速度会更快
  npmClient: "pnpm",
});