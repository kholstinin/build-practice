import path from 'node:path';
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  devtool: false,
  mode: "development",
	output: {
		path: path.join(import.meta.dirname, './dist/webpack'),
		publicPath: '/webpack/'
	},
  entry: "./src/app.js",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
