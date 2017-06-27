const path = require('path')

module.exports = () => ({
  resolve: {
    alias: {
      scss: path.resolve(__dirname, '../../src/scss'),
      utils: path.resolve(__dirname, '../../src/utils'),
      vendors: path.resolve(__dirname, '../../src/vendors'),
    },
  },
})
