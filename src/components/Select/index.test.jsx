import React from 'react';
import { shallow } from 'enzyme';

import Select from '.';

describe('Select', () => {
  test('default', () => {
    const wrapper = shallow(<Select><option>child</option></Select>);
    expect(wrapper).toExist();
  });

  test('handles placeholder', () => {
    const wrapper = shallow(<Select placeholder="This is a placeholder"><option>child</option></Select>);
    expect(wrapper.find('option').first()).toHaveText('This is a placeholder');
  });
});
