# DessyUI

## 通过 Vite 将一个组件封装为组件库，组件库可以被其他Vue项目作为插件直接进行使用。

1. 如何使用Vite 从零搭建 Vue 开发环境 ？
   * 使用 pnpm init 初始化
   * 安装 vite 及 vue
  
2. 如何让 Vite 支持 SFC 与 JSX 语法 ？
   * SFC 插件 @vitejs/plugin-vue
   * JSX插件@vitejs/plugin-vue-jsx
   * 配置 vite.config.ts 的 plugin 选项
  
3. 组件库的封装形态是什么样子 ？
   * 默认导出为Vue插件；
   * 每个组件可以单独导出。
  
4. 如何使用 Vite 完成库文件的构建 ？
   * 配置 vite.config.ts 的 build 选项
   * 导出格式为：["es", "umd", "iife"]
  
5. 如何验证组件是否成功导出
   * 新增demo页面，引用打包好的文件，运行项目后访问对应地址



