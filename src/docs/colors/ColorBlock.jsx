import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import s from './styles.module.css';

const ColorBlock = ({
  variable,
  hex,
  needsContrast,
  isBrand,
}) => {
  const [copied, setCopied] = useState(false);

  const onCopy = () => setCopied(true);

  const handleMouseLeave = () => setCopied(false);

  const colorClasses = cn(needsContrast && s.contrast, isBrand && s.brand, s.colorBlock);
  const overlayText = copied ? 'Copied!' : 'Click to copy hex';

  return (
    <CopyToClipboard text={hex} onCopy={onCopy} onMouseLeave={handleMouseLeave}>
      <div className={colorClasses} style={{ backgroundColor: hex }}>
        <div>{variable}</div>
        <div>{hex}</div>
        <div className={s.overlay} style={{ backgroundColor: hex }}>{overlayText}</div>
      </div>
    </CopyToClipboard>
  );
};

export default ColorBlock;

ColorBlock.propTypes = {
  variable: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired,
  needsContrast: PropTypes.bool,
  isBrand: PropTypes.bool,
};

ColorBlock.defaultProps = {
  needsContrast: false,
  isBrand: false,
};
