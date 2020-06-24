import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: '#027ec4',
  colorSecondary: '#049cf1',

  // UI
  appBg: '#e1dde7',
  appContentBg: '#fffefd',
  appBorderColor: '#f5f5f5',
  appBorderRadius: 10,

  // Typography
  fontBase: "'GoodSans', 'SF Pro', 'Open Sans', sans",
  fontCode: "SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo', monospace",

  // Text colors
  textColor: '#302c43',
  textInverseColor: '#fffefd',

  // Toolbar default and active colors
  barTextColor: '#51504f',
  barSelectedColor: '#302c43',
  barBg: '#fffefd',

  // Form colors
  inputBg: '#f5f5f5',
  inputBorder: '#e2e0df',
  inputTextColor: '#302c43',
  inputBorderRadius: 6,

  // Brand
  brandTitle: 'Spectra',
});
