import React from 'react';
import cnCreate from 'utils/cnCreate';
import Tooltip from 'components/Tooltip/Tooltip';
import ImageBox from 'components/ImageBox/ImageBox';
import Image1 from "./i/demon.jpeg";
import Image2 from "./i/bistability.jpeg";
import Image3 from "./i/Equation.jpeg";
import Image4 from "./i/FT.jpeg";
import 'pages/research/Articles/Article.css';

const cn = cnCreate('article');
const Article1: React.FC = () => {
  const triggerElement1 = React.useRef<HTMLElement | null>(null);
  const triggerElement2 = React.useRef<HTMLElement | null>(null);

  return (
    <div className={cn()}>
      <div>
        <div className={cn('section')}>
          <div className={cn('video-box')}>
            <iframe className={cn("video")} title="The Demon That Betters the World" src="http://www.youtube.com/embed/jB5IJCZYYbM?version=3&amp;rel=1&amp;fs=1&amp;autohide=2&amp;showsearch=0&amp;showinfo=1&amp;iv_load_policy=1&amp;wmode=transparent"></iframe>
          </div>
        </div>
        <div className={cn('section')}>
          <h4 className={cn('title')}>Experimental realization of a Maxwell’s Demon with a single electron</h4>
          <ImageBox classes={{root: cn('image')}} image={Image1} imgAlt="Scheme 1" footnote="Figure 1" />
          <p className={cn('paragraph')}><a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Maxwell%27s_demon">Maxwell’s Demon</a> extracts the energy from a thermal bath by monitoring the microscopic state of a system and generating appropriate feedback signals based of this information. We have successfully realized <span className={cn('tooltip-trigger')} ref={triggerElement1}>[1]</span> a Maxwell’s Demon in a very simple device – single-electron box (SEB), in which an applied gate voltage very accurately controls the number of electrons. In our realization, the SEB consists of two small metallic islands connected by a tunnel junction. The SEB is maintained at the dilution-refrigerator temperatures in the 0.1-K range. The difference of the chemical potentials between the islands is controlled by the gate voltage Vg applied to one of them. Initially, Vg is such that one extra electron is found equally likely on either of the islands (Fig. 1C). This “degeneracy point” is realized when the gate-offset charge ng = CgVg/e, where Cg is the capacitance between the gate and the SEB, is half-integer. A single-electron transistor (SET) electrometer, which can be seen in Fig. 1C and D, Bottom Right, detects which island the electron is on.  Then, ng is changed rapidly to capture electron on the corresponding island by increasing the energy required for tunneling out. Finally, ng is moved slowly back to the initial degeneracy value, extracting energy from the heat bath in the process, and completing the cycle. An example of four such consecutive experimental cycles is shown in Fig. 1E. Dotted vertical lines denote the time when the measurement is performed. We observe that the feedback signal indeed locks the extra electron to the measured state, but the charge starts to hop again when ng is moved toward the degeneracy point.
          We provide, to our knowledge, the first demonstration of extracting nearly kBT ln 2 of work for one bit of information.</p>
        </div>
        <div className={cn('section')}>
          <h4 className={cn('title')}>Stochastic Thermodynamics</h4>
          <p className={cn('paragraph')}>Stochastic thermodynamics deals with mesoscopic systems, in which fluctuations of thermodynamic parameters play a very important role. Main examples of such systems are biological objects and electronic nanostructures. The statistics of fluctuations in such systems is governed by famous <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Fluctuation_theorem">fluctuation theorem</a>, which can be formulated in various forms.</p>
          <p className={cn('paragraph')}>Our group has long experience in fabricating single-electron devices, which provide an ideal test ground for stochastic thermodynamics. We fabricate single-electron boxes coupled to each other and to metallic leads by highly resistive tunnel junctions and suppress the rates of electron tunneling in such structures to the range between 1 and 1000 Hz. Connecting such structure to a single-electron transistor electrometer, we can count every electron passing through the device. In this way, we collect the full statistics of electron tunneling events, which allows us to test, for example, a fluctuation theorem or any other theoretical prediction. One of the examples is Maxwell’s demon discussed above.</p>
          <ImageBox classes={{root: cn('image')}} image={Image2} imgAlt="Scheme 2" footnote="Figure 2." />
          <p className={cn('paragraph')}>As a second example, we will discuss the distribution of current fluctuations in a bistable conductor <span className={cn('tooltip-trigger')} ref={triggerElement2}>[2]</span>. In this experiment we realize a controllable bistability, that causes current fluctuations in a nearby conductor. Namely, the tunneling of electrons in a single-electron box makes the conductance switch between two levels in a nearby single-electron transistor (SET) (see Fig. 2a) whose current is monitored in real time, Fig. 2b. With this setup, we can accurately measure the distribution of current fluctuations in a bistable conductor (SET), including the exponentially rare fluctuations in the tails. For this system, theory predicts that the logarithm of the current probability distribution should have the characteristic shape of a tilted ellipse. Our measurements confirm that with high accuracy, see Fig. 2c. Another theoretical prediction is the fluctuation theorem for the current distribution P. For this particular system it can be formulated in the form</p>
          <ImageBox classes={{root: cn('image')}} image={Image3} imgAlt="Scheme 3" />
          <p className={cn('paragraph')}>where τ is the observation time, and Γ± are the rates of switching between low and high current values. Also this prediction is fully confirmed by our experiment, see Fig. 3.</p>
          <ImageBox classes={{root: cn('image')}} image={Image4} imgAlt="Scheme 4" footnote="Figure 3." />
        </div>
      </div>
      <Tooltip triggerElement={triggerElement1}>
        <p>Jonne V. Koski, Ville F. Maisi, Jukka P. Pekola, Dmitri V. Averin. Experimental realization of a Szilard engine with a single electron, PNAS <span className={cn('strong')}>111</span>, 13786 (2014).</p>
      </Tooltip>
      <Tooltip triggerElement={triggerElement2}>
        <p>S. Singh, J. T. Peltonen, I. M. Khaymovich, J. V. Koski, C. Flindt, and J. P. Pekola. Distribution of current fluctuations in a bistable conductor, Phys. Rev. B <span className={cn('strong')}>94</span>, 241407(R) (2016).</p>
      </Tooltip>
    </div>
  );
};

export default Article1;
