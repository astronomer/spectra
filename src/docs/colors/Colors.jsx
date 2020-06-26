import React from 'react';

import ColorBlock from './ColorBlock';
import s from './styles.module.css';

const Colors = () => (
  <div className={s.palleteGrid}>
    <div className={s.palleteGrouping}>
      <ColorBlock variable="--white09" hex="#fff" />
      <ColorBlock variable="--white10" hex="#fffefd" isBrand />
      <ColorBlock variable="--white11" hex="#f5f5f5" />
      <ColorBlock variable="--white12" hex="#edecec" />
      <ColorBlock variable="--white13" hex="#e2e0df" />
    </div>
    <div className={s.palleteGrouping}>
      <ColorBlock variable="--gray06" hex="#c4c2c1" />
      <ColorBlock variable="--gray07" hex="#bcbbb9" />
      <ColorBlock variable="--gray08" hex="#9e9e9c" needsContrast />
      <ColorBlock variable="--gray09" hex="#8f8e8c" needsContrast />
      <ColorBlock variable="--gray10" hex="#767574" needsContrast isBrand />
      <ColorBlock variable="--gray11" hex="#6a6967" needsContrast />
      <ColorBlock variable="--gray12" hex="#626160" needsContrast />
      <ColorBlock variable="--gray13" hex="#51504f" needsContrast />
    </div>
    <div className={s.palleteGrouping}>
      <ColorBlock variable="--purple07" hex="#4a4466" needsContrast />
      <ColorBlock variable="--purple08" hex="#413c5a" needsContrast />
      <ColorBlock variable="--purple09" hex="#39354e" needsContrast />
      <ColorBlock variable="--purple10" hex="#302c43" needsContrast isBrand />
      <ColorBlock variable="--purple11" hex="#252235" needsContrast />
      <ColorBlock variable="--purple12" hex="#1f1d2b" needsContrast />
    </div>
    <div className={s.palleteGrouping}>
      <ColorBlock variable="--blue08" hex="#47c8ff" />
      <ColorBlock variable="--blue09" hex="#11a9ff" needsContrast />
      <ColorBlock variable="--blue10" hex="#049cf1" needsContrast isBrand />
      <ColorBlock variable="--blue11" hex="#027ec4" needsContrast />
      <ColorBlock variable="--blue12" hex="#0076b8" needsContrast />
    </div>
    <div className={s.palleteGrouping}>
      <ColorBlock variable="--green06" hex="#9ff774" />
      <ColorBlock variable="--green07" hex="#31ee71" />
      <ColorBlock variable="--green08" hex="#07d65b" />
      <ColorBlock variable="--green09" hex="#02c752" needsContrast />
      <ColorBlock variable="--green10" hex="#00b35d" needsContrast isBrand />
      <ColorBlock variable="--green11" hex="#00a455" needsContrast />
      <ColorBlock variable="--green12" hex="#049a59" needsContrast />
      <ColorBlock variable="--green13" hex="#0b8852" needsContrast />
    </div>
    <div className={s.palleteGrouping}>
      <ColorBlock variable="--gold08" hex="#ffbe40" />
      <ColorBlock variable="--gold09" hex="#ffae21" />
      <ColorBlock variable="--gold10" hex="#ffa11a" isBrand />
      <ColorBlock variable="--gold11" hex="#f48e06" needsContrast />
    </div>
    <div className={s.palleteGrouping}>
      <ColorBlock variable="--red08" hex="#ff6b4a" needsContrast />
      <ColorBlock variable="--red09" hex="#ff523a" needsContrast />
      <ColorBlock variable="--red10" hex="#f4442c" needsContrast isBrand />
      <ColorBlock variable="--red11" hex="#e84029" needsContrast />
    </div>
  </div>
);

export default Colors;
