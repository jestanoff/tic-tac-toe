module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    jest: true,
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
  plugins: [
    '@typescript-eslint',
    'chai-friendly',
    'cypress',
    'jest',
    'react-hooks',
    'react-perf',
    'react',
    'testing-library',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:chai-friendly/recommended',
    'plugin:cypress/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react-perf/recommended',
    'plugin:react/recommended',
    'prettier/@typescript-eslint',
  ],
};
