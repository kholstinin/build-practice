import fs from "node:fs";

import css from "rollup-plugin-import-css";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import html from "@rollup/plugin-html";
import esbuild from "rollup-plugin-esbuild";
import replace from "@rollup/plugin-replace";
import { cacheBuild } from 'rollup-cache';

const template = fs.readFileSync("./template.html");

const cacheConfig = {
  name: 'my-app',
  dependencies: ['rollup.config.js'],
  prebuild: [],
};

const config = {
  input: "./src/index.tsx",
  jsx: {
    mode: "automatic",
  },
  output: {
    file: "./dist/rollup/main.js",
    format: "esm",
  },
  onwarn(warning, warn) {
    if (warning.code !== 'MODULE_LEVEL_DIRECTIVE') {
      warn(warning);
    }
  },
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
    nodeResolve({ extensions: [".tsx", ".ts", ".jsx", ".js", ".json"] }),
    commonjs(),
    esbuild(),
    css(),
    html({
      publicPath: "/rollup/",
      template: () => template,
    }),
  ],
};

export default cacheBuild(cacheConfig, config);
