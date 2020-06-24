import React from 'react';
import { shallow } from 'enzyme';

import RadioButtonGroup from '.';

describe('RadioButtonGroup', () => {
  const requiredProps = {
    name: 'test',
    options: [
      { value: 'foo', label: 'Foo' },
    ],
    active: 'foo',
    onChange: jest.fn(),
  };

  test('default', () => {
    const wrapper = shallow(<RadioButtonGroup {...requiredProps} />);
    expect(wrapper).toExist();
  });

  test('handles disabled', () => {
    const wrapper = shallow(<RadioButtonGroup {...requiredProps} isDisabled />);
    expect(wrapper.find('input').props().disabled).toBeTruthy();
  });

  test('handles change', () => {
    const wrapper = shallow(<RadioButtonGroup {...requiredProps} />);
    wrapper.find('input').simulate('change');
    expect(requiredProps.onChange).toBeCalled();
  });
});
