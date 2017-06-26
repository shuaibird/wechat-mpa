module.exports = ({ include, exclude }) => ({
  module: {
    rules: [
      {
        test: /\.scss$/,
        include,
        exclude,
        enforce: 'pre',
        loader: 'postcss-loader',
        options: {
          plugins: () => ([
            require('stylelint')(),
          ]),
        },
      },
    ],
  },
})
