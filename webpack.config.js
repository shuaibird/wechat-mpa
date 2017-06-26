const path = require('path')
const merge = require('webpack-merge')
const build = require('./build')

const PATHS = {
  src: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist'),
}

const commonConfig = merge([
  {
    output: {
      path: PATHS.dist,
      filename: '[name].[hash].js',
    },
  },
  build.lintJs({ include: PATHS.src }),
  build.lintScss({ include: PATHS.src }),
  build.loadJs({ include: PATHS.src }),
])

const developmentConfig = merge([
  build.devServer({
    host: process.env.HOST,
    port: process.env.PORT,
  }),
  build.loadScss({ include: PATHS.src }),
])

const productionConfig = merge([
  build.cleanDir({
    path: PATHS.dist,
    root: __dirname,
  }),
  build.minifyCss(),
  build.extractScss({
    include: PATHS.src,
    use: [
      'css-loader',
      build.autoprefix(),
      'sass-loader',
    ],
  }),
  build.minifyJs(),
])

module.exports = (env) => {
  const config = env === 'production' ? productionConfig : developmentConfig
  const pages = [
    build.page({
      entry: { auth: path.resolve(PATHS.src, 'pages/auth') },
      title: '绑定微信',
      filename: 'auth.html',
    }),
  ]
  return pages.map(page => merge(commonConfig, config, page))
}
