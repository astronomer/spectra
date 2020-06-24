import React from 'react';
import { shallow } from 'enzyme';

import TextArea from '.';

describe('TextArea', () => {
  test('default', () => {
    const wrapper = shallow(<TextArea name="test" />);
    expect(wrapper).toExist();
  });
});
