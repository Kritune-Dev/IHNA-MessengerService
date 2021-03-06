// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  env: {
    node: true,
    es2020: true,
    'jest/globals': true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['jest'],
  rules: {
    'quotes': ['error', 'single'],
    'indent': ['error', 2],
    'no-multi-spaces': ['error'],
    'semi': ['error', 'never'],
    'no-unused-vars': 'warn',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error'
  },
}
