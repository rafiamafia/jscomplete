# jscomplete

A step-to-step guide for setting up a pure React.js application by focusing on React itself.

## Dependencies

[Node.js](https://nodejs.org/en/) > 0.8

[React.js](https://reactjs.org/) > 15.0

[Yarn](https://yarnpkg.com/): package manager for Javascript

[Babel](https://babeljs.io/)/[Webpack](https://webpack.js.org/): to configure a full-stack Javascript environment from scratch without using any templates or generators

[Express](https://expressjs.com/):server-side rendering of assets and to host the API

[PM2](https://pm2.keymetrics.io/): process manager to run the node process both in development and production

[Jest](https://jestjs.io/): Javascript testing framework

[ESlint](https://eslint.org/)

## Setup

### Folder hierarchy

`$ mkdir advanced-react`

`$ cd advanced-react`

`$ mkdir lib`

`$ mkdir public`

`$ touch lib/server.js`

### Yarn

`$ yarn init`
```
# ===> yarn init v1.22.10
warning ../package.json: No license field
question name (advanced-react):
question version (1.0.0):
question description: Advanced React
question entry point (index.js): lib/server.js
question repository url: jscomplete/advanced-react
question author: Rafia Qutab
question license (MIT):
question private: no
success Saved package.json
✨  Done in 42.88s.
````

### ESLint

ESLint is valuable to detect failures on save vs. discovering later in server logs or browser console. It will save you a lot of time.

`$ yarn config set ignore-engines true`

`$ yarn add --dev eslint`

You can setup eslint via: `yarn eslint -- --init` however we need a style guide that understands a modern javascript syntax such as class properties which is why we will use the recommended settings with the Babel `eslint` parser + additional customization.

`$ touch .eslintrc.js` # copy/paste from `.eslintrc.js` found in this repo.

`$ yarn add --dev eslint-plugin-react babel-eslint`

### Express

Minimalist web framework for Node.js.

Start Express server web application by installing express and ejs, the two production dependencies:

`$ yarn add express ejs` # ejs for minimal templating on server side

You will need to configure Express to use ejs as its template language in the `server.js` file.

### PM2

PM2 is a daemon process manager that will allow us to render a cluster rather than a single node in production.

`$ yarn add pm2`
