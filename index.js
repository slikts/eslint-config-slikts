const { resolve } = require

module.exports = {
  extends: ['eslint-config-airbnb-base', 'eslint-config-prettier'].map(resolve),
  plugins: ['prettier'],
  rules: {
    'func-names': [1, 'as-needed'],
    'quotes': [1, 'backtick'],
    'prettier/prettier': [
      'error',
      require('.prettierrc.json'),
    ],
  },
  env: {
    es6: true,
  },
}
