# CATURDAY

https://wwww.caturday.uk

CATURDAY is a simple web app that allows the user to find cool gif and easily share them with friends.
It uses AWS Amplify for user authentication, securely store data and user metadata and for the CI/CD lifecycle. React as UI library tool, webpack, babel, post-css, css-module and jest/enzyme.



---

`Todos:`<br>
`Fix bugs, collection name has to have a maximum length or reduce the size as per the container`<br>
`Add service worker`<br>
`Fetch gifs on scrolling`<br>
`Create a GitHub packages repo and migrate app components`<br>
`Refactor database mock queries to catch error and adjust test`<br>
`Review test and code structure - Some`<br>
`Add message as sign up verification method`<br>

---

The user will:

* Ensure there are no duplicates in each collection
* Search for gifs inside a collection

Maybe, the user will:

* add its own gifs to collections

The user can:

* Sign up, Log in, Log out
* See an exciting splash screen when it first logs in
* See an exciting collection of gifs on the home page
* Search new gifs by keywords
* Copy card URL to send it to his friends both homepage and search
* See the card title, both home page and search
* Navigate to collection page
* Add Delete collections
* Add gif to a specific collection
* Delete gif from a specific collection
* Confirm before delete a collection

---

### Project setup and dependencies:

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
    * eslint-config-prettier
    * eslint-plugin-prettier
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
---

<h4>Add husky precommit hook</h4>

* Deps:
    * husky
---

<h4>Add react router</h4>

* Deps:
    * react-router-dom
---

<h4>Add post-css, stylelint</h4>

* Deps:
    * postcss-loader
    * postcss-nested
    * stylelint
    * stylelint-config-standard
---

<h4>Add Amplify GraphQL based on DynamoDB</h4>

to add GraphQL and DynamoDB
* run `amplify add api`

to mock DB during dev
* run `amplify mock api`
---

<h4>Add lazy loading via native IntersectionObserver</h4>

---

<h4>Improved accessibility</h4>

---

