import React from 'react';
import { shallow } from 'enzyme';

import Input from '.';

describe('Input', () => {
  test('default', () => {
    const wrapper = shallow(<Input name="test" />);
    expect(wrapper).toExist();
  });

  test('input style', () => {
    const wrapper = shallow(<Input name="test" inputStyle="light" />);
    expect(wrapper.hasClass('light')).toBeTruthy();
  });
});
