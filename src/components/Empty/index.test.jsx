import React from 'react';
import { shallow } from 'enzyme';
import casual from 'casual';

import Empty from '.';

describe('Empty', () => {
  const { word, sentence } = casual;

  const requiredProps = {
    heading: word,
    description: <p>{sentence}</p>,
  };

  test('default', () => {
    const wrapper = shallow(<Empty {...requiredProps} />);
    expect(wrapper.find('p')).toHaveText(sentence);
  });

  test('actions', () => {
    const wrapper = shallow(<Empty {...requiredProps} actions={<a href="/">Do This</a>} />);
    expect(wrapper.find('a')).toHaveText('Do This');
  });

  test('footer', () => {
    const wrapper = shallow(<Empty {...requiredProps} footer={<div>A cool footer</div>} />);
    expect(wrapper.find('div.footer')).toHaveText('A cool footer');
  });
});
