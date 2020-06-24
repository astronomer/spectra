/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import InfoTooltip from '../InfoTooltip';

import s from './styles.module.css';

const FormGroup = ({
  children,
  className,
  helperText,
  helperInTooltip,
  inputStyle,
  label,
  name,
  isHiddenLabel,
  ...otherProps
}) => (
  <div className={cn(className, inputStyle && s[inputStyle], s.formGroup)} {...otherProps}>
    <label className={cn(isHiddenLabel && s.visuallyHidden, s.label)} htmlFor={name}>
      {label}
      {helperText && helperInTooltip && (
        <InfoTooltip content={helperText} className="uMl1" />
      )}
    </label>
    {children}
    {helperText && !helperInTooltip && (
      <div className={s.helperText}>{helperText}</div>
    )}
  </div>
);

FormGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  helperText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.object,
    PropTypes.node,
  ]),
  helperInTooltip: PropTypes.bool,
  inputStyle: PropTypes.string,
  isHiddenLabel: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
};

FormGroup.defaultProps = {
  className: null,
  helperText: null,
  helperInTooltip: false,
  inputStyle: null,
  isHiddenLabel: false,
  label: null,
};

export default FormGroup;
