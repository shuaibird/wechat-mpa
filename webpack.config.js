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
  build.resolve(),
  build.lintJs({ include: PATHS.src }),
  build.lintScss({ include: PATHS.src }),
  build.loadJs({ include: PATHS.src }),
])

const developmentConfig = merge([
  {
    output: {
      devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]',
    },
  },
  build.generateSourceMaps({ type: 'cheap-module-eval-source-map' }),
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
      limit: 10000,
      name: '[name].[hash].[ext]',
    },
  }),
  build.defineConst({
    'HOST': '""',
  }),
  build.extractBundles([
    {
      name: 'vendor',
      filename: '[name].js',
      minChunks: ({ resource }) => (
        resource &&
        resource.indexOf('node_modules') >= 0 &&
        resource.match(/\.js$/)
      ),
    },
  ]),
  build.generateSourceMaps({ type: 'source-map' }),
])

module.exports = (env) => {
  const config = (env === 'production') ? productionConfig : developmentConfig
  const inlineCss = (env === 'production')
  const pages = [
    build.page({
      entry: { 'auth-company': path.resolve(PATHS.src, 'pages/auth-company') },
      title: '输入企业号',
      filename: 'auth-company.html',
      template: 'src/pages/auth-company/template.html',
      inlineCss,
    }),
    build.page({
      entry: { 'auth-account': path.resolve(PATHS.src, 'pages/auth-account') },
      title: '绑定个人账号',
      filename: 'auth-account.html',
      template: 'src/pages/auth-account/template.html',
      inlineCss,
    }),
  ]
  return pages.map(page => merge(commonConfig, config, page))
}
