import '../src/styles/global.css';

import { addParameters } from '@storybook/react';
import { addons } from '@storybook/addons';

import globalTheme from './globalTheme';

addParameters({
  options: {
    theme: globalTheme
  }
});
