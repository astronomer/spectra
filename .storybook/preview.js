import '../src/styles/global.css';

import { addParameters, addDecorator } from '@storybook/react';
import { addons } from '@storybook/addons';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import storySorter from 'story-sorter';

import globalTheme from './globalTheme';

addParameters({
  options: {
    theme: globalTheme,
    storySort: storySorter(['design', 'components']),
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});
