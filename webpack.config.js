const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const LinkTypePlugin = require("html-webpack-link-type-plugin")
  .HtmlWebpackLinkTypePlugin;

module.exports = function (webpackEnv) {
  const cssRegex = /\.css$/;
  const cssModuleRegex = /\.module\.css$/;
  const isEnvProduction = webpackEnv === "production";
  return {
    mode: isEnvProduction ? "production" : "development",
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
        // plain css rule
        {
          test: cssRegex,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // only enable hot in development
                hmr: process.env.NODE_ENV === "development",
                // if hmr does not work, this is a forceful method.
                reloadAll: true,
              },
            },
            {
              loader: require.resolve("css-loader"),
              options: { importLoaders: 1 },
            },
          ],
        },
        // {
        //   test: cssModuleRegex,
        //   use: [
        //     {
        //       loader: require.resolve("style-loader"),
        //       options: {
        //         // only enable hot in development
        //         hmr: process.env.NODE_ENV === "development",
        //         // if hmr does not work, this is a forceful method.
        //         reloadAll: true,
        //       },
        //     },
        //     {
        //       loader: require.resolve("css-loader"),
        //       options: { importLoaders: 1 },
        //     },
        //   ],
        // },
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
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      new MiniCssExtractPlugin(),
      new LinkTypePlugin({
        "**/*.css": "text/css",
      }),
    ],
    // enables source maps
    devtool: webpackEnv === "development" ? "inline-source-map" : "source-map",
  };
};
