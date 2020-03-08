// https://github.com/berlitz-global/max/blob/master/packages/eslint-config-max-base/index.js
// sans 'eslint:recommended' because it causes issue with PropTypes in *.tsx
module.exports = {
  parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
  extends: [
    'plugin:react/recommended',
    'plugin:prettier/recommended'],
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  parserOptions:  {
    ecmaVersion:  2018,  // Allows for the parsing of yarn modern ECMAScript features
    sourceType:  'module',  // Allows for the use of imports
  },
  rules: {
    strict: 0,
    'react/prop-types': 0,
    'prettier/prettier': 'warn',
    'comma-dangle': ["error", "always-multiline"],
    'react/display-name': 0
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
}


