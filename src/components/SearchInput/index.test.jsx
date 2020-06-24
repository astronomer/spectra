import React from 'react';
import { shallow } from 'enzyme';

import SearchInput from '.';

describe('SearchInput', () => {
  test('default', () => {
    const wrapper = shallow(<SearchInput name="search" />);
    expect(wrapper).toExist();
  });

  test('handles disabled', () => {
    const wrapper = shallow(<SearchInput name="search" isDisabled />);
    expect(wrapper.find('FiSearch').hasClass('disabled')).toBeTruthy();
  });
});
