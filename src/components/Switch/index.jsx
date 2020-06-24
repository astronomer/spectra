import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import s from './styles.module.css';

const Switch = ({
  name,
  label,
  isChecked,
  onChange,
  isDisabled,
  ...otherProps
}) => {
  /* istanbul ignore next */
  const handleOnChange = () => {
    if (isDisabled) return;
    onChange();
  };

  return (
    <label
      className={cn(isDisabled && s.disabled, s.label)}
      htmlFor={name}
      onClick={() => handleOnChange}
      {...otherProps}
    >
      <input
        type="checkbox"
        id={name}
        name={name}
        className={cn(isChecked ? s.checked : s.unchecked, s.input)}
        checked={isChecked}
        onChange={handleOnChange}
        disabled={isDisabled}
      />
      <span
        aria-hidden="true"
        className={s.switch}
      />
      {label}
    </label>
  );
};

Switch.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func,
  isDisabled: PropTypes.bool,
};

Switch.defaultProps = {
  isChecked: false,
  onChange: null,
  isDisabled: false,
};

export default Switch;
