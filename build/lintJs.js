module.exports = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        include,
        exclude,
        test: /.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
      },
    ],
  },
})
