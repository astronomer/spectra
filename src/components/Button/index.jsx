import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Link as ReactRouterLink } from 'react-router-dom';
import Link from 'gatsby-link';
import cn from 'classnames';

import LoadingDots from '../LoadingDots';

import s from './styles.module.css';

export const ButtonIcon = ({ icon, position }) => {
  const Icon = icon;
  return <Icon className={cn(s[position], s.icon)} />;
};

ButtonIcon.propTypes = {
  icon: PropTypes.func.isRequired,
  position: PropTypes.oneOf(['left', 'right']).isRequired,
};

const Button = forwardRef(({
  type,
  to,
  label,
  buttonSize,
  buttonStyle,
  iconLeft,
  iconRight,
  isDisabled,
  inFlight,
  displayBlock,
  className,
  gatsby,
  ...otherProps
}, ref) => {
  const btnClasses = cn(
    className,
    displayBlock && s.displayAsBlockElement,
    s[buttonStyle],
    s[buttonSize],
    s.button,
  );

  const renderButtonContents = () => (
    <>
      {iconLeft && <ButtonIcon icon={iconLeft} position="left" />}
      {label}
      {iconRight && <ButtonIcon icon={iconRight} position="right" />}
    </>
  );

  if (type === 'internal') {
    if (gatsby) {
      return (
        <Link
          ref={ref}
          to={to}
          className={btnClasses}
          {...otherProps}
        >
          {renderButtonContents()}
        </Link>
      );
    }

    return (
      <ReactRouterLink
        ref={ref}
        to={to}
        className={btnClasses}
        {...otherProps}
      >
        {renderButtonContents()}
      </ReactRouterLink>
    );
  }

  if (type === 'external') {
    return (
      <a
        ref={ref}
        href={to}
        className={btnClasses}
        target="_blank"
        rel="noreferrer noopener"
        {...otherProps}
      >
        {renderButtonContents()}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      type={type} // eslint-disable-line
      className={btnClasses}
      disabled={isDisabled || inFlight}
      data-inflight={inFlight ? 'true' : null}
      {...otherProps}
    >
      {!inFlight && renderButtonContents()}
      {inFlight && (
        <>
          <LoadingDots className={s.inFlightDots} />
          <span className={s.inFlightText}>
            {renderButtonContents()}
          </span>
        </>
      )}
    </button>
  );
});

Button.displayName = 'Button';

Button.propTypes = {
  type: PropTypes.oneOf([
    'internal',
    'external',
    'button',
    'submit',
    'reset',
  ]),
  to: PropTypes.string,
  label: PropTypes.string.isRequired,
  buttonSize: PropTypes.oneOf(['small', 'large']),
  buttonStyle: PropTypes.oneOf([
    'link',
    'primary',
    'secondary',
    'primaryDestructive',
    'secondaryDestructive',
    'primaryAlt',
    'google',
    'okta',
    'github',
  ]),
  iconLeft: PropTypes.func,
  iconRight: PropTypes.func,
  isDisabled: PropTypes.bool,
  inFlight: PropTypes.bool,
  className: PropTypes.string,
  displayBlock: PropTypes.bool,
  gatsby: PropTypes.bool,
};

Button.defaultProps = {
  to: null,
  type: 'button',
  buttonSize: null,
  buttonStyle: 'primary',
  iconLeft: null,
  iconRight: null,
  isDisabled: false,
  inFlight: false,
  className: null,
  displayBlock: false,
  gatsby: false,
};

export default Button;
