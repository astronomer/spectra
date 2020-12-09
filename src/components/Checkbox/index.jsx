import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import s from './styles.module.css';

const Checkbox = ({
  name,
  label,
  isChecked,
  isIndeterminate,
  onChange,
  isDisabled,
  className,
  ...otherProps
}) => (
  <label
    className={cn(className, isDisabled && s.disabled, s.label)}
    htmlFor={name}
    {...otherProps}
  >
    <input
      type="checkbox"
      id={name}
      name={name}
      className={
        cn(
          isIndeterminate && s.isIndeterminate,
          !isIndeterminate && isChecked ? s.checked : s.unchecked,
          s.input,
        )
      }
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
  isIndeterminate: PropTypes.bool,
  onChange: PropTypes.func,
  isDisabled: PropTypes.bool,
  className: PropTypes.string,
};

Checkbox.defaultProps = {
  isChecked: false,
  isIndeterminate: false,
  onChange: null,
  isDisabled: false,
  className: null,
};

export default Checkbox;
