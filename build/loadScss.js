module.exports = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        include,
        exclude,
        test: /.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
})
