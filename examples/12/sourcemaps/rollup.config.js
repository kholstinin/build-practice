import fs from "node:fs";

import css from "rollup-plugin-import-css";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import html from "@rollup/plugin-html";
import esbuild from "rollup-plugin-esbuild";
import replace from "@rollup/plugin-replace";
import terser from "@rollup/plugin-terser";
import tsConfigPaths from "rollup-plugin-tsconfig-paths";

const template = fs.readFileSync("./template.html");

export default {
  input: "./src/index.tsx",
  jsx: {
    mode: "automatic",
  },
  output: {
    file: "./dist/rollup/main.js",
    format: "esm",
    sourcemap: true,
  },
  onwarn(warning, warn) {
    if (warning.code !== "MODULE_LEVEL_DIRECTIVE") {
      warn(warning);
    }
  },
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
    tsConfigPaths(),
    nodeResolve({ extensions: [".tsx", ".ts", ".jsx", ".js", ".json"] }),
    commonjs(),
    esbuild({ tsconfig: "tsconfig.json" }),
    css(),
    html({
      publicPath: "/rollup/",
      template: ({ title, files, publicPath }) => {
        const scripts = (files.js || [])
          .map(
            ({ fileName }) =>
              `<script type="module" src="${publicPath}${fileName}"></script>`
          )
          .join("\n");

        return `<!DOCTYPE html>
<html>
  <head>
    <title>${title}</title>
    ${scripts}
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`;
      },
    }),
    // terser(),
  ],
};
