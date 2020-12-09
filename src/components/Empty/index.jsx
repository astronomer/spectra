import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Heading from '../Heading';

import s from './styles.module.css';

const Empty = ({
  heading,
  description,
  actions,
  footer,
  className,
  ...otherProps
}) => (
  <div className={cn(className, s.container)} {...otherProps}>
    <Heading as="h3">{heading}</Heading>
    {description}
    {actions && (
      <div className={s.actions}>
        {actions}
      </div>
    )}
    {footer && (
      <div className={s.footer}>
        {footer}
      </div>
    )}
  </div>
);

Empty.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.element,
  actions: PropTypes.element,
  footer: PropTypes.element,
  className: PropTypes.string,
};

Empty.defaultProps = {
  description: null,
  actions: null,
  footer: null,
  className: null,
};

export default Empty;
