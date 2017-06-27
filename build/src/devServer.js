const webpack = require('webpack')

module.exports = ({ host, port } = {}) => ({
  devServer: {
    compress: true,
    disableHostCheck: true,
    historyApiFallback: true,
    stats: 'errors-only',
    host,
    port,
    overlay: {
      errors: true,
      warning: true,
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
})
