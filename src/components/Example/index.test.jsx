import React from 'react';
import renderer from 'react-test-renderer';

import Example from '.';

test('Example exists', () => {
  const component = renderer.create(
    <Example />,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
