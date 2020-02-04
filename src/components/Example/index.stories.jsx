import React from 'react';
import Example from '.';

export default { title: 'Example' };

export const withText = () => <Example />;

export const withName = () => (<Example name="John Doe" />);
