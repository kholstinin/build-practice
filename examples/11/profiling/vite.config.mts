import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  base: '/vite/',
  build: {
    outDir: 'dist/vite',
    minify: false,
    rollupOptions: {
      perf: true
    }
  },
})
