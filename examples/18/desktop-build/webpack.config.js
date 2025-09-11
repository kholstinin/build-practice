import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default [
  {
    entry: "./src/renderer.js",
    mode: "development",
    output: {
      path: path.resolve("./dist"),
      filename: "renderer.js",
    },
    devtool: false,
    target: "electron-renderer",
    plugins: [new HtmlWebpackPlugin({ template: "template.html" })],
  },
  {
    entry: "./src/main.js",
    output: {
      path: path.resolve("./dist"),
      filename: "main.js",
    },
    mode: "development",
    devtool: false,
    target: "electron-main",
  },
];
