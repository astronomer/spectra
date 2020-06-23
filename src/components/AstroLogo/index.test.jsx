import 'root/tests-setup';

import React from 'react';
import { shallow } from 'enzyme';

import AstroLogo from '.';

describe('AstroLogo', () => {
  test('default (light) render', () => {
    const wrapper = shallow(<AstroLogo />);
    expect(wrapper.find('svg')).toExist();
  });

  test('light render', () => {
    const wrapper = shallow(<AstroLogo dark />);
    expect(wrapper.find('svg')).toExist();
  });
});
