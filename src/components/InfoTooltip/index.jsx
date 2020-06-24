import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { FiInfo } from 'react-icons/fi';

import Tooltip from '../Tooltip';

import s from './styles.module.css';

const InfoTooltip = ({ className, content, ...otherProps }) => (
  <Tooltip content={content}>
    <span className={cn(className, s.iconWrapper)} {...otherProps}>
      <FiInfo className={s.icon} />
    </span>
  </Tooltip>
);

InfoTooltip.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
  className: PropTypes.string,
};

InfoTooltip.defaultProps = {
  className: null,
};

export default InfoTooltip;
