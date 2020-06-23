import React from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';
import s from './styles.module.css';

const Dropdown = ({ isOpen, children }) => (
  <div className={cn(s.container, isOpen && s.open)}>
    {children}
  </div>
);

Dropdown.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.node,
  ]).isRequired,
};

export default Dropdown;
