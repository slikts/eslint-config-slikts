module.exports = {
  extends: [
    'eslint-config-airbnb',
  ].map(require.resolve),
  rules: {
    "semi": ["error", "never"],
    "comma-dangle": ["error", "always-multiline"]
  }
}
