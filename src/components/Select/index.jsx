import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { FiChevronDown } from 'react-icons/fi';

import s from './styles.module.css';

const Select = ({
  inputStyle,
  className,
  placeholder,
  children,
  isDisabled,
  ...otherProps
}) => (
  <div className={cn(className, inputStyle, s.container)}>
    <select className={s.select} disabled={isDisabled} {...otherProps}>
      {placeholder && (
        <option value="">{placeholder}</option>
      )}
      {children}
    </select>
    <span className={s.iconWrapper}>
      <FiChevronDown className={s.icon} />
    </span>
  </div>
);

Select.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  inputStyle: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.node,
  ]).isRequired,
  isDisabled: PropTypes.bool,
};

Select.defaultProps = {
  inputStyle: null,
  className: null,
  placeholder: null,
  isDisabled: false,
};

export default Select;
