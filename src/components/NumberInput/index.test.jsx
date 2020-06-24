import React from 'react';
import { shallow } from 'enzyme';

import NumberInput from '.';

describe('NumberInput', () => {
  const requiredProps = {
    name: 'test',
    onChange: jest.fn(),
  };

  test('default', () => {
    const wrapper = shallow(<NumberInput {...requiredProps} />);
    expect(wrapper).toExist();
  });

  test('handles change', () => {
    const wrapper = shallow(<NumberInput {...requiredProps} />);
    wrapper.simulate('change', { target: { value: 1 } });
    expect(requiredProps.onChange).toBeCalled();
  });

  describe('handles clamp on blur', () => {
    test('max', () => {
      const wrapper = shallow(
        <NumberInput {...requiredProps} clampValueOnBlur value={11} max={10} />,
      );
      const input = wrapper.find('input');
      input.simulate('blur');
      expect(wrapper).toExist();
    });

    test('min', () => {
      const wrapper = shallow(
        <NumberInput {...requiredProps} clampValueOnBlur value={9} min={10} />,
      );
      const input = wrapper.find('input');
      input.simulate('blur');
      expect(wrapper).toExist();
    });
  });

  test('handles inputStyle', () => {
    const wrapper = shallow(<NumberInput {...requiredProps} inputStyle="light" />);
    const input = wrapper.find('input');
    expect(input.hasClass('light')).toBeTruthy();
  });
});
