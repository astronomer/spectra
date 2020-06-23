import React from 'react';
import { shallow } from 'enzyme';

import CeleryLogo from '.';

describe('CeleryLogo', () => {
  test('default', () => {
    const wrapper = shallow(<CeleryLogo />);
    expect(wrapper.find('svg')).toExist();
  });
});
