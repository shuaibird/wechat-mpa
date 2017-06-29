# Webpack Multipage wechat project

## quick start
```sh
$ npm install
$ npm start
```

## npm scripts
```sh
# start the webpack dev server
$ npm start

# build the production release
$ npm run build

# js linting check, as the eslint-loader has already been used, this script is mostly used for the webpack config files
$ npm run lint:js

# fix potentially fixable script
$ npm run fix:js

# scss linting
$ npm run lint:scss
```


## structure

* **build**: The webpack loaders & plugins are encapsulated as separate standalone modules that are divided via their functionality. The modules are configured & composed at the `webpack.config.js` file for both the `development` and `production` environment. Feel free to modify / add any features. This great convenience comes out of this incredible webpack plugin: [webpack-merge](https://www.npmjs.com/package/webpack-merge).

* **src/images**: Normally the images are placed at the same folder of the page that would include them. This folder is used for those included in several pages.

* **src/pages**: There're modules, which include related pages. Currently this project hasn't adopted any mv* framework. So I wrote a simple `render` function for inserting the generated markup into the `DOM`. The `dynamic import` feature (a.k.a. `lazy loading`) is supported. I also wrote a wechat authentication wrapper function that takes a callback as its param and could be integrated seamlessly with the lazy loading feature.

* **src/scss**: sass variables, mixins, functions, etc. DONT include stylesheets for any specific selectors, even the global one to prevent it being included more than oncee. Use the placeholder selector for `@extend` instead. Read more about the [placeholder selector](http://thesassway.com/intermediate/understanding-placeholder-selectors) here.

* **src/templates**: The templates for the `HtmlWepackPlugin` go inside here. Like the `images` folder, include only the commonly used ones here.

* **src/utils**: Helper functions.

* **src/vendors**: The scripts inside would be pulled out from the code into a separate `vendor` script, which would be included in every generated html page. Config the webpack when a script need to including as a part of the `vendor`.

## others
* Install the [EditorConfig](http://editorconfig.org/) plugin for consistent indentation throughout the whole project.
* Completely unnecessary to vendor prefix the css manually as it would be done by the `autoprefixer` plugin. Modify the `.browserslistrc` file for targeting different client browsers.
