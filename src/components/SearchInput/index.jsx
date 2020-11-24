import React from 'react';
import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';
import cn from 'classnames';

import Input from '../Input';

import s from './styles.module.css';

const SearchInput = ({
  name,
  className,
  isDisabled,
  ...otherProps
}) => (
  <div className={cn(className, s.searchWrapper)}>
    <FiSearch className={cn(isDisabled && s.disabled, s.searchIcon)} />
    <Input
      type="search"
      name={name}
      className={s.searchInput}
      isDisabled={isDisabled}
      {...otherProps}
    />
  </div>
);

SearchInput.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
};

SearchInput.defaultProps = {
  className: null,
  isDisabled: false,
};

export default SearchInput;
