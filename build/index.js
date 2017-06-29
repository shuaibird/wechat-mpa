// Common onfigs
exports.page = require('./src/page')
exports.loadJs = require('./src/loadJs')
exports.loadScss = require('./src/loadScss')
exports.lintJs = require('./src/lintJs')
exports.lintScss = require('./src/lintScss')
exports.loadImg = require('./src/loadImg')
exports.defineConst = require('./src/defineConst')
exports.resolve = require('./src/resolve')
exports.generateSourceMaps = require('./src/generateSourceMaps')

// Development configs
exports.devServer = require('./src/devServer')

// Production configs
exports.cleanDir = require('./src/cleanDir')
exports.autoprefix = require('./src/autoprefix')
exports.extractScss = require('./src/extractScss')
exports.minifyCss = require('./src/minifyCss')
exports.minifyJs = require('./src/minifyJs')
