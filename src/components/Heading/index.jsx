import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import s from './styles.module.css';

const Heading = ({
  as,
  styleAs,
  children,
  className,
  ...otherProps
}) => {
  const HTag = as;

  return (
    <HTag
      className={cn(className, styleAs ? s[styleAs] : s[as], s.heading)}
      {...otherProps}
    >
      {children}
    </HTag>
  );
};

Heading.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  styleAs: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
};

Heading.defaultProps = {
  styleAs: null,
  className: null,
};

export default Heading;
