import React from 'react';
import { shallow } from 'enzyme';
import casual from 'casual';

import Banner from '.';

describe('Banner', () => {
  const content = casual.sentence;

  test('warning (default)', () => {
    const wrapper = shallow(<Banner><p>{content}</p></Banner>);
    expect(wrapper).toHaveClassName('warning');
    expect(wrapper).toContainExactlyOneMatchingElement('p');
    expect(wrapper.find('p')).toHaveText(content);
  });

  test('error', () => {
    const wrapper = shallow(<Banner type="error"><p>{content}</p></Banner>);
    expect(wrapper).toHaveClassName('error');
    expect(wrapper).toContainExactlyOneMatchingElement('p');
    expect(wrapper.find('p')).toHaveText(content);
  });

  test('info', () => {
    const wrapper = shallow(<Banner type="info"><p>{content}</p></Banner>);
    expect(wrapper).toHaveClassName('info');
    expect(wrapper).toContainExactlyOneMatchingElement('p');
    expect(wrapper.find('p')).toHaveText(content);
  });

  test('success', () => {
    const wrapper = shallow(<Banner type="success"><p>{content}</p></Banner>);
    expect(wrapper).toHaveClassName('success');
    expect(wrapper).toContainExactlyOneMatchingElement('p');
    expect(wrapper.find('p')).toHaveText(content);
  });
});
