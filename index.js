module.exports = {
  extends: [
    'eslint-config-airbnb-base',
  ].map(require.resolve),
  rules: {
    "semi": ["error", "never"],
    "comma-dangle": ["error", "always-multiline"],
    "env": {
      "es6": true,
    }
  }
}
