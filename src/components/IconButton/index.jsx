import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import s from './styles.module.css';

const IconButton = forwardRef(({
  type,
  ariaLabel,
  buttonSize,
  buttonStyle,
  icon,
  isDisabled,
  displayBlock,
  className,
  ...otherProps
}, ref) => {
  const btnClasses = cn(
    className,
    displayBlock && s.displayAsBlockElement,
    s[buttonStyle],
    s[buttonSize],
    s.button,
  );

  const Icon = icon;

  return (
    <button
      ref={ref}
      type={type} // eslint-disable-line
      aria-label={ariaLabel}
      title={ariaLabel}
      className={btnClasses}
      disabled={isDisabled}
      {...otherProps}
    >
      <Icon className={s.icon} />
    </button>
  );
});

IconButton.displayName = 'IconButton';

IconButton.propTypes = {
  type: PropTypes.oneOf([
    'button',
    'submit',
    'reset',
  ]),
  ariaLabel: PropTypes.string.isRequired,
  buttonSize: PropTypes.oneOf(['small', 'large']),
  buttonStyle: PropTypes.oneOf([
    'primary',
    'secondary',
    'primaryDestructive',
    'secondaryDestructive',
    'primaryAlt',
    'google',
    'okta',
    'github',
  ]),
  icon: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
  className: PropTypes.string,
  displayBlock: PropTypes.bool,
};

IconButton.defaultProps = {
  type: 'button',
  buttonSize: null,
  buttonStyle: 'primary',
  isDisabled: false,
  className: null,
  displayBlock: false,
};

export default IconButton;
