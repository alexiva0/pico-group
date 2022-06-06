import React from 'react';
import cnCreate from 'utils/cnCreate';
import ImageBox from 'components/ImageBox/ImageBox';
import Image1 from "./i/PicoCooler2.jpeg";
import Image2 from "./i/image001.jpeg";
import Image3 from "./i/quantum.jpeg";
import Image4 from "./i/junction.jpeg";
import 'pages/research/Articles/Article.css';

const cn = cnCreate('article');
const Article1: React.FC = () => {
  return (
    <div className={cn()}>
      <div>
        <div className={cn('section')}>
          <p className={cn('paragraph')}>Highlights of recent research: <a href="https://pico.aalto.fi/posters/Hybrid_NS_devices.pdf" target="_blank" rel="noreferrer">Hybrid normal metal-superconductor devices [pdf]</a></p>
          <p className={cn('paragraph')}>We investigate relaxation phenomena and new electronic refrigeration methods at low temperatures down to below 50 mK. One of the key questions there is how electrons relax thermally with external heat bath and also internally. We have measured a new relaxation mechanism, electron-photon radiative coupling via a superconducting transmission line, which takes over at the very low temperatures, where electron-phonon coupling fades away.</p>
          <ImageBox
            classes={{root: cn('image')}}
            image={Image1}
            imgAlt="Scheme 1"
            footnote="Fig 1: Quantized thermal conductance measured: electron thermalization in metals weakens when lowering the temperature and is finally determined by radiative heat exchange with the environment. Our experiment demonstrates that the electronic temperature in a small metallic island increases when the connection to the cold environment is disrupted (red arrows). Moreover, it confirms (right) that the radiative heat flow is limited by the universal quantum of thermal conductance."
          />

          <p className={cn('paragraph')}>We have studied the interplay between Coulomb effects and electronic cooling. Several new devices were proposed by us: a radio-frequency single-electron refrigerator was described, in which heat is removed by an alternating voltage at the gate, without applying external bias voltage. A DC version of this, a heat transistor, was measured and successfully characterized. A Brownian refrigerator, where, somewhat surprisingly, heat is removed by subjecting a tunnel junction to the thermal noise of a resistor was proposed and characterized.</p>
          <ImageBox
            classes={{root: cn('image')}}
            image={Image2}
            imgAlt="Scheme 2"
            footnote="Fig 2: Single-electron refrigerator. There’s no room for milk and eggs but this new single-electron refrigerator might get as cold as 10 mK."
          />
          <p className={cn('paragraph')}>We also try to achieve still lower temperatures by using superconductors with lower critical temperature than that of the commonly used aluminium. Thermometry at the low end of the temperature range achieved by the microrefrigerators is problematic, because no calibration can typically be reliably extrapolated into this regime: Coulomb blockade is the prime candidate to provide a way to determine temperatures in this regime.</p>
          <p className={cn('paragraph')}>One more line in this project is to find ways to create far from equilibrium electron energy distributions for fundamental studies but also to exploit them in refrigerator-controlled cold electron transistors.</p>
        </div>
        <div className={cn('section')}>
          <h4 className={cn('title')}>Quantum-limited refrigeration</h4>
          <p className={cn('paragraph')}>We have demonstrated quantum limited electronic refrigeration of a metallic island in a low temperature micro-circuit. We showed that matching the impedance of the circuit enables refrigeration at a distance, of about 50 µm in our case,through superconducting leads with a cooling power determined by the quantum of thermal conductance. Our results are consistent with the concept of electromagnetic heat transport. We observed and analyzed the crossover between electromagnetic and quasiparticle heat flux in a superconductor.</p>
          <ImageBox
            classes={{root: cn('image')}}
            image={Image3}
            imgAlt="Scheme 3"
            footnote="Fig 3: The measurement of cooling at the quantum limit. Top left: the sample with two resistors separated by a distance of 50 ?m enclosed in a superconducting loop. Bottom left: a close-up of one of the normal metal resistors with attached electrodes. Right: experimental data of NIS electronic cooling of the island directly connected to the refrigerator (blue line) and of the remote island (red line). Remote cooling persists down to the lowest temperatures indicating electromagnetic energy exchange between the resistors."
          />
        </div>
        <div className={cn('section')}>
          <h4 className={cn('title')}>Out-of-equilibrium Josephson nano-junctions</h4>
          <p className={cn('paragraph')}>Hysteresis in the transport through superconductor–normal-metal–superconductor (SNS) Josephson junctions has attracted some attention recently. We investigated it by measuring directly the electron temperature in the normal metal. Our results demonstrate unambiguously that such hysteresis results from an increase of the normal-metal electron temperature once the junction switches to the resistive state. In our geometry, the electron temperature increase is governed by the thermal resistance of the superconducting electrodes of the junction.</p>
          <ImageBox
            classes={{root: cn('image')}}
            image={Image4}
            imgAlt="Scheme 4"
            footnote="Fig 4: Hysteresis of a proximity SNS Josephson junction. Bottom panel shows the current-voltage characteristics, and the top one the associated temperature of the N part. Hysteresis is of thermal origin."
          />
          <p className={cn('paragraph')}>In another experiment we demonstrated experimentally the manipulation of supercurrent in Al-AlOx-Ti Josephson tunnel junctions by injecting quasiparticles in a Ti island from two additional tunnel-coupled Al superconducting reservoirs. Both supercurrent enhancement and quenching with respect to equilibrium were achieved. We demonstrated cooling of the Ti line by quasiparticle injection from the normal state deep into the superconducting phase.</p>
        </div>
        <div className={cn('section')}>
          <h4 className={cn('title')}>Energy relaxation in a BCS superconductor</h4>
          <p className={cn('paragraph')}>We have studied quasiparticle energy relaxation at subkelvin temperatures by injecting hot electrons into a superconducting aluminium island and measuring the energy flux from quasiparticles into phonons both in the superconducting and in the normal state. The data show strong reduction of the flux at low temperatures in the superconducting state, in qualitative agreement with the theory for clean superconductors. However, quantitatively the energy flux exceeds that obtained from the theoretical predictions, suggesting an enhanced or additional relaxation process.</p>
        </div>
        <div className={cn('section')}>
          <h4 className={cn('title')}>Suspended metallic beams</h4>
          <p className={cn('paragraph')}>We have developed a simple fabrication method for reliably releasing narrow submicron-sized metal beams from the silicon substrate. The process is based on reactive ion etching and uses a conducting substrate to avoid charge-up damage and is compatible with, e.g., conventional e-beam lithography, shadow-angle metal deposition, and oxide tunnel junctions. The devices, including tunnel junctions onto the beam, function well. They can be cooled by NIS tunneling. Experiments to reveal the energy relaxation in this low dimensional system are in progress.</p>
        </div>
      </div>
    </div>
  );
};

export default Article1;
