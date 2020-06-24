/* istanbul ignore file */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import customFormErrors from './errors.js';
import { useToast } from '../Toast';

import s from './styles.module.css';

const Form = ({
  handleSubmit,
  isSuccess,
  successMsg,
  errors,
  children,
  className,
  ...otherProps
}) => {
  const toast = useToast();

  useEffect(() => {
    if (errors) {
      toast({
        type: 'error',
        content: customFormErrors(errors),
        duration: null,
      });
    }
  }, [errors]);

  useEffect(() => {
    if (isSuccess) {
      toast({
        type: 'success',
        content: successMsg,
      });
    }
  }, [isSuccess]);

  return (
    <form
      action=""
      className={cn(className, s.form)}
      onSubmit={handleSubmit}
      {...otherProps}
    >
      {children}
    </form>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func,
  isSuccess: PropTypes.bool,
  successMsg: PropTypes.string,
  errors: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]).isRequired,
  className: PropTypes.string,
};

Form.defaultProps = {
  handleSubmit: e => e.preventDefault,
  errors: null,
  isSuccess: false,
  successMsg: 'Saved!',
  className: null,
};

export default Form;
