import { defineConfig } from "vite";
import MyLoader from './solved/rollup-loader';
import MyPlugin from './solved/rollup-plugin';

export default defineConfig({
  base: "/vite/",
  assetsInclude: [],
  plugins: [MyLoader(), MyPlugin()],
  build: {
    outDir: "dist/vite",
    minify: false,
  },
});
