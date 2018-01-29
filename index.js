module.exports = {
  extends: ['eslint-config-airbnb-base', 'plugin:prettier/recommended'].map(require.resolve),
  rules: {
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        semi: false,
        singleQuote: true,
        printWidth: 100,
      },
    ],
  },
  env: {
    es6: true,
  },
}
