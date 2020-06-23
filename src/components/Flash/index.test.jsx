import React from 'react';
import { shallow } from 'enzyme';
import casual from 'casual';

import Flash, { icons } from '.';

describe('Flash', () => {
  const { sentence } = casual;

  test('default (warning)', () => {
    const wrapper = shallow(<Flash>{sentence}</Flash>);
    expect(wrapper.find(icons.warning)).toBeTruthy();
  });

  test('is isDismissable', () => {
    const wrapper = shallow(<Flash isDismissable>{sentence}</Flash>);
    expect(wrapper.find('button')).toBeTruthy();
  });

  // TODO: validate test on what happens after click
  test('dismiss key', () => {
    const wrapper = shallow(<Flash dismissKey="123" isDismissable>{sentence}</Flash>);
    wrapper.find('button').simulate('click');
  });
});
