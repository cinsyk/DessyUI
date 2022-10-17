import { defineConfig } from 'vite';
import vueJsx from "@vitejs/plugin-vue-jsx";
import vueTemp from "@vitejs/plugin-vue";
const rollupOptions = {

    external: ["vue", "vue-router"],
    output: {
        globals: {
            vue: "Vue",
        },
    },
};
export default defineConfig({
    plugins: [
        vueTemp({}),
        vueJsx({})
    ],
    build: {
        rollupOptions,
        minify: false,
        lib: {
            entry: "./src/entry.ts",
            name: "DessyUI",
            fileName: "dessy-ui",
            // 导出模块格式
            formats: ["es", "umd", "iife"],
        },
    },
})