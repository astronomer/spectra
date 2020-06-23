import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import s from './styles.module.css';

const Banner = ({
  type,
  children,
  className,
}) => (
  <div
    data-name="banner"
    data-alert={type}
    className={cn(className, s[type], s.container)}
  >
    <div>{children}</div>
  </div>
);

Banner.propTypes = {
  type: PropTypes.oneOf(['error', 'warning', 'info', 'success']),
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
};

Banner.defaultProps = {
  type: 'warning',
  className: null,
};


export default Banner;
