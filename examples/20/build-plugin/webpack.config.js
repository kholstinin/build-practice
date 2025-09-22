import MyPlugin from "./my-plugin.js";

export default {
  entry: "./src/index.js",
  devtool: false,
  mode: "development",
  plugins: [new MyPlugin()],
};
