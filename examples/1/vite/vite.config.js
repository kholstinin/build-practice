import { dirname, resolve } from "node:path";
import commonjs from '@rollup/plugin-commonjs'
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    outDir: '.',
    lib: {
      entry: resolve(__dirname, "index.js"),
      formats: ['iife'],
      name: 'bundle',
      fileName: 'bundle'
    },
    rollupOptions: {
      external: [],
      plugins: [
        commonjs()
      ]
    }
  },
});
