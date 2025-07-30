import fs from "node:fs";
import esbuild from "esbuild";
import { htmlPlugin } from "@craftamap/esbuild-plugin-html";
import inlineImage from "esbuild-plugin-inline-image";

const template = fs.readFileSync("./template.html");

const options = {
  entryPoints: ["src/index.jsx"],
  bundle: true,
  publicPath: "/esbuild/",
  outdir: "dist/esbuild",
  loader: {
    ".jpeg": "file",
    ".svg": "file",
  },
  plugins: [
    htmlPlugin({
      files: [
        {
          entryPoints: ["src/index.jsx"],
          filename: "index.html",
          htmlTemplate: template,
        },
      ],
    }),
  ],
  plugins: [
    inlineImage({
      extensions: ["svg"],
    }),
  ],
};

esbuild.build(options).catch(() => process.exit(1));
