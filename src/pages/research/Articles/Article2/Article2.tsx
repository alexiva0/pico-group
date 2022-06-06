import React from 'react';
import cnCreate from 'utils/cnCreate';
import Tooltip from 'components/Tooltip/Tooltip';
import ImageBox from 'components/ImageBox/ImageBox';
import Image1 from "./i/PicoCooler1.jpeg";
import Image2 from "./i/PicoCooler2.jpeg";
import Image3 from "./i/Chip1_A2_colored2.jpeg";
import 'pages/research/Articles/Article.css';

const cn = cnCreate('article');
const Article1: React.FC = () => {
  const triggerElement1 = React.useRef<HTMLElement | null>(null);
  const triggerElement2 = React.useRef<HTMLElement | null>(null);
  const triggerElement3 = React.useRef<HTMLElement | null>(null);
  const triggerElement4 = React.useRef<HTMLElement | null>(null);
  const triggerElement5 = React.useRef<HTMLElement | null>(null);
  const triggerElement6 = React.useRef<HTMLElement | null>(null);
  const triggerElement7 = React.useRef<HTMLElement | null>(null);

  return (
    <div className={cn()}>
      <div>
        <div className={cn('section')}>
          <h4 className={cn('title')}>Introduction</h4>
          <p className={cn('paragraph')}>Thermoelectric effects have been discovered more than 180 years ago  <span className={cn('tooltip-trigger')} ref={triggerElement1}>[1]</span>. During the last 40 years the development of practical thermoelectric refrigerators for industrial and scientific applications has made considerable progress  <span className={cn('tooltip-trigger')} ref={triggerElement2}>[2]</span>. However, the range of operating temperatures of these devices has been far above cryogenic temperatures. In the last decade, investigation of solid state refrigerators for low temperature applications, especially for the sub-kelvin temperature range has been carried out very intensively.</p>
          <p className={cn('paragraph')}>Historically the motivation of the activity concerning solid-state refrigeration originates from strict requirements of on-chip cooling  <span className={cn('tooltip-trigger')} ref={triggerElement3}>[3]</span> for proper operation of radiation sensors and quantum circuits at cryogenic temperatures. Nowadays this activity has developed into a research area on its own. On one hand, solid state refrigerators have usually lower efficiency in comparison with Joule-Thomson or Stirling gas-based coolers. On the other hand, they are more reliable, cheaper and, what is more important for applications, they can be easily scaled down to mesoscopic scales. These advantages give a unique chance to combine a refrigerator with different micro- and nanodevices on the same chip and make it in the same process cycle.</p>
        </div>
        <div className={cn('section')}>
          <h4 className={cn('title')}>Electronic cooling with large area superconducting tunnel junctions</h4>
          <ImageBox
            classes={{root: cn('image')}}
            image={Image1}
            imgAlt="Scheme 1"
            footnote="Fig 1: (a) Fabrication starts with an Al/AlOx/Cu multilayer, on which a photoresist is patterned with contact pads and holes. Then, Cu and Al are successively etched, leaving a suspended membrane of Cu along the line of adjacent holes. A second lithography and etch define the Cu central island. (b) Colored scanning electron micrograph of a sample cut using Focused Ion Beam, showing the Cu layer suspended over the region with holes. We add an additional layer of AlMn, which behaves identically to Al during fabrication, but remains a normal metal at low temperature. It proves to be an important element that helps to thermalize the overheated superconducting leads. (c) Optical microscope image of the actual device with measurement diagram. The main cooling junctions are bordered by the blue dashed line, the thermometer junctions are bordered by red dashed lines. (d) Our progress over the past few years. The dashed gray line with unit slope presents neither heating nor cooling."
          />
          <p className={cn('paragraph')}>On-chip solid-state refrigeration has long been sought for various applications in the sub-kelvin temperature regime, such as cooling astronomical detectors. In a normal metal–insulator–superconductor (NIS) junction, the gap in the superconductor density of states ensures that only high-energy electrons are allowed to tunnel out of the normal metal or, depending on the bias, low-energy ones to tunnel in, so that the electronic bath as a whole is cooled. In SINIS devices based on aluminum, the electronic temperature can drop from 300 mK down to below 100 mK at the optimum bias point. While this level of performance has been demonstrated in micron-scale devices with a cooling power in the picowatt range, a difficulty arises in devices with large-area junctions needed for a sizable cooling power approaching the nanowatt range. For instance, a high-power refrigerator has been shown to cool an external object from 290 mK down to about 250 mK. One of the main limitations to NIS coolers’ full performance is the presence in the superconducting leads of non-equilibrium quasiparticles arising from the high current running through the device. The low quasiparticle relaxation rate and thermal conductivity in a superconductor bind these hot particles in the vicinity of the junction and lead to severe overheating in the superconducting electrodes.</p>
          <p className={cn('paragraph')}>We have developed a technique <span className={cn('tooltip-trigger')} ref={triggerElement4}>[4]</span> to fabricate large-area SINIS coolers that aims at solving the abovementioned problems. First, the cooled normal metal is suspended on top of the superconducting electrodes, and, thus, decoupled from the substrate phonons. Secondly, hot quasiparticles in the leads are efficiently thermalized with a normal metal drain underneath the superconductor through a transparent tunnel barrier <span className={cn('tooltip-trigger')} ref={triggerElement5}>[5]</span>. At intermediate temperatures where electron-phonon coupling is substantial, phonons in the suspended normal metal are cooled. At low temperature, where the cooler is almost free from electron-phonon interaction, we reduce the overheating effect in the superconductor by lowering the transparency of the tunnel barrier of the cooling junction. The most powerful SINIS cooler reaches 30 mK, a five-fold reduction in temperature <span className={cn('tooltip-trigger')} ref={triggerElement6}>[6]</span>.</p>
          <ImageBox
            classes={{root: cn('image')}}
            image={Image2}
            imgAlt="Scheme 2"
            footnote="Fig 2: Cooling on the dielectric platform: the black area shows a 1×1 mm SiN membrane (100 nm thick), the 4 coolers at each corner provide 4 nW cooling power to the membrane through the Cu cold finger. White contact pads connect to the SINIS thermometers that probe the phonon temperature of the membrane. Without perforating the SiN, the membrane reaches 200 mK from 300 mK by SINIS cooling."
          />
          <p className={cn('paragraph')}>Based on the powerful cooler, we are developing a cooled platform from low stress SiN membrane with a 1×1 mm window. An image of the device is shown in Figure 2 with 4 coolers, one in each corner, with cooling power 1 nW, and a cold finger extended to the middle. Without perforation, the membrane is cooled to 200 mK from 300 mK. However, extra thermalization for the phonons in the backside of the cooler is needed, as the input current is as high as 100 µA.</p>
        </div>
        <div className={cn('section')}>
          <h4 className={cn('title')}>Coulomb gap refrigerator</h4>
          <ImageBox
            classes={{root: cn('image')}}
            image={Image3}
            imgAlt="Scheme 3"
            footnote="Fig 3: SET cooler. In (a) we demonstrate the biasing for optimal cooler operation in the two-state approximation, where the energy cost to tunnel through the first (cooling) junctions 2kT, and -(eV + 2kT) through the second one; (b) Colorized scanning electron micrograph of a SET cooler with Andreev mirrors where the light-green color stands for superconductor (Al), while the red one — for normal metal parts (Cu)."
          />
          <p className={cn('paragraph')}>A remarkably simple method of electronic refrigeration based on the Coulomb barrier for the electron tunneling in a single-electron transistor (SET) with fully normal metallic electrodes has been proposed in our group <span className={cn('tooltip-trigger')} ref={triggerElement7}>[7]</span>. The island acts as a barrier for tunneling electrons. In a voltage V biased SET, the electrons tunnel out of the island through one junction, gaining energy and heating that junction. However, the voltage bias allows the electrons to enter the island only through the other junction. With a proper gate voltage forming a potential barrier for an electron tunneling in, such a tunneling event cools that junction by an energy cost of about kT&lt;&lt;eV, Ec, where T is the temperature, Ec is the charging energy of the transistor, and k is the Boltzmann constant (see Fig. 3(a)).</p>
          <p className={cn('paragraph')}>Operation of such a cooler is based on the Coulomb gap for electron transport similarly to the superconducting gap and quantum dot coolers, which also use the energy gaps. However, the nature of this gap makes the SET cooler different from them in one important respect. While those coolers can be viewed in some respects as Peltier-effect refrigerators in which only one electrode of the tunnel junction is cooling down while the other one is heating, the removed heat in the SET cooler is split equally between the two sides of the cooling junction. Another attractive feature of the SET cooler is the possibility to adjust the gap by gate voltage to optimize the operation at a given temperature. It turns out that the SET cooler is most suitable for very low temperatures, where the standard superconducting gap based electronic coolers become inefficient.</p>
          <p className={cn('paragraph')}>Turning to the practical realization of the cooler we should note that, in general, the cooling effect is unnoticeable in a standard SET, because the lead electrodes are reservoirs thermalized by large volume and by efficient heat conduction near the junction, and the total positive power on the island leads to its heating. However, it is quite straightforward to realize a configuration, where the charge and heat currents separate effectively. The most obvious way to do this is to replace parts of the normal electrodes by superconductors (forming Andreev mirrors with direct metal-to-metal contacts) that efficiently isolate the cooled areas without influencing the relevant charge transport (see Fig. 3(b)).</p>
          <p className={cn('paragraph')}>In summary, we have proposed and analyzed an electronic cooler based on the Coulomb gap in a single -electron transistor. The adjustable (by gate voltage) gap makes the presented cooler attractive for very low temperature operation and possibly as a low temperature stage in a cascade cooler in combination with a fixed-gap superconducting refrigerator.</p>
          <p className={cn('paragraph')}>The previous results in this topic are available <a href="https://pico.aalto.fi/index046c.html?page_id=1264" target="_blank" rel="noreferrer">here</a>.</p>
        </div>
      </div>
      <Tooltip triggerElement={triggerElement1}>
        <p>Peltier, J., 1834, Ann. Chim. Phys. <span className={cn('strong')}>LVI</span>, 371.</p>
      </Tooltip>
      <Tooltip triggerElement={triggerElement2}>
        <p>Rowe, D. M., and C. M. Bhandari, 1983, Modern Thermoelectrics (Reston, Reston, VA).</p>
      </Tooltip>
      <Tooltip triggerElement={triggerElement3}>
        <p><a href="https://pico.aalto.fi/index8ce2.html?page_id=99#Pekola-Schoelkopf-Ullom_Physics-Today_(2004)" target="_blank" rel="noreferrer">Pekola, J. P., R. Schoelkopf, and J. N. Ullom, 2004, Phys. Today <span className={cn('strong')}>57</span> (5), 41.</a></p>
      </Tooltip>
      <Tooltip triggerElement={triggerElement4}>
        <p>H.Q. Nguyen, L.M.A Pascal, Z.H. Peng, O. Buisson, B. Gilles, C.B. Winkelmann, H. Courtois, Etching suspended superconducting tunnel junctions from a multilayer, Applied Physics Letters <span className={cn('strong')}>100</span>, 252602 (2012).</p>
      </Tooltip>
      <Tooltip triggerElement={triggerElement5}>
        <p><a href="https://pico.aalto.fi/indexa17b.html?page_id=1193#Nguyen-etal_NJP_(2013)" target="_blank" rel="noreferrer">H. Q. Nguyen, T. Aref, V.J. Kauppila, M. Meschke, C.B. Winkelmann, H. Courtois, J.P. Pekola, Trapping hot quasiparticles in a high power superconducting electronic cooler, New Journal of Physics, <span className={cn('strong')}>15</span>, 085013 (2013).</a></p>
      </Tooltip>
      <Tooltip triggerElement={triggerElement6}>
        <p>H. Q. Nguyen, M. Meschke, H. Courtois, and J.P. Pekola to be submitted.</p>
      </Tooltip>
      <Tooltip triggerElement={triggerElement7}>
        <p><a href="https://pico.aalto.fi/indexe4de.html?page_id=1500#Pekola-Koski-Averin_Gap-Refrigirator_PRB_(2014)" target="_blank" rel="noreferrer">J. P. Pekola, J. V. Koski, D. V. Averin, Refrigerator based on the Coulomb barrier for single-electron tunneling, arXiv:1310.1471, accepted to Physical Review B (Rapid Communications).</a></p>
      </Tooltip>
    </div>
  );
};

export default Article1;
