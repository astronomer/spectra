import React from 'react';
import { shallow } from 'enzyme';
import casual from 'casual';

import InfoTooltip from '.';

describe('InfoTooltip', () => {
  const { sentence } = casual;

  test('default', () => {
    const wrapper = shallow(<InfoTooltip content={sentence} />);
    expect(wrapper).toExist();
  });
});
