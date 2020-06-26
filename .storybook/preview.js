import '../src/styles/global.css';

import { addParameters, addDecorator } from '@storybook/react';
import { addons } from '@storybook/addons';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import storySorter from 'story-sorter';

import astroTheme from './astroTheme';

addParameters({
  options: {
    theme: astroTheme,
    storySort: storySorter(['design', 'components', 'assets']),
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});
