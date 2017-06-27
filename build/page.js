const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = ({
  entry,
  filename,
  title = '',
  template,
} = {}) => ({
  entry,
  plugins: [
    new HtmlWebpackPlugin({
      filename,
      title,
      minify: {
        collapseBooleanAttributes: true,
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
      },
      template,
    }),
  ],
})
