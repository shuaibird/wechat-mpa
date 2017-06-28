const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')

module.exports = ({
  entry,
  filename,
  title = '',
  template,
  inlineCss = false,
} = {}) => {
  const config = {
    filename,
    title,
    minify: {
      collapseBooleanAttributes: true,
      collapseInlineTagWhitespace: true,
      collapseWhitespace: true,
    },
    template,
  }
  if (inlineCss) config.inlineSource = '.css$'
  const plugins = [ new HtmlWebpackPlugin(config) ]
  if (inlineCss) plugins.push(new HtmlWebpackInlineSourcePlugin())
  return { entry, plugins }
}
