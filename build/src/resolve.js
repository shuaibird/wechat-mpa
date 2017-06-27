const path = require('path')

module.exports = () => ({
  resolve: {
    extensions: ['.js', '.json', '.scss'],
    alias: {
      images: path.resolve(__dirname, '../../src/images'),
      scss: path.resolve(__dirname, '../../src/scss'),
      utils: path.resolve(__dirname, '../../src/utils'),
      vendors: path.resolve(__dirname, '../../src/vendors'),
    },
  },
})
