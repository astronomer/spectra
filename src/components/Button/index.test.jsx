import React from 'react';
import { shallow } from 'enzyme';
import casual from 'casual';

import Button, { ButtonIcon } from '.';

describe('Button', () => {
  const { word, url } = casual;

  test('default', () => {
    const wrapper = shallow(<Button label={word} />);
    expect(wrapper).toHaveText(word);
  });

  // test('internal', () => {
  //   const Link = () => (); // TODO: Mock router Link
  //   const wrapper = shallow(<Button label={word} as={Link} to={url} />);
  //   expect(wrapper).toHaveText(word);
  // });

  test('external link', () => {
    const wrapper = shallow(<Button label={word} as="a" href={url} />);
    expect(wrapper).toHaveText(word);
  });

  test('submit', () => {
    const wrapper = shallow(<Button label={word} type="submit" />);
    expect(wrapper).toHaveText(word);
  });

  test('reset', () => {
    const wrapper = shallow(<Button label={word} type="reset" />);
    expect(wrapper).toHaveText(word);
  });

  test('iconLeft', () => {
    const wrapper = shallow(<Button label={word} iconLeft={jest.fn()} />);
    expect(wrapper).toHaveText(`<ButtonIcon />${word}`);
  });

  test('iconRight', () => {
    const wrapper = shallow(<Button label={word} iconRight={jest.fn()} />);
    expect(wrapper).toHaveText(`${word}<ButtonIcon />`);
  });

  test('displayBlock', () => {
    const wrapper = shallow(<Button label={word} displayBlock />);
    expect(wrapper.hasClass('displayAsBlockElement')).toBeTruthy();
  });

  test('inFlight', () => {
    const wrapper = shallow(<Button label={word} inFlight />);
    expect(wrapper.props().disabled).toBeTruthy();
    expect(wrapper.find('span')).toHaveClassName('inFlightText');
    expect(wrapper.find('LoadingDots')).toBeTruthy();
  });
});

describe('ButtonIcon', () => {
  test('left', () => {
    const wrapper = shallow(<ButtonIcon icon={jest.fn()} position="left" />);
    expect(wrapper.props().className).toEqual('left icon');
  });

  test('right', () => {
    const wrapper = shallow(<ButtonIcon icon={jest.fn()} position="right" />);
    expect(wrapper.props().className).toEqual('right icon');
  });
});
