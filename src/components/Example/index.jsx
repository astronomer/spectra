import React from 'react';
import PropTypes from 'prop-types';

import s from './styles.module.css';

const Example = ({ name }) => (
  <div className={s.example}>
    {`This is an example by ${name}`}
  </div>
);

Example.propTypes = {
  name: PropTypes.string,
};

Example.defaultProps = {
  name: 'SB',
};

export default Example;
