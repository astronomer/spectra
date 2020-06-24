import React from 'react';
import { shallow } from 'enzyme';

import KubesLogo from '.';

describe('KubesLogo', () => {
  test('svg render', () => {
    const wrapper = shallow(<KubesLogo />);
    expect(wrapper.find('svg')).toExist();
  });
});
