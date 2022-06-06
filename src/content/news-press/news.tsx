export interface INewsYear {
  year: number;
  news: INews[];
};

export interface INews {
  date: string;
  title: string;
  id: number;
  linkHref: string;
  article: () => React.ReactElement;
};

export const newsData = [
  {
    year: 2020,
    news: [
      {
        date: '21.08.2020',
        title: 'Quantum Technology Finland awards Bayan Karimi',
        id: 1,
        linkHref: 'https://pico.aalto.fi/index0971.html?p=3474',
        article: () => (
          <div>
            <p>PhD student wins prize for her groundbreaking research achievements. <br /> This year the Quantum Technology Finland Centre of Excellence (QTF) annual discovery prize is being awarded to Bayan Karimi. She was first author on this year’s Nature Communications paper “Reaching the ultimate energy resolution of a quantum detector” (https://dx.doi.org/10.1038/s41467-019-14247-2). In the work, Bayan as part of the PICO group in the Department of Applied Physics, developed a nanocalorimeter with record sensitivity. The device aims to measure energy differences in qubits at the sensitivity limits imposed by nature.</p>
            <p>The €1,000 prize is awarded by the QTF for the best discovery made by one of its members in the last year. The judging panel consisted of Mikko Merimaa (VTT), Elisabetta Paladino (University of Catania), Martti Kauranen (Tampere University). The judges praised the paper for successfully tackling fundamental questions in quantum calorimetry and opening up new experimental directions fo the field. They also specifically praised Karimi for her role as main author of the work.</p>
            <p>‘We have a bigger goal in mind,’ says Karimi. ‘It’s great to have developed this detector, but now that we have it, the real research actually begins!’ The team in the PICO group are aiming to do experimental work to get data to help the wider research community make more advances in quantum thermodynamics. ‘This detector is a beautiful testbed for quantum thermodynamics. We’re now looking to answer many long-standing questions. The dream would be to detect single microwave photons from superconducting qubits.’</p>
            <p>Karimi says that part of the key of her work were the facilities and infrastructure at Aalto, particularly that the cleanroom and equipment at OtaNano have been really valuable. ‘This prize is a recognition to all our research group PICO and coauthors, and I want to thank especially my supervisor Prof. Jukka Pekola for his support and continuous collaboration.’</p>
            <p>Karimi works in QTF and Marie Curie training network QuESTech. The work for the Nature Communications paper was funded through Academy of Finland, the European Union’s Horizon 2020 research and innovation program under the European Research Council program and Marie Sklodowska-Curie actions.</p>
            <p>More information <a href="https://www.aalto.fi/en/news/quantum-technology-finland-awards-bayan-karimi" target="_blank" rel="noreferrer">here</a>.</p>
          </div>
        ),
      },
      {
        date: '21.08.2020',
        title: 'Simon Memorial Prize 2020 to Prof. Jukka Pekola',
        id: 2,
        linkHref: 'https://pico.aalto.fi/index01d8.html?p=3468',
        article: () => (
          <div>
            <p>For fundamental achievements in quantum thermodynamics, metrology and cryogenics based on nanoscale electronic devices.</p>
            <p>More information <a href="https://www.iop.org/physics-community/special-interest-groups/low-temperature-group/simon-memorial-prize" target="_blank" rel="noreferrer">here</a>.</p>
          </div>
        ),
      },
    ],
  },
  {
    year: 2017,
    news: [
      {
        date: '20.03.2017',
        title: 'Aalto School of Science Best Doctoral Thesis 2016 Award',
        id: 3,
        linkHref: 'https://pico.aalto.fi/indexfb5e.html?p=2511',
        article: () => (
          <div>
            <p>PhD Jonne Koski from PICO group was awarded for the best doctoral thesis in 2016 by the Aalto School of Science (SCI). The award was granted for three exceptionally distinguished dissertations on 16 March, 2017. <br /> Jonne Koski currently works at the ETH Zurich. Others awarded were PhD Miika Aittala and PhD Enrico Glerean.</p>
            <p>More information <a href="https://into.aalto.fi/display/endoctoralsci/Doctoral+thesis+awards" target="_blank" rel="noreferrer">here</a>.</p>
          </div>
        ),
      },
    ],
  },
  {
    year: 2016,
    news: [
      {
        date: '19.12.2016',
        title: 'Best Physics Doctoral Dissertation 2016 Award',
        id: 4,
        linkHref: 'https://pico.aalto.fi/indexa683.html?p=2458',
        article: () => (
          <div>
            <p>PhD Jonne Koski from PICO group was awarded for the best physics doctoral dissertation in 2016 by the Department of Applied Physics. The award was granted for the third time for three outstanding doctoral dissertations in physics in Aalto University on 14 December, 2016. <br /> Jonne Koski currently works at the ETH Zurich. Others awarded were PhD Kevin Franke and PhD Fabian Schultz.</p>
            <p>More information <a href="http://physics.aalto.fi/en/current/news/2016-12-15bestawards/" target="_blank" rel="noreferrer">here</a>.</p>
          </div>
        ),
      },
    ],
  },
  {
    year: 2015,
    news: [
      {
        date: '09.02.2015',
        title: 'Realization of Maxwell demon (video)',
        id: 5,
        linkHref: 'https://pico.aalto.fi/indexdb27.html?p=1928',
        article: () => (
          <div>
            <p>The video about the successful collaboration of PICO group members, namely, Jonne Koski, Ville Maisi, and Prof. Jukka Pekola with Prof. Dmitri Averin (Stony Brook University) and Prof. Takahiro Sagawa (Tokyo University) in realization of Maxwell Demon has been published on <a href="https://www.youtube.com/embed/jB5IJCZYYbM" target="_blank" rel="noreferrer">YouTube</a>. <br /> Please see video below:</p>
            <iframe title="The Demon That Betters the World" src="https://www.youtube.com/embed/jB5IJCZYYbM" allowFullScreen></iframe>
            <p>For more information please see the underlain papers:</p>
            <ul>
              <li>
                <p>Jonne V. Koski, Ville F. Maisi, Takahiro Sagawa, Jukka P. Pekola</p>
                <p><strong>Experimental study of mutual information in a Maxwell Demon</strong></p>
                <p><a href="http://arxiv.org/abs/1405.1272" target="_blank" rel="noreferrer">arXiv:1405.1272</a>, <a href="http://journals.aps.org/prl/abstract/10.1103/PhysRevLett.113.030601" target="_blank" rel="noreferrer">Physical Review Letters <strong>113</strong>, 030601</a>.</p>
              </li>
              <li>
                <p>Jonne V. Koski, Ville F. Maisi, Jukka P. Pekola, Dmitri V. Averin</p>
                <p><strong>Experimental realization of a Szilard engine with a single electron</strong></p>
                <p><a href="http://arxiv.org/abs/1402.5907" target="_blank" rel="noreferrer">arXiv:1402.5907</a>, <a href="http://www.pnas.org/content/111/38/13786.abstract" target="_blank" rel="noreferrer">PNAS <strong>111</strong>, 13786</a>.</p>
              </li>
            </ul>
          </div>
        ),
      },
    ],
  },
  {
    year: 2014,
    news: [
      {
        date: '19.12.2014',
        title: 'Best Physics Doctoral Dissertation of 2014 Award',
        id: 6,
        linkHref: 'https://pico.aalto.fi/indexd614.html?p=1851',
        article: () => (
          <div>
            <p>PhD Ville Maisi from the O.V. Lounasmaa Laboratory was awarded for the best physics doctoral dissertation in 2014 by the Aalto School of Science (SCI). The award was acknowledged for the first time for three outstanding doctoral dissertations in physics in Aalto University on 18 December, 2014. <br /> Ville Maisi currently works at the ETH Zurich. Others awarded were PhD Patrick Grahn and PhD Miikka Heikkinen who defended their dissertation in the Department of Applied Physics. <br />Please see more detailed information <a href="http://physics.aalto.fi/blog/2015/01/12/best-physics-doctoral-dissertation-prizes-awarded/" target="_blank" rel="noreferrer">here</a>.</p>
          </div>
        ),
      },
      {
        date: '01.02.2014',
        title: 'Doctoral Dissertation Awards 2013 at Aalto SCI',
        id: 7,
        linkHref: 'https://pico.aalto.fi/index0f90.html?p=1529',
        article: () => (
          <div>
            <p>PhD Olli-Pentti Saira from the O.V: Lounasmaa Laboratory was awarded for the best doctoral dissertation in 2013 by the Aalto School of Science (SCI). The award is presented in the annual get together of the Doctoral Programme of SCI on 18 March, 2014. Saira currently works at the Kavli Institute of Nanoscience Delft. Others awarded were PhD Mari Ijäs who defended her dissertation in the Department of Applied Physics and PhD Jefrey Lijffit from the Department of Information and Computer Science. For preliminary information on the annual get together, please see in <a href="https://inside.aalto.fi/display/tapahtumat/Get+together+with+Doctoral+Programme+in+Science" target="_blank" rel="noreferrer">Inside</a>.</p>
            <p>The information is taken from <a href="http://physics.aalto.fi/blog/2014/01/28/doctoral-dissertation-awards-2013-at-aalto-sci/" target="_blank" rel="noreferrer">here</a></p>
          </div>
        ),
      },
    ],
  },
  {
    year: 2013,
    news: [
      {
        date: '02.07.2013',
        title: 'Entropy Production in a Single-Electron Box published in Nature Physics',
        id: 8,
        linkHref: 'https://pico.aalto.fi/indexe23a.html?p=1384',
        article: () => (
          <div>
            <p>Our paper entitled <strong>“Distribution of Entropy Production in a Single-Electron Box”</strong> has been published as a Letter in <strong>Nature Physics</strong>.</p>
            <p>Congratulations to <a href="http://ltl.tkk.fi/PICO/wordpress/?page_id=480" target="_blank" rel="noreferrer">Jonne Koski</a> and co-authors!</p>
            <p>Here is the paper abstract:</p>
            <blockquote>
              Recently, the fundamental laws of thermodynamics have been reconsidered for small systems. The discovery of the fluctuation relations has spurred theoretical and experimental studies. The concept of entropy production has been extended to the microscopic level by considering stochastic trajectories of a system coupled to a heat bath. However, this has not been studied experimentally if there are multiple thermal baths present. Here, we measure, with high precision, the distributions of microscopic entropy production in a single-electron box consisting of two islands with a tunnel junction. The islands are coupled to separate heat baths at different temperatures, maintaining a steady thermal non-equilibrium. We demonstrate that stochastic entropy production from trajectories of electronic transitions is related to thermodynamic entropy production from dissipated heat in the respective thermal baths. We verify experimentally that the fluctuation relations for both definitions are satisfied. Our results reveal the subtlety of irreversible entropy production in non-equilibrium.
            </blockquote>
            <p>Read a synopsis <a href="http://www.aalto.fi/en/current/news/view/2013-08-13/" target="_blank" rel="noreferrer">here</a>.</p>
            <p>Read the full text <a href="http://dx.doi.org/10.1038/nphys2711" target="_blank" rel="noreferrer">here</a>.</p>
          </div>
        ),
      },
      {
        date: '28.03.2013',
        title: '28.3.2013, Olli defends his Ph.D.',
        id: 9,
        linkHref: 'https://pico.aalto.fi/indexfc88.html?p=1292',
        article: () => (
          <div>
            <p>Our guest <strong>Philip Wollfarth</strong>, graduate student from Alexander Shnirman’s group at Karlsruhe Institute of Technology, will give a talk at our weekly group meeting.</p>
            <p>Time: 25.3.2013, 9am</p>
            <p>Place: Micronova, small lecture hall</p>
            <p>Title: <strong>Full counting statistics applied to Cooper pair pumping</strong></p>
            <p>Here is the paper abstract:</p>
            <blockquote>
              We investigate geometric charge pumping in superconducting Josephson devices using the method of Full Counting Statistics. In previous studies the expectation value of the current operator was calculated and a very delicate handling of the dissipative master equation governing the dynamics of the system was required. E.g., the rotating wave (secular) approximation turned to be non-charge-conserving. We include the counting field (charge measuring device) into the master equation and investigate the influence of voltage fluctuation on the pumping process.
            </blockquote>
          </div>
        ),
      },
      {
        date: '21.03.2013',
        title: '25.3.2013, P. Wollfarth’s talk',
        id: 10,
        linkHref: 'https://pico.aalto.fi/index3003.html?p=1256',
        article: () => (
          <div>
            <p>On Thursday, March 28, 2013 <strong>Olli-Pentti Saira</strong> will defend his doctoral thesis entitled <strong>“Electrostatic control of quasiparticle transport in superconducting hybrid nanostructures”</strong>.</p>
            <p>The defence will take place in room TU1 of TUAS-talo at 12:15.</p>
            <p>Olli-Pentti’s opponent is <strong>Prof. Dr. Gerd Schön</strong> from Karlsruhe Institute of Technology, Germany.</p>
            <p>Olli-Pentti’s thesis is available <a href="http://lib.tkk.fi/Diss/2013/isbn9789526050768/isbn9789526050768.pdf" target="_blank" rel="noreferrer">here</a>.</p>
            <p>Congrats Olli-Pentti on your successful defence! See some pictures <a href="https://ltl.tkk.fi/wiki/Special%3APicturearchive?g2_itemId=40171" target="_blank" rel="noreferrer">here</a>.</p>
          </div>
        ),
      },
    ],
  },
];
