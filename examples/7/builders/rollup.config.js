import path from "node:path";
import fs from "node:fs";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import url from "@rollup/plugin-url";
import html from "@rollup/plugin-html";

const template = fs.readFileSync("./template.html");

export default {
  input: "./src/index.jsx",
  jsx: {
    mode: "automatic",
  },
  output: {
    file: "./dist/rollup/main.js",
    format: "iife",
    assetFileNames: "[name][extname]",
  },
  plugins: [
    url(),
    html({
      template: () => template,
    }),
    nodeResolve({ extensions: [".jsx", ".js", ".json"] }),
    commonjs(),
  ],
};
