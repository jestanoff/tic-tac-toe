module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    'cypress/globals': true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detected',
    },
  },
  plugins: ['@typescript-eslint', 'chai-friendly', 'cypress'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:chai-friendly/recommended',
    'plugin:cypress/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
};
