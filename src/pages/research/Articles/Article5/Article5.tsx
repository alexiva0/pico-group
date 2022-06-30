import React from 'react';
import cnCreate from 'utils/cnCreate';
import ImageBox from 'components/ImageBox/ImageBox';
import Image1 from "./i/turnstile.jpeg";
import 'pages/research/Articles/Article.css';

const cn = cnCreate('article');
const Article1: React.FC = () => {
  return (
    <div className={cn()}>
      <div>
        <div className={cn('section')}>
          <p className={cn('paragraph')}>Highlights of recent research:</p>
          <p className={cn('paragraph')}><a href="https://pico.aalto.fi/posters/SINIS_turnstile.pdf" target="_blank" rel="noreferrer">Reaching metrological accuracy with the SINIS single-electron turnstile [pdf]</a></p>
          <p className={cn('paragraph')}><a href="https://pico.aalto.fi/posters/NIS_Andreev.pdf" target="_blank" rel="noreferrer">Andreev tunneling in NIS junctions and SINIS turnstiles [pdf]</a></p>
          <p className={cn('paragraph')}>The synchronous manipulation of individual electrons in solid-state devices became available when single electronics started about two decades ago. Ultrasmall structures in a low-temperature environment form an ideal domain for addressing electrons one by one. In the so-called metrological triangle, voltage from the Josephson effect and resistance from the quantum Hall effect would be tested against current via Ohm’s law for a consistency check of the fundamental constants of nature, h and e. Several attempts to create a metrological current source that would comply with the demanding criteria of extreme accuracy, high yield and implementation with not too many control parameters have been reported. We have proposed and proven the concept of a hybrid normal-metal–superconductor turnstile in the form of a one-island single-electron transistor with one gate, which demonstrates robust current plateaux at multiple levels of ef at frequency f. Theoretically the quantization accuracy is limited by the trade-off between the processes of missed electron tunneling, backward tunneling, Andreev reflection and Cooper-pair–electron cotunneling.</p>
          <p className={cn('paragraph')}>It should be possible to achieve the metrological accuracy of 10-8, while maintaining the quantized current of few tens of pA, just by one turnstile with realistic parameters using aluminum as a superconductor. In 2008 work focused on identifying the various error sources in this pumping scheme.</p>
          <ImageBox
            classes={{root: cn('image')}}
            image={Image1}
            imgAlt="Scheme 1"
            footnoteText="Fig 1: Current plateaus at I = nef of a hybrid single-electron turnstile measured at f = 20 MHz."
          />
        </div>
      </div>
    </div>
  );
};

export default Article1;
