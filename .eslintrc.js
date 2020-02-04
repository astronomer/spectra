module.exports = {
  root: true,
  extends: 'eslint-config-airbnb',
  parser: 'babel-eslint',
  env: {
    'browser': true,
    'node': true,
    'es6': true,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['root', './'],
          ['src', './src'],
        ],
        extensions: ['.js', '.jsx', '.json']
      }
    }
  },
  rules: {
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "arrow-parens": "off",
    "prefer-object-spread": "off",
    "no-mixed-operators": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-curly-newline": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "react/static-property-placement": "off",
    "react/state-in-constructor": "off"
  }
};
