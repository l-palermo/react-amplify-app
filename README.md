# react-amplify-app

> First approach to include AWS amplify to a react app.

### Steps:

<h4>Add a minimal webpack config</h4>

* Deps: 
    * webpack
    * webpack-cli
    * webpack-dev-server
---

<h4>Add a minimal babel config</h4>

* Deps:
    * @babel/cli
    * @babel/core
    * @babel/preset-env
    * babel-loader
---

<h4>Add minimal react config</h4>

* Deps:
    * @babel/preset-react
    * style-loader
    * css-loader
    * react
    * react-dom
---

<h4>Add amplify</h4>

Sign up to aws, install amplify, connect it to aws account, add auth.

* Deps: 
    * aws-amplify
    * @aws-amplify/ui-react
---

<h4>Add amplify</h4>

Sign up to aws, install amplify, connect it to aws account, add auth.
* Deps: 
    * aws-amplify
    * @aws-amplify/ui-react
    * clean-webpack-plugin
    * html-webpack-plugin
---

<h4>Update webpack to bundle css</h4>

At the moment css module is not in use.
* Deps:
    * html-webpack-link-type-plugin
    * mini-css-extract-plugin
---

<h4>Add css module to webpack and svg</h4>

* Deps: 
    *  @svgr/webpack

---
<h4>Add homepage with some UI components</h4>

* Deps: 
    * "@babel/plugin-transform-runtime" - { needed to allows custom UI log out }
    * "@babel/runtime"
    * "classnames"
---

<h4>Add eslint</h4> 

* Deps:
    * eslint
    * eslint-plugin-react
    * prettier
---

<h4>Add Jest as test framework</h4>

* Deps:
    * babel-jest
    * jest
    * jest-environment-enzyme
    * jest-enzyme
    * enzyme
    * enzyme-adapter-react-16
    * identity-obj-proxy { needed to test css-modules }
