import MyLoader from './solved/rollup-loader.js';
import MyPlugin from './solved/rollup-plugin.js';

export default {
  input: "./src/index.js",
  output: {
    file: "./dist/rollup/main.js",
    format: "iife",
  },
  plugins: [MyPlugin(), MyLoader()],
};
