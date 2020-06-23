import React from 'react';
import { shallow } from 'enzyme';
import casual from 'casual';

import Badge from '.';

describe('Badge', () => {
  const content = casual.sentence;

  test('default', () => {
    const wrapper = shallow(<Badge text={content} />);
    expect(wrapper).toContainExactlyOneMatchingElement('span');
    expect(wrapper.find('span')).toHaveText(content);
  });

  test('error', () => {
    const wrapper = shallow(<Badge text={content} status="error" />);
    expect(wrapper).toContainExactlyOneMatchingElement('span');
    expect(wrapper.find('span')).toHaveClassName('error');
    expect(wrapper.find('span')).toHaveText(content);
  });

  test('warning', () => {
    const wrapper = shallow(<Badge text={content} status="warning" />);
    expect(wrapper).toContainExactlyOneMatchingElement('span');
    expect(wrapper.find('span')).toHaveClassName('warning');
    expect(wrapper.find('span')).toHaveText(content);
  });

  test('info', () => {
    const wrapper = shallow(<Badge text={content} status="info" />);
    expect(wrapper).toContainExactlyOneMatchingElement('span');
    expect(wrapper.find('span')).toHaveClassName('info');
    expect(wrapper.find('span')).toHaveText(content);
  });

  test('success', () => {
    const wrapper = shallow(<Badge text={content} status="success" />);
    expect(wrapper).toContainExactlyOneMatchingElement('span');
    expect(wrapper.find('span')).toHaveClassName('success');
    expect(wrapper.find('span')).toHaveText(content);
  });
});
