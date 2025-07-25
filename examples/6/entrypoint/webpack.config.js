import path from "node:path";

export default {
  devtool: false,
  mode: "development",
  entry: {
    home: {
      import: "./src/home.js",
    },
    about: {
      import: ["./src/base.js", "./src/about.js"]
    },
  },
  output: {
    path: path.resolve("./dist"),
  },
};
