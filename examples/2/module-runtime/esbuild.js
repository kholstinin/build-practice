import esbuild from "esbuild";

esbuild.build({
  entryPoints: ["index.js"],
  bundle: true,
  splitting: true,
  format: "esm",
  outdir: "dist",
  target: ["es2020"],
});
