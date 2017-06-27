module.exports = ({ host, port } = {}) => ({
  devServer: {
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
})
