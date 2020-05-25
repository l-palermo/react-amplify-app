module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "dist",
  },
  devServer: {
    // tells webpack where to take the content from
    contentBase: "./dist",
    // needs to be specified ...? 
    port: 8000,
  },
};
