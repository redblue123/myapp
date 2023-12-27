import { defineConfig } from "umi";

export default defineConfig({
  routes: [

    { path: "/", component: "index", name: "home" },
    
    { path: "/font", component: "font", name: "Font 文字版式" },

    { path: "/color", component: "color", name: "Color 颜色" },

    { path: "/button", component: "button", name: "Button 按钮" },

    { path: "/docs", component: "docs", name: "docs" },

    { path: "/products", component: "products", name: "products" },
    
  ],
  plugins: ["@umijs/plugins/dist/react-query"],
  reactQuery: {},
  npmClient: "pnpm",
});