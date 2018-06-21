const pkg = require("./package.json")
const webpack = require("webpack");
const path = require("path");
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  target: 'web',
  resolve: {
    modules: [
      'node_modules'
    ],
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
  },
  entry: {
    app_shell: path.resolve(__dirname, "./src/client.tsx"),
  },
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "[name].js",
    publicPath: `/assets/${pkg.version}/`,
    chunkFilename: "[name].js",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          compilerOptions: {
            target: "es5"
          }
        }
      }
    ]
  },
  plugins: [
    new CleanPlugin([
      "publis/js/*.js"
    ], {
      verbose: true
    }),
    new webpack.DefinePlugin({
      "global.GENTLY": false,
      'process.env.BROWSER_ENV': JSON.stringify(true)
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
};
