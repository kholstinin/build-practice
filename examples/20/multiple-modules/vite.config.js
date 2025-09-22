// import commonjs from "vite-plugin-commonjs";

export default {
  build: {
    minify: false,
    commonjsOptions: { transformMixedEsModules: true },
  },
  // plugins: [commonjs()],
};
