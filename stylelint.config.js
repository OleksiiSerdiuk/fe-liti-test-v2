module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'function-name-case': ['lower', { ignoreFunctions: ['findColorInvert'] }],
    'at-rule-no-unknown': null,
  },
  ignoreFiles: ['assets/lp4/**/*'],
}
