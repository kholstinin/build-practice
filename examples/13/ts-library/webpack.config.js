import path from "node:path";

export default {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(import.meta.dirname, "lib"),
    libraryTarget: "module",
  },
  devtool: false,
  mode: "development",
  experiments: {
    outputModule: true,
  },
  resolve: {
    extensions: ['.ts']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  }
};
