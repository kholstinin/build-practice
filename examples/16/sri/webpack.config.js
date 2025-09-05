const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { SubresourceIntegrityPlugin } = require("webpack-subresource-integrity");

module.exports = {
  devtool: false,
  mode: "production",
  output: {
    path: path.join(__dirname, "./dist/webpack"),
    publicPath: "/webpack/",
    crossOriginLoading: "anonymous",
  },
  entry: "./src/app.js",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new SubresourceIntegrityPlugin(),
  ],
};
