import React from 'react';
import { shallow } from 'enzyme';
import casual from 'casual';

import IconButton from '.';

describe('IconButton', () => {
  const { word } = casual;

  const iconFunc = jest.fn();

  const requiredProps = {
    ariaLabel: word,
    icon: iconFunc,
  };

  test('default', () => {
    const wrapper = shallow(<IconButton {...requiredProps} />);
    // expect(wrapper).toHaveText(iconFunc);
    expect(wrapper.find(iconFunc)).toBeTruthy();
    expect(wrapper.prop('aria-label')).toEqual(word);
  });

  test('type[submit]', () => {
    const wrapper = shallow(<IconButton {...requiredProps} type="submit" />);
    expect(wrapper.prop('type')).toEqual('submit');
  });

  test('displayBlock', () => {
    const wrapper = shallow(<IconButton {...requiredProps} displayBlock />);
    expect(wrapper.hasClass('displayAsBlockElement')).toBeTruthy();
  });
});
