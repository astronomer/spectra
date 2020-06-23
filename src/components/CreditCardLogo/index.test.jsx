import React from 'react';
import { shallow } from 'enzyme';

import CreditCardLogo from '.';

describe('CreditCardLogo', () => {
  test('default', () => {
    const wrapper = shallow(<CreditCardLogo />);
    expect(wrapper.find('svg')).toExist();
  });

  test('brand', () => {
    const wrapper = shallow(<CreditCardLogo brand="american_express" />);
    expect(wrapper.find('svg')).toExist();
  });
});
