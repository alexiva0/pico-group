import React from 'react';
import cnCreate from 'utils/cnCreate';
import ImageBox from 'components/ImageBox/ImageBox';
import Image1 from "./i/ProposalFig.001.jpg";
import Image2 from "./i/QHE.jpeg";
import Image3 from "./i/ocsillations.jpeg";
import 'pages/research/Articles/Article.css';

const cn = cnCreate('article');
const Article1: React.FC = () => {
  return (
    <div className={cn()}>
      <div>
        <div className={cn('section')}>
          <p className={cn('paragraph')}>Understanding the dynamics of heat transport in mesoscopic systems is a topic of great significance in many emergent quantum technologies; such as in superconducting qubits for quantum information studies, and calorimetry for quantum sensing applications.</p>
          <p className={cn('paragraph')}>To investigate this, we are developing a hybrid-device where we can look at the flow of heat across a superconducting qubit, between two mesoscopic thermal reservoirs. This has been given the popular name of a <strong>‘Quantum Heat Engine‘</strong>, with the energy level spacing of the qubit expanding and contracting, and transporting heat between the two reservoirs, on a single quanta excitation basis.</p>
          <p className={cn('paragraph')}>To date, we have developed technology in the laboratory for superconducting qubit studies, based upon the prevalent transmon qubit design, as shown in the figure below, and reported <a href="https://arxiv.org/abs/1609.07057" target="_blank" rel="noreferrer">here</a>.</p>
          <ImageBox
            classes={{root: cn('image')}}
            image={Image1}
            imgAlt="Scheme 1"
            footnote="Figure 1."
          />
          <p className={cn('paragraph')}>In parallel to this, PICO group has established itself as a leading research group for low temperature thermometry, and we use this expertise to generate and measure heat flow across our devices, using Normal Metal – Insulator -Superconductor (NIS) heterostructure based bolometry.</p>
          <p className={cn('paragraph')}>Is it our aim to use this quantum heat engine to further our understanding of heat transport in the quantum limit, and provide a platform for quantum thermodynamic experiments, such as those reported<a href="http://iopscience.iop.org/article/10.1088/1367-2630/17/3/035012" target="_blank" rel="noreferrer">here</a>.</p>
          <p className={cn('paragraph')}>Such a quantum heat engine can be based on a superconducting qubit coupled to two LC-resonators each including a resistor acting as a reservoir (Fig. 2). <a href="https://journals.aps.org/prb/abstract/10.1103/PhysRevB.94.184503" target="_blank" rel="noreferrer">Here</a> we find various operation regimes: nearly adiabatic (low driving frequency), ideal Otto cycle (intermediate frequency), and importantly non-adiabatic coherent regime (high frequency). In the non-adiabatic regime we observe theoretically strong coherent oscillations of the cooling power as a function of frequency as shown in Fig. 3. Our goal is to realize such a quantum refrigerator experimentally, with our first ‘static’ demonstration reported in <a href="https://arxiv.org/abs/1801.09312" target="_blank" rel="noreferrer">arXiv:1801.09312</a>.</p>
          <ImageBox
            classes={{root: cn('image')}}
            image={Image2}
            imgAlt="Scheme 2"
            footnote="Figure 2."
          />
          <ImageBox
            classes={{root: cn('image')}}
            image={Image3}
            imgAlt="Scheme 3"
            footnote="Figure 3."
          />
        </div>
      </div>
    </div>
  );
};

export default Article1;
