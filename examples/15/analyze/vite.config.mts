import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { analyzer } from "vite-bundle-analyzer";

export default defineConfig({
  plugins: [tsconfigPaths(), analyzer()],
  base: "/vite/",
  build: {
    outDir: "dist/vite",
    // minify: false,
    rollupOptions: {
      perf: true,
    },
  },
});
