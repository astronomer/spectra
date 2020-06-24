import React from 'react';
import { shallow } from 'enzyme';

import Switch from '.';

describe('Switch', () => {
  const requiredProps = {
    name: 'test',
    label: 'Test',
    onChange: jest.fn(),
    isChecked: false,
  };

  test('default', () => {
    const wrapper = shallow(<Switch {...requiredProps} />);
    expect(wrapper).toExist();
  });

  test('handles change', () => {
    const wrapper = shallow(<Switch {...requiredProps} />);
    const input = wrapper.find('input');
    expect(input.hasClass('unchecked')).toBeTruthy();
    input.simulate('change', { target: { value: true } });
    expect(requiredProps.onChange).toBeCalled();
  });

  test('handles checked', () => {
    const wrapper = shallow(<Switch {...requiredProps} isChecked />);
    const input = wrapper.find('input');
    expect(input.hasClass('checked')).toBeTruthy();
  });

  test('handles label click', () => {
    const wrapper = shallow(<Switch {...requiredProps} />);
    wrapper.find('label').props().onClick();
    expect(requiredProps.onChange).toBeCalled();
  });

  test('handles input disabled', () => {
    const wrapper = shallow(<Switch {...requiredProps} isDisabled />);
    const input = wrapper.find('input');
    const label = wrapper.find('label');
    expect(input.props().disabled).toBeTruthy();
    expect(label.hasClass('disabled')).toBeTruthy();
  });
});
