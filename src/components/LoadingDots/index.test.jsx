import React from 'react';
import { shallow } from 'enzyme';

import LoadingDots from '.';

describe('LoadingDots', () => {
  test('default', () => {
    const wrapper = shallow(<LoadingDots />);
    expect(wrapper).toExist();
    expect(wrapper.hasClass('dots')).toBeTruthy();
  });
});
