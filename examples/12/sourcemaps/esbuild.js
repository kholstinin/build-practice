import esbuild from 'esbuild';
import { htmlPlugin } from '@craftamap/esbuild-plugin-html';

const options = {
    entryPoints: ['src/index.tsx'],
    bundle: true,
    sourcemap: true,
    publicPath: '/esbuild/',
    outdir: 'dist/esbuild',
    plugins: [
        htmlPlugin({
            files: [
                {
                    entryPoints: [
                        'src/index.tsx',
                    ],
                    filename: 'index.html',
                    htmlTemplate: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body>
                <div id="root"></div>
            </body>
            </html>
          `,
                },
            ]
        })
    ]
}

esbuild.build(options).then((result) => {
    console.log(`Build ended in ${performance.now().toFixed(2)}ms`);
}).catch(() => process.exit(1))
