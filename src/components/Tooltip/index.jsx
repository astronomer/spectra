import React from 'react';
import Tippy from '@tippyjs/react';

const Tooltip = ({ ...otherProps }) => (
  <Tippy
    arrow
    placement="right"
    flipBehavior={['right', 'top']}
    animation="shift-away"
    theme="astro"
    {...otherProps}
  />
);

export default Tooltip;
