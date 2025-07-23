import path from "path";

import commonjs from "@rollup/plugin-commonjs";
import alias from "@rollup/plugin-alias";
import json from "@rollup/plugin-json";

export default {
  input: "./src/index.js",
  output: {
    dir: "dist",
    format: "esm",
  },
  plugins: [
    json(),
    commonjs({ transformMixedEsModules: true, extensions: [".js", ".json"] }),
    alias({
      entries: [{ find: "add", replacement: path.resolve("./src/add.js") }],
    }),
  ],
};
