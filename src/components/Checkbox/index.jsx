import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import s from './styles.module.css';

const Checkbox = ({
  name,
  label,
  isChecked,
  onChange,
  isDisabled,
  ...otherProps
}) => (
  <label
    className={cn(isDisabled && s.disabled, s.label)}
    htmlFor={name}
    {...otherProps}
  >
    <input
      type="checkbox"
      id={name}
      name={name}
      className={cn(isChecked ? s.checked : s.unchecked, s.input)}
      checked={isChecked}
      onChange={onChange}
      disabled={isDisabled}
    />
    <span
      aria-hidden="true"
      className={s.checkbox}
    />
    {label}
  </label>
);

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
  ]).isRequired,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func,
  isDisabled: PropTypes.bool,
};

Checkbox.defaultProps = {
  isChecked: false,
  onChange: null,
  isDisabled: false,
};

export default Checkbox;
