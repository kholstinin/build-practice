import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import TerserWebpackPlugin from "terser-webpack-plugin";

const config = {
  entry: {
    server: "./src/server.tsx",
  },
  mode: "production",
  target: "node",
  devtool: false,
  output: {
    publicPath: "/webpack/",
    path: path.resolve(import.meta.dirname, "dist/webpack"),
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  optimization: {
    minimize: true,
    moduleIds: 'named',
    concatenateModules: false,
    chunkIds: 'named',
    mangleExports: false,
    minimizer: [
      new TerserWebpackPlugin({
        terserOptions: {
          mangle: false,
          keep_classnames: true,
          keep_fnames: true,
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "swc-loader",
            options: {
              jsc: {
                parser: {
                  syntax: "typescript",
                  jsx: true,
                },
                transform: {
                  react: {
                    runtime: "automatic",
                  },
                },
              },
            },
          },
        ],
      },
    ],
  },
  experiments: {
    css: true,
  },
};

export default config;
