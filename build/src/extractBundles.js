const webpack = require('webpack')

module.exports = (bundles) => ({
  plugins: bundles.map(bundle => new webpack.optimize.CommonsChunkPlugin(bundle)),
})
