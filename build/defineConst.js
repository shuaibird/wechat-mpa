const webpack = require('webpack')

module.exports = (options = {}) => {
  const consts = Object
    .keys(options)
    .reduce((acc, cur) => Object.assign({}, acc, { [`process.${cur}`]: options[cur] }), {})
  return {
    plugins: [
      new webpack.DefinePlugin(consts),
    ],
  }
}
