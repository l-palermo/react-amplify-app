# react-amplify-app

> First approach to include AWS amplify to a react app.

### Steps:

> Add a minimal webpack config

* Deps: 
    * webpack
    * webpack-cli
    * webpack-dev-server


> Add a minimal babel config

* Deps:
    * @babel/cli
    * @babel/core
    * @babel/preset-env
    * babel-loader
    * @babel/polyfill


> Add minimal react config

* Deps:
    * @babel/preset-react
    * style-loader
    * css-loader
    * react
    * react-dom


> Add amplify

Sign up to aws, install amplify, connect it to aws account, add auth.
* Deps: 
    * aws-amplify
    * @aws-amplify/ui-react
    * clean-webpack-plugin
    * html-webpack-plugin

> Update webpack to bundle css

At the moment css module is not in use.
* Deps:
    * html-webpack-link-type-plugin
    * mini-css-extract-plugin

> Add css module to webpack and svg

*Deps: 
    *  "@svgr/webpack"


> Add homepage with some UI components

* Deps: 
    * "@babel/plugin-transform-runtime" - { needed to allows custom UI log out }
    * "@babel/runtime"
    * "classnames"




