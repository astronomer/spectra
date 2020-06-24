import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import s from './styles.module.css';

const NumberInput = ({
  name,
  value,
  inputStyle,
  clampValueOnBlur,
  className,
  isDisabled,
  min,
  max,
  step,
  onChange,
  ...otherProps
}) => {
  const updateValue = (newValue) => {
    onChange(newValue);
  };

  const clamp = (newVal) => {
    const maxExists = max != null;
    const minExists = min != null;

    if (maxExists && newVal > max) {
      updateValue(max);
    }

    if (minExists && newVal < min) {
      updateValue(min);
    }
  };

  const handleOnBlur = () => {
    /* istanbul ignore next */
    if (clampValueOnBlur) {
      clamp(value);
    }
  };

  const handleOnChange = (e) => {
    updateValue(Number(e.target.value));
  };

  return (
    <input
      type="number"
      name={name}
      value={value}
      min={min}
      max={max}
      step={step}
      className={cn(className, inputStyle && s[inputStyle], s.input)}
      disabled={isDisabled}
      onBlur={handleOnBlur}
      onChange={handleOnChange}
      {...otherProps}
    />
  );
};

NumberInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number,
  inputStyle: PropTypes.string,
  className: PropTypes.string,
  clampValueOnBlur: PropTypes.bool,
  isDisabled: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

NumberInput.defaultProps = {
  inputStyle: null,
  value: null,
  className: null,
  clampValueOnBlur: false,
  isDisabled: false,
  min: null,
  max: null,
  step: 1,
};

export default NumberInput;
