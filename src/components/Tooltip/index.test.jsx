import React from 'react';
import { shallow } from 'enzyme';

import Tooltip from '.';

describe('Tooltip', () => {
  test('default', () => {
    const wrapper = shallow(<Tooltip />);
    expect(wrapper).toExist();
  });
});
