import React from 'react';
import { shallow } from 'enzyme';
import casual from 'casual';

import Heading from '.';

describe('Heading', () => {
  const { word } = casual;

  test('default', () => {
    const wrapper = shallow(<Heading as="h1">{word}</Heading>);
    expect(wrapper).toExist();
  });

  test('style as', () => {
    const wrapper = shallow(<Heading as="h1" styleAs="h2">{word}</Heading>);
    expect(wrapper.find('h1').hasClass('h2')).toBeTruthy();
  });
});
