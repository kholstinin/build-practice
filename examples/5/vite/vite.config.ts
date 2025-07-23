import path from 'node:path';

import { defineConfig } from "vite";
import commonjs from "vite-plugin-commonjs";

export default defineConfig({
  build: {
    minify: false,
  },
  resolve: {
    alias: {
      add: path.resolve("./src/add.js"),
    },
  },
  plugins: [commonjs()],
});
