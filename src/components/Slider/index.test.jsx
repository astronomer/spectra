import React from 'react';
import { shallow } from 'enzyme';

import Slider from '.';

describe('Slider', () => {
  const requiredProps = {
    name: 'test',
    onChange: jest.fn(),
  };

  test('default', () => {
    const wrapper = shallow(<Slider {...requiredProps} />);
    expect(wrapper).toExist();
  });

  test('handles change', () => {
    const wrapper = shallow(<Slider {...requiredProps} />);
    wrapper.simulate('change', { target: { value: 1 } });
    expect(requiredProps.onChange).toBeCalled();
  });
});
