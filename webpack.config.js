const path = require('path');

module.exports = {
  mode: "development",
  // entry point to load all the dependencies/modules included in the app
  entry: "./src/index.js",
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      options: {
        rootMode: "upward",
      }
    }]
  },
  resolve: {
    extensions: ['*', '.js'],
  },
  // where the bundle will be stored with props
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    // tells webpack where to take the content from
    contentBase: "./dist",
    // needs to be specified ...? 
    port: 8000,
  },
};
