import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import s from './styles.module.css';

const LoadingDots = ({ className, ...otherProps }) => (
  <span className={cn(className, s.dots)} data-testid="LoadingDots" {...otherProps}>
    <span className={s.dot} />
    <span className={s.dot} />
    <span className={s.dot} />
  </span>
);

LoadingDots.propTypes = {
  className: PropTypes.string,
};

LoadingDots.defaultProps = {
  className: null,
};

export default LoadingDots;
