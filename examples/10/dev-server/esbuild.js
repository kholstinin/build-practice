import esbuild from "esbuild";

const options = {
  entryPoints: ["src/esbuild.js"],
  bundle: true,
  outdir: "www/js",
};

const context = await esbuild.context(options);

await context.watch()

context.serve({ servedir: "www" });
