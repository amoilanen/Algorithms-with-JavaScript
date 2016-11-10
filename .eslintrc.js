module.exports = {
  extends: 'eslint:recommended',
  env: {
    es6: true,
    jasmine: true
  },
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    indent: [2, 2],
    quotes: [2, 'single']
  }
}