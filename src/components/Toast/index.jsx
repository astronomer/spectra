/* istanbul ignore file */

import React from 'react';
import PropTypes from 'prop-types';
import toaster from 'toasted-notes';
import cn from 'classnames';
import {
  FiAlertTriangle,
  FiInfo,
  FiZap,
  FiCheck,
  FiX,
} from 'react-icons/fi';

import s from './styles.module.css';

const icons = {
  error: <FiAlertTriangle />,
  warning: <FiZap />,
  info: <FiInfo />,
  success: <FiCheck />,
};

const Toast = ({
  type,
  content,
  isClosable,
  onClose,
}) => (
  <div
    data-name="alert"
    data-alert={type}
    className={cn(s[type], s.toast)}
  >
    {icons[type]}
    <span>{content}</span>
    {isClosable && (
      <button
        type="button"
        onClick={onClose}
        className={s.closeToast}
        title="Dismiss message"
        aria-label="close"
      >
        <FiX />
      </button>
    )}
  </div>
);

Toast.propTypes = {
  type: PropTypes.oneOf(['error', 'warning', 'info', 'success']).isRequired,
  content: PropTypes.string.isRequired,
  isClosable: PropTypes.bool,
  onClose: PropTypes.func,
};

Toast.defaultProps = {
  isClosable: true,
  onClose: null,
};

const useToast = () => {
  const notify = ({
    type,
    content,
    isClosable,
    duration = 5000,
    position = 'bottom-right',
  }) => {
    const options = {
      position,
      duration,
    };

    toaster.notify(
      ({ onClose, id }) => (
        <Toast
          {...{
            onClose,
            id,
            type,
            content,
            isClosable,
          }}
        />
      ),
      options,
    );
  };

  return notify;
};

export default useToast;
