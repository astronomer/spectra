import '../src/styles/global.css';

import { addParameters } from '@storybook/react';
import { addons } from '@storybook/addons';

import astroTheme from './astroTheme';

addParameters({
  options: {
    theme: astroTheme
  }
});
