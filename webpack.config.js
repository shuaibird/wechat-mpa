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
      filename: '[name].[chunkhash].js',
    },
  },
  build.resolve(),
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
  build.loadImg(),
  build.defineConst({
    'HOST': '"http://dev.bluewizard.cloudist.cc"',
  }),
])

const productionConfig = merge([
  {
    entry: {
      vendor: ['./src/vendors/ajax.js'],
    },
  },
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
  build.loadImg({
    options: {
      limit: 15000,
      name: '[name].[hash].[ext]',
    },
  }),
  build.defineConst({
    'HOST': '""',
  }),
  build.extractBundles([
    {
      name: 'vendor',
      minChunks: ({ resource }) => (
        resource &&
        resource.indexOf('node_modules') >= 0 &&
        resource.match(/\.js$/)
      ),
    },
  ]),
])

module.exports = (env) => {
  const config = env === 'production' ? productionConfig : developmentConfig
  const pages = [
    build.page({
      entry: { auth: path.resolve(PATHS.src, 'pages/auth') },
      title: '绑定微信',
      filename: 'auth.html',
      template: 'src/templates/default.html',
    }),
  ]
  return pages.map(page => merge(commonConfig, config, page))
}
