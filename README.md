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

# js linting check, as the eslint-loader has already been used, this command is mostly used for the webpack config files
$ npm run lint:js

# fix potentially fixable script
$ npm run fix:js

# scss linting
$ npm run lint:scss
```


## structure

* **build**: The webpack loaders & plugins are encapsulated as separate standalone modules that are divided via their functionality. The modules are configured & composed at the `webpack.config.js` file for both the `development` and `production` environment. Feel free to modify and add any features. This great convenience all thanks to the incredible plugin [webpack-merge](https://www.npmjs.com/package/webpack-merge).

* **src/images**: Normally the images are placed at the same folder of the page that would include them. This folder is used for those that would be included in different pages.

* **src/pages**: There're modules, which include several pages that are related to each other. Currently this project hasn't adopted any mv* framework. So I wrote an simple `render` function for inserting the generated markups into the `DOM`. The `dynamic import` feature (a.k.a. `lazy loading`) is supported; I also wrote an wechat authentication wrapper function, which takes an callback as its param and could be combined with the lazy loading feature.

* **src/scss**: sass variables, mixins, functions, etc. DONT include any rules for selectors except for the placeholder ones. Read more about the [placeholder selector](http://thesassway.com/intermediate/understanding-placeholder-selectors) here.

* **src/templates**: The templates for the `HtmlWepackPlugin` go inside here. Just as the `images` folder, use it for repeatedly used ones.

* **src/utils**: Helpers functions.

* **src/vendors**: The scripts inside would be pull out from the code into a separate `vendor` script, which would be included in every generated html page. Config the webpack when new file is added.

### others
* Install the [EditorConfig](http://editorconfig.org/) plugin for consistent indentation through the whole project
* Completely unnecessary to vendor prefix the css manually as it would be done by the `autoprefixer` plugin. Modify the `.browserslistrc` file when it's needed.
