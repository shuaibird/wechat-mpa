const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = ({
  entry,
  filename,
  title = '',
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
    }),
  ],
})
