import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import s from './styles.module.css';

const TextArea = ({
  name,
  inputStyle,
  className,
  rows,
  isDisabled,
  ...otherProps
}) => (
  <textarea
    name={name}
    rows={rows}
    className={cn(className, s[inputStyle], s.textArea)}
    disabled={isDisabled}
    {...otherProps}
  />
);

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  inputStyle: PropTypes.string,
  className: PropTypes.string,
  rows: PropTypes.string,
  isDisabled: PropTypes.bool,
};

TextArea.defaultProps = {
  inputStyle: null,
  className: null,
  rows: '2',
  isDisabled: false,
};

export default TextArea;
