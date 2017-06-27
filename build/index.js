// Common onfigs
exports.page = require('./page')
exports.loadJs = require('./loadJs')
exports.loadScss = require('./loadScss')
exports.lintJs = require('./lintJs')
exports.lintScss = require('./lintScss')
exports.loadImg = require('./loadImg')

// Development configs
exports.devServer = require('./devServer')

// Production configs
exports.cleanDir = require('./cleanDir')
exports.autoprefix = require('./autoprefix')
exports.extractScss = require('./extractScss')
exports.minifyCss = require('./minifyCss')
exports.minifyJs = require('./minifyJs')
