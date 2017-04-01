module.exports = {
  "parser": "babel-eslint",
  "rules": {
    "strict": 0
  },
  "env": {
    "browser": true,
    "es6": true,
    "jquery": true
  },
  "extends": "airbnb",
  "parserOptions": {
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "max-len": ["error", 100, 4, {"ignoreComments": true} ],
    "indent": ["error", 4],
    "linebreak-style": ["warn", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "no-nested-ternary": ["off"],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-indent": ["warn", 4],
    "react/jsx-curly-spacing": ["error", "always"],
    "jsx-a11y/no-static-element-interactions" : ["off"],
    'jsx-quotes': ["error", "prefer-single"],
    /* Advanced Rules*/
    "no-unused-expressions": "warn",
    "no-useless-concat": "warn",
    "block-scoped-var": "error",
    "consistent-return": "error"
  }
};
