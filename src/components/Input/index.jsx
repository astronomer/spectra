import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import s from './styles.module.css';

const Input = forwardRef(({
  name,
  type,
  inputStyle,
  className,
  isDisabled,
  ...otherProps
}, ref) => (
  <input
    ref={ref}
    type={type}
    name={name}
    className={cn(className, inputStyle && s[inputStyle], s.input)}
    disabled={isDisabled}
    {...otherProps}
  />
));

Input.displayName = 'Input';

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  inputStyle: PropTypes.string,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
};

Input.defaultProps = {
  type: 'text',
  inputStyle: null,
  className: null,
  isDisabled: false,
};

export default Input;
