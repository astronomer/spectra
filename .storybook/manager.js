import '../src/styles/root.css';

import { addParameters } from '@storybook/react';
import { addons } from '@storybook/addons';

import globalTheme from './globalTheme';

addParameters({
  options: {
    theme: globalTheme
  }
});
