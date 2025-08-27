import esbuild from 'esbuild';
import fg from 'fast-glob'

const options = {
  entryPoints: fg.sync('./src/**/*.ts'),
  format: 'esm',
  outdir: "lib",
};

esbuild.build(options).then((result) => {
    console.log(`Build ended in ${performance.now().toFixed(2)}ms`);
}).catch(() => process.exit(1))
