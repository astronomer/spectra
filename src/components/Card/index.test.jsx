import React from 'react';
import { shallow } from 'enzyme';
import casual from 'casual';

import Card from '.';

describe('Card', () => {
  const { word, sentence } = casual;

  test('default', () => {
    const wrapper = shallow(<Card><p>{sentence}</p></Card>);
    expect(wrapper).toHaveText(sentence);
  });

  test('with header', () => {
    const wrapper = shallow(<Card header={word}><p>{sentence}</p></Card>);
    expect(wrapper.find('div.cardHeader')).toBeTruthy();
    expect(wrapper.find('Heading')).toBeTruthy();
  });

  test('with footer', () => {
    const wrapper = shallow(<Card footer={word}><p>{sentence}</p></Card>);
    expect(wrapper.find('div.cardFooter')).toBeTruthy();
  });

  test('noPadding', () => {
    const wrapper = shallow(<Card noPadding><p>{sentence}</p></Card>);
    expect(wrapper.find('div.cardBody').hasClass('noPadding')).toBeTruthy();
  });
});
