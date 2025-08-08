import esbuild from "esbuild";

const options = {
  entryPoints: ["src/index.js"],
  bundle: true,
  outdir: "dist/esbuild",
};

const context = await esbuild.context(options);

context.watch();
