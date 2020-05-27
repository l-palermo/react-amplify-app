const path = require("path");
const webpack = require("webpack");
// const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  // entry point to load all the dependencies/modules included in the app
  entry: "./src/index.js",
  module: {
    rules: [
      // js, jsx rules
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          rootMode: "upward",
          presets: ["@babel/env"],
        },
      },
      // css rule
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    // console error were due to .mjs extension missing
    extensions: ["*", ".mjs", ".js", ".jsx"],
  },
  // where the bundle will be stored
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    // tells webpack where to take the content from
    contentBase: "./dist",
    // needs to be specified ...?
    port: 8000,
    // compress the bundle
    compress: true,
    // allows the hot module replacement
    hotOnly: true,
  },
  // allows no page refresh
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new CopyWebpackPlugin({ patterns: ["./dist/index.html"] }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  // enables source maps
  devtool: "source-map",
};
