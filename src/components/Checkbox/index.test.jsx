import React from 'react';
import { shallow } from 'enzyme';
import casual from 'casual';

import Checkbox from '.';

describe('Checkbox', () => {
  const { word } = casual;

  const requiredProps = {
    name: 'test',
    label: word,
  };

  test('default', () => {
    const wrapper = shallow(<Checkbox {...requiredProps} />);
    expect(wrapper).toContainExactlyOneMatchingElement('input');
    expect(wrapper).toContainExactlyOneMatchingElement('span');
    expect(wrapper).toHaveText(word);
    expect(wrapper.find('input').props().disabled).toBeFalsy();
  });

  test('handles input change', () => {
    const handleChange = jest.fn();
    const wrapper = shallow(<Checkbox {...requiredProps} onChange={handleChange} />);
    const input = wrapper.find('input');
    input.simulate('change', { target: { checked: true } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('is disabled', () => {
    const wrapper = shallow(<Checkbox {...requiredProps} isDisabled />);
    expect(wrapper.find('input').props().disabled).toBeTruthy();
  });

  test('handles checked', () => {
    const wrapper = shallow(<Checkbox {...requiredProps} isChecked />);
    const input = wrapper.find('input');
    expect(input.hasClass('checked')).toBeTruthy();
  });
});
