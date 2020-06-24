import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { FiCircle } from 'react-icons/fi';

import s from './styles.module.css';

const StatusIndicator = ({
  status,
  inFlight,
  className,
  ...otherProps
}) => (
  <span
    className={cn(className, inFlight && s.inFlight, s.container)}
    {...otherProps}
  >
    <FiCircle className={cn(s[status], s.indicator)} />
    {inFlight && (
      <FiCircle className={cn(s.secondDot, s[status], s.indicator)} />
    )}
  </span>
);

StatusIndicator.propTypes = {
  status: PropTypes.oneOf([
    'positive',
    'warn',
    'negative',
    'neutral',
    'inactive',
  ]).isRequired,
  inFlight: PropTypes.bool,
  className: PropTypes.string,
};

StatusIndicator.defaultProps = {
  inFlight: false,
  className: null,
};

export default StatusIndicator;
