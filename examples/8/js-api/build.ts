import webpack from "webpack";

webpack(
  {
    entry: "./src/index.js",
    devtool: false,
    mode: "development",
  },
  (err, stats) => {
    if (!err) {
      console.log("success!");
    }
  }
);
