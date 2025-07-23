import esbuild from 'esbuild';

esbuild.build({
  outdir: 'dist',
  bundle: true,
  format: 'esm',
  splitting: true,
  minify: true,
  entryPoints: ['./src/index.js'],
  resolveExtensions: ['.ts', '.js', '.json'],
  alias: {
    'add': './src/add.js'
  }
});
