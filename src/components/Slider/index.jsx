import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import s from './styles.module.css';

const Slider = ({
  name,
  value,
  className,
  isDisabled,
  min,
  max,
  step,
  onChange,
  ...otherProps
}) => {
  const handleOnChange = (e) => {
    onChange(Number(e.target.value));
  };

  return (
    <input
      type="range"
      name={name}
      value={value}
      min={min}
      max={max}
      step={step}
      className={cn(className, s.slider)}
      disabled={isDisabled}
      onChange={handleOnChange}
      {...otherProps}
    />
  );
};

Slider.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

Slider.defaultProps = {
  value: null,
  className: null,
  isDisabled: false,
  min: null,
  max: null,
  step: 1,
};

export default Slider;
