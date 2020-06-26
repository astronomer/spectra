import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import {
  FiAlertTriangle,
  FiInfo,
  FiZap,
  FiCheck,
  FiX,
} from 'react-icons/fi';

import s from './styles.module.css';

export const icons = {
  error: <FiAlertTriangle className={s.icon} />,
  warning: <FiZap className={s.icon} />,
  info: <FiInfo className={s.icon} />,
  success: <FiCheck className={s.icon} />,
};

const setStorage = (key, value) => {
  localStorage[key] = value;
  return localStorage[key];
};

const getStorage = (key, defaultValue = undefined) => {
  const value = localStorage[key] || defaultValue;
  return value;
};

const Flash = ({
  type,
  children,
  className,
  isDismissable,
  dismissKey,
}) => {
  const [show, setShow] = useState(true);

  /* istanbul ignore next */
  if (!show) return null;

  /* istanbul ignore next */
  if (dismissKey) {
    const currentStorage = getStorage(dismissKey);
    if (currentStorage) return null;
  }

  /* istanbul ignore next */
  const handleClose = () => {
    if (dismissKey) {
      setStorage(dismissKey, 'true');
    }
    setShow(false);
  };

  return (
    <div
      data-name="flash"
      data-alert={type}
      className={cn(className, s.container, s[type])}
    >
      {icons[type]}
      <span className={s.content}>{children}</span>
      {isDismissable && (
        <button
          type="button"
          onClick={handleClose}
          className={s.closeBtn}
          title="Dismiss message"
          aria-label="close"
        >
          <FiX />
        </button>
      )}
    </div>
  );
};

Flash.propTypes = {
  type: PropTypes.oneOf(['error', 'warning', 'info', 'success']),
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  isDismissable: PropTypes.bool,
  dismissKey: PropTypes.string,
};

Flash.defaultProps = {
  type: 'warning',
  className: null,
  isDismissable: false,
  dismissKey: null,
};

export default Flash;
