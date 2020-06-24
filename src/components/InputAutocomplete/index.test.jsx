import React from 'react';
import { shallow } from 'enzyme';

import InputAutocomplete from '.';

describe('InputAutocomplete', () => {
  const requiredProps = {
    name: 'test',
    onChange: jest.fn(),
  };

  test('default', () => {
    const wrapper = shallow(<InputAutocomplete {...requiredProps} />);
    expect(wrapper).toExist();
  });
});
