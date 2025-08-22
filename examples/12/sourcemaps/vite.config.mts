import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  base: '/vite/',
  build: {
    sourcemap: true,
    outDir: 'dist/vite',
    // minify: false,
    rollupOptions: {
      perf: true
    }
  },
})
