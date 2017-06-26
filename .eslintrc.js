module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: 'eslint:recommended',
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  rules: {
    'comma-dangle': [1, 'always-multiline'],
    indent: [1, 2],
    'linebreak-style': [1, 'unix'],
    quotes: [1, 'single'],
    semi: [1, 'never'],
    'no-unused-vars': 1,
    'no-console': 1,
  },
}
