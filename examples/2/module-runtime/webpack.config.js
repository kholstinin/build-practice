const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js'
  },
  mode: "development",
  devtool: false,
};
