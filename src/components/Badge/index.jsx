import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import s from './styles.module.css';

const Badge = ({
  className,
  status,
  text,
  ...otherProps
}) => (
  <span
    className={cn(className, s[status], s.badge)}
    {...otherProps}
  >
    {text}
  </span>
);

Badge.propTypes = {
  className: PropTypes.string,
  status: PropTypes.oneOf(['error', 'warning', 'info', 'success']),
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
  ]).isRequired,
};

Badge.defaultProps = {
  className: null,
  status: null,
};

export default Badge;
