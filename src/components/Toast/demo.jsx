import React from 'react';
import PropTypes from 'prop-types';

import { Button, useToast } from '../..';

const Demo = ({ btnLabel, type, content }) => {
  const toast = useToast();
  return (
    <Button
      label={btnLabel}
      onClick={() => toast({
        type,
        content,
      })
    }
    />
  );
};

Demo.propTypes = {
  btnLabel: PropTypes.string,
  type: PropTypes.oneOf(['error', 'warning', 'info', 'success']),
  content: PropTypes.string.isRequired,
};

Demo.defaultProps = {
  btnLabel: 'Show Toast',
  type: 'success',
};

export default Demo;
