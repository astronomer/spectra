import React from 'react';
import { shallow } from 'enzyme';

import StatusIndicator from '.';

describe('StatusIndicator', () => {
  test('positive', () => {
    const wrapper = shallow(<StatusIndicator status="positive" />);
    expect(wrapper.find('FiCircle')).toHaveClassName('positive');
  });

  test('handles in flight', () => {
    const wrapper = shallow(<StatusIndicator status="positive" inFlight />);
    expect(wrapper.find('span')).toHaveClassName('inFlight');
    expect(wrapper.find('FiCircle')).toBeTruthy();
  });
});
