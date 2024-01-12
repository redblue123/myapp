/* npx umi g page tabs
src/pages/tabs.tsx
src/pages/tabs.less */

import { defineConfig } from "umi";

export default defineConfig({
  routes: [

    { path: "/", component: "index", name: "home 首页" },

    { path: "/font", component: "font", name: "Font 文字版式" },

    { path: "/color", component: "color", name: "Color 颜色" },

    { path: "/button", component: "button", name: "Button 按钮" },

    { path: "/flex", component: "flex", name: "Flex 布局" },

    { path: "/pagination", component: "pagination", name: "Pagination 分页" },

    { path: "/form", component: "form", name: "form 表单" }, 

    { path: "/tabs", component: "tabs", name: "tabs 切换" },  

    { path: "/products", component: "products", name: "products" },
    
    { path: "/input", component: "input", name: "input" },

    { path: "/test", component: "test", name: "test 测试" },

  ],
  plugins: ["@umijs/plugins/dist/react-query"],
  reactQuery: {},
  npmClient: "pnpm",
});