const BabiliPlugin = require('babili-webpack-plugin')

module.exports = () => ({
  plugins: [
    new BabiliPlugin(),
  ],
})
