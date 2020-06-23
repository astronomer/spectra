import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Heading from '../Heading';

import s from './styles.module.css';

const Card = ({
  header,
  children,
  footer,
  noPadding,
  className,
}) => (
  <div className={cn(className, s.card)} data-testid="Card">
    {header && (
      <div className={s.cardHeader}>
        {typeof header === 'string' && (
          <Heading as="h4">{header}</Heading>
        )}
        {typeof header !== 'string' && header}
      </div>
    )}
    <div className={cn(s.cardBody, noPadding && s.noPadding)}>
      {children}
    </div>
    {footer && (
      <div className={s.cardFooter}>
        {footer}
      </div>
    )}
  </div>
);

Card.propTypes = {
  header: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.node,
    PropTypes.string,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.node,
  ]).isRequired,
  footer: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.node,
  ]),
  noPadding: PropTypes.bool,
  className: PropTypes.string,
};

Card.defaultProps = {
  header: null,
  footer: null,
  noPadding: false,
  className: null,
};

export default Card;
