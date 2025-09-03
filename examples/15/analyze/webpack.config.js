import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import StatoscopeWebpackPlugin from "@statoscope/webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import rsdoctor from '@rsdoctor/webpack-plugin';

const config = {
  entry: "./src/webpack.tsx",
  mode: "development",
  devtool: false,
  output: {
    publicPath: "/webpack/",
    path: path.resolve(import.meta.dirname, "dist/webpack"),
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./template.html",
    }),
    // new BundleAnalyzerPlugin(),
    new StatoscopeWebpackPlugin.default({saveStatsTo: "./compilation-stats-2.json", open: false}),
    // new rsdoctor.RsdoctorWebpackPlugin()
  ],
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
