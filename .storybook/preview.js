import '../src/styles/root.css';

import { addParameters } from '@storybook/react';
import { addons } from '@storybook/addons';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

import theme from './theme';

addParameters({
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

addons.setConfig({
  theme,
});
