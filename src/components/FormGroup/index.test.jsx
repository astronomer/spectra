import React from 'react';
import { shallow } from 'enzyme';
import casual from 'casual';

import FormGroup from '.';

describe('FormGroup', () => {
  const { sentence } = casual;

  test('default', () => {
    const wrapper = shallow(<FormGroup name="test">{sentence}</FormGroup>);
    expect(wrapper).toExist();
  });

  test('input style', () => {
    const wrapper = shallow(<FormGroup name="test" inputStyle="light">{sentence}</FormGroup>);
    expect(wrapper.hasClass('light')).toBeTruthy();
  });

  test('hidden label', () => {
    const wrapper = shallow(<FormGroup name="test" isHiddenLabel>{sentence}</FormGroup>);
    expect(wrapper.find('label').hasClass('visuallyHidden')).toBeTruthy();
  });

  test('helper tooltip', () => {
    const wrapper = shallow(<FormGroup name="test" helperText="This is helpful." helperInTooltip>{sentence}</FormGroup>);
    expect(wrapper.find('InfoTooltip')).toBeTruthy();
  });

  test('helper text', () => {
    const wrapper = shallow(<FormGroup name="test" helperText="This is helpful.">{sentence}</FormGroup>);
    expect(wrapper.find('div.helperText')).toBeTruthy();
  });
});
