const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  mode: "development",
  devtool: false,
};
