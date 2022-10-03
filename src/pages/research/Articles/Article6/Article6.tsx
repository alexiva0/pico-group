import React from 'react';
import cnCreate from 'utils/cnCreate';
import 'pages/research/Articles/Article.css';

const cn = cnCreate('article');
const Article1: React.FC = () => {
  return (
    <div className={cn()}>
      <div>
        <div className={cn('section')}>
          <p className={cn('paragraph')}>Our group develops several types of on-chip thermometers. Ideally, an on-chip thermometer should be easy to fabricate, reliable, should be able to operate at temperatures below 1K, and should have short response time. Such on-chip thermometers are used, for example, in very sensitive radiation detectors operating at low temperatures.</p>
          <p className={cn('paragraph')}>Thermometer is usually an electronic device with non-linear current-voltage characteristics. The degree of this non-linearity is typically changing with temperature, and one can detect these changes by electronic means. Performing calibration one can convert the output signal into temperature. Primary thermometers do not require calibration because the conversion of their output signal into temperature involves only fundamental constants. Such thermometers are used in metrology.</p>
          <p className={cn('paragraph')}>In the links below, we introduce three types of thermometers used in our lab.</p>
          <p className={cn('paragraph')}><a href="https://pico.aalto.fi/index5e47.html?page_id=3111" target="_blank" rel="noreferrer">1. Coulomb blockade thermometer</a></p>
          <p className={cn('paragraph')}><a href="https://pico.aalto.fi/indexdc4d.html?page_id=3122" target="_blank" rel="noreferrer">2. Tunnel junction thermometer</a></p>
          <p className={cn('paragraph')}><a href="https://pico.aalto.fi/index965a.html?page_id=3128" target="_blank" rel="noreferrer">3. Josephson junction thermometer</a></p>
        </div>
      </div>
    </div>
  );
};

export default Article1;
