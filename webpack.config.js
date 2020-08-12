const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { HtmlWebpackLinkTypePlugin } = require('html-webpack-link-type-plugin');

module.exports = function (webpackEnv) {
    const jsjsxRegex = /\.(js|jsx)$/;
    const cssRegex = /\.css$/;
    const cssModuleRegex = /\.module\.css$/;
    const env = webpackEnv ? 'production' : 'development';

    return {
        mode: env,
        // entry point to load all the dependencies/modules included in the app
        entry: './src/index.js',
        // where the bundle will be stored
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].bundle.js',
            chunkFilename: '[name].bundle.js',
            publicPath: '/',
        },
        module: {
            rules: [
                // js, jsx rules
                {
                    test: jsjsxRegex,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    options: {
                        rootMode: 'upward',
                        presets: ['@babel/env'],
                    },
                },
                // plain css rule
                {
                    test: cssRegex,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                // it applies css modules to imported resources
                                importLoaders: 1,
                            },
                        },
                        {
                            loader: 'postcss-loader',
                        },
                    ],
                    exclude: cssModuleRegex,
                },
                {
                    test: cssModuleRegex,
                    use: [
                        {
                            // it is an alternative to style-loader, it extract css
                            loader: MiniCssExtractPlugin.loader,
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                // it applies css modules to imported resources
                                importLoaders: 1,
                                // tells css loader to enable modules
                                modules: {
                                    localIdentName: '[name]__[local]____[hash:base64:5]',
                                },
                            },
                        },
                        {
                            loader: 'postcss-loader',
                        },
                    ],
                },
                {
                    test: /\.svg$/,
                    use: [
                        {
                            loader: '@svgr/webpack',
                            // loader: "svg-url-loader",
                            options: {
                                limit: 10000,
                            },
                        },
                    ],
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                        },
                    ],
                },
            ],
        },
        resolve: {
            // console error were due to .mjs extension missing
            extensions: ['*', '.mjs', '.js', '.jsx'],
        },
        // enables source maps
        devtool: !webpackEnv ? 'inline-source-map' : false,
        devServer: !webpackEnv
            ? {
                  // allow refreshing page on a client route path, this is because the server doesn't know about the 'client side routes'
                  historyApiFallback: true,
                  // tells webpack where to take the content from
                  contentBase: './dist',
                  // needs to be specified, he default one is not recognised, strange.
                  port: 8000,
                  // compress the bundle
                  compress: true,
                  //   hot: true,
                  // hotOnly: true,
                  stats: 'minimal',
                  watchContentBase: true,
              }
            : {},
        plugins: [
            // cleans the dist folder after the server run each time
            new CleanWebpackPlugin(),
            // allows no page refresh ??? atm reload the server only not the page
            new webpack.HotModuleReplacementPlugin(),
            // creates a index.html file in the dist folder with the correct script for the bundle
            new HtmlWebpackPlugin({
                template: './public/index.html',
            }),
            // it creates a style.css fine in bundle
            new MiniCssExtractPlugin(),
            // it create a link to the styles.css in the new index.html
            new HtmlWebpackLinkTypePlugin({
                '**/*.css': 'text/css',
            }),
        ],
    };
};
