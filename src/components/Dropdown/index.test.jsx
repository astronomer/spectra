import React from 'react';
import { shallow } from 'enzyme';

import Dropdown from '.';

describe('Dropdown', () => {
  test('default', () => {
    const wrapper = shallow(<Dropdown isOpen={false}>children</Dropdown>);
    expect(wrapper.hasClass('open')).toEqual(false);
  });

  test('open', () => {
    const wrapper = shallow(<Dropdown isOpen>children</Dropdown>);
    expect(wrapper.hasClass('open')).toEqual(true);
  });
});
