import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import s from './styles.module.css';

const RadioButtonGroup = ({
  name,
  options,
  active,
  onChange,
  isDisabled,
  className,
}) => (
  <div className={cn(className, s.container)}>
    {options.map(o => (
      <div key={o.value} className={s.option}>
        <input
          type="radio"
          id={o.value}
          name={name}
          value={o.value}
          onChange={() => onChange(o.value)}
          checked={active === o.value}
          className={s.input}
          disabled={isDisabled}
          data-testid={name}
        />
        <label htmlFor={o.value} className={s.label}>{o.label}</label>
      </div>
    ))}
  </div>
);

RadioButtonGroup.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  active: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
  className: PropTypes.string,
};

RadioButtonGroup.defaultProps = {
  isDisabled: false,
  className: null,
};

export default RadioButtonGroup;
