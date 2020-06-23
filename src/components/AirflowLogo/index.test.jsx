import React from 'react';
import { shallow } from 'enzyme';

import AirflowLogo from '.';

describe('AirflowLogo', () => {
  test('svg render', () => {
    const wrapper = shallow(<AirflowLogo />);
    expect(wrapper.find('svg')).toExist();
  });
});
