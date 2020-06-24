/* istanbul ignore file */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Input from '../Input';

import s from './styles.module.css';

const InputAutocomplete = ({
  name,
  suggestions,
  onChange,
  value,
  className,
  isDisabled,
  ...otherProps
}) => {
  const [state, setState] = useState({
    activeSuggestion: 0,
    filteredSuggestions: suggestions,
    showSuggestions: false,
    userInput: value,
  });

  const handleOnBlur = () => {
    setState({
      ...state,
      showSuggestions: false,
    });
  };

  const handleOnFocus = () => {
    setState({
      ...state,
      showSuggestions: true,
    });
  };

  const handleOnChange = (e) => {
    const userEnteredInput = e.currentTarget.value;

    // Filter our suggestions that don't contain the user's input
    const filteredSuggestions = suggestions.filter(
      suggestion => suggestion.toLowerCase().indexOf(userEnteredInput.toLowerCase()) > -1 // eslint-disable-line
    );

    setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value,
    });
  };

  useEffect(() => {
    onChange(state.userInput);
  }, [state.userInput]);

  useEffect(() => {
    setState({
      ...state,
      userInput: value,
    });
  }, [value]);

  const handleClick = (e) => {
    setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText,
    });
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 27) { // User pressed the esc key
      setState({
        ...state,
        showSuggestions: false,
      });
    } else if (e.keyCode === 13) { // User pressed the enter key
      e.preventDefault();
      if (state.showSuggestions) {
        setState({
          ...state,
          activeSuggestion: 0,
          showSuggestions: false,
          userInput: state.filteredSuggestions[state.activeSuggestion],
        });
      }
    } else if (e.keyCode === 38) { // User pressed the up arrow
      if (state.activeSuggestion === 0) return;

      setState({
        ...state,
        activeSuggestion: state.activeSuggestion - 1,
      });
    } else if (e.keyCode === 40) { // User pressed the down arrow
      if (state.activeSuggestion - 1 === state.filteredSuggestions.length) return;

      setState({
        ...state,
        activeSuggestion: state.activeSuggestion + 1,
      });
    }
  };

  return (
    <span className={cn(className, s.wrapper)}>
      <Input
        name={name}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        onChange={handleOnChange}
        onKeyDown={onKeyDown}
        value={state.userInput}
        autoComplete="off"
        isDisabled={isDisabled}
        {...otherProps}
      />
      {state.showSuggestions && (
        <ul className={s.suggestions}>
          {state.filteredSuggestions.map((suggestion, index) => (
            <li // eslint-disable-line
              key={suggestion}
              className={cn(index === state.activeSuggestion && s.active, s.suggestion)}
              onClick={handleClick}
              onMouseDown={e => e.preventDefault()}// don't blur the input until after onClick
              title={suggestion}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </span>
  );
};

InputAutocomplete.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  suggestions: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
};

InputAutocomplete.defaultProps = {
  value: '',
  suggestions: [],
  className: null,
  isDisabled: false,
};

export default InputAutocomplete;
