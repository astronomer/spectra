/* eslint-disable import/no-extraneous-dependencies, global-require */

const { resolve } = require('path');
const resolver = require('postcss-import-alias-resolver');

module.exports = {
  plugins: [
    require('postcss-import')({
      path: [resolve(__dirname, 'src', 'styles')],
      plugins: [
        require('stylelint'),
      ],
      resolve: resolver({
        alias: {
          styles: resolve(__dirname, 'src/styles'),
        },
        extensions: ['.css'],
        modules: ['src/styles', 'node_modules'],
        dontPrefix: true,
        mergeAlias: 'extend',
        mergeModules: 'extend',
        mergeExtensions: 'replace',
      }),
    }),
    require('postcss-advanced-variables'),
    require('postcss-color-function')({ preserveCustomProps: true }),
    require('postcss-cssnext')({ warnForDuplicates: false }),
    require('postcss-for'),
    require('postcss-custom-media'),
    require('postcss-reporter')({ clearReportedMessages: true }),
    require('postcss-math'),
  ],
};
