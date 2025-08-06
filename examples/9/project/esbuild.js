import esbuild from "esbuild";
import MyLoader from "./solved/esbuild-loader.js";
import MyPlugin from "./solved/esbuild-plugin.js";

const options = {
  entryPoints: ["src/index.js"],
  bundle: true,
  outdir: "dist/esbuild",
  plugins: [MyLoader(), MyPlugin()],
};

esbuild.build(options).catch(() => process.exit(1));
