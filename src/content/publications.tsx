export interface IPublicationsYear {
    year: string,
    publications: IPublicationsList[],
};

export interface IPublicationsList {
    participants: string,
    title: string,
    links: IPublicationLink[],
};

export interface IPublicationLink {
    linkText: string,
    linkHref: string,
};

export interface IPhdThesis {
    title: string,
    linkText: string,
    linkHref: string,
};

export const publicationsData = [
    {
        year: 2021,
        publications: [
            {
                participants: 'Matti Tomi, Mikhail R. Samatov, Andrey S. Vasenko, Antti Laitinen, Pertti Hakonen, Dmitry S. Golubev',
                title: 'Transport in Josephson junctions with a graphene interlayer',
                links: [
                    {
                        linkText: 'arXiv:2106.07503',
                        linkHref: 'https://arxiv.org/abs/2106.07503',
                    },
                ],
            },
            {
                participants: 'Bayan Karimi, Jukka P. Pekola',
                title: 'Down-conversion of quantum fluctuations of photonic heat current in a circuit',
                links: [
                    {
                        linkText: 'arXiv:2104.09238',
                        linkHref: 'https://arxiv.org/abs/2104.09238',
                    },
                ],
            },
            {
                participants: 'E. T. Mannila, V. F. Maisi, J. P. Pekola',
                title: 'A self-calibrating superconducting pair-breaking detector',
                links: [
                    {
                        linkText: 'arXiv:2102.02254',
                        linkHref: 'https://arxiv.org/abs/2102.02254',
                    },
                ],
            },
            {
                participants: 'E. T. Mannila, P. Samuelsson, S. Simbierowicz, J. T. Peltonen, V. Vesterinen, L. Grönberg, J. Hassel, V. F. Maisi, J. P. Pekola',
                title: 'A superconductor free of quasiparticles for seconds',
                links: [
                    {
                        linkText: 'arXiv:2102.00484',
                        linkHref: 'https://arxiv.org/abs/2102.00484',
                    },
                ],
            },
            {
                participants: 'Dmitry S. Golubev, Evgeni V. Il’ichev, and Leonid S. Kuzmin',
                title: 'Single-Photon Detection with a Josephson Junction Coupled to a Resonator',
                links: [
                    {
                        linkText: 'Phys. Rev. Appl. <b>16</b>, 014025 (2021)',
                        linkHref: 'https://doi.org/10.1103/PhysRevApplied.16.014025',
                    },
                ],
            },
            {
                participants: 'Bayan Karimi, Hans He, Yu-Cheng Chang, Libin Wang, Jukka P. Pekola, Rositsa Yakimova, Naveen Shetty, Joonas T. Peltonen, Samuel Lara-Avila, Sergey Kubatkin',
                title: 'Electron-phonon coupling of epigraphene at millikelvin temperatures',
                links: [
                    {
                        linkText: 'arXiv:2009.14038',
                        linkHref: 'https://arxiv.org/abs/2009.14038',
                    },
                    {
                        linkText: 'Appl. Phys. Lett. <b>118</b>, 103102 (2021)',
                        linkHref: 'https://aip.scitation.org/doi/full/10.1063/5.0031315',
                    },
                ],
            },
            {
                participants: 'Gonzalo Manzano, Diego Subero, Olivier Maillet, Rosario Fazio, Jukka P. Pekola, and Édgar Roldán',
                title: 'Thermodynamics of Gambling Demons',
                links: [
                    {
                        linkText: 'arXiv:2008.01630',
                        linkHref: 'https://arxiv.org/abs/2008.01630',
                    },
                    {
                        linkText: 'Phys. Rev. Lett. <b>126</b>, 080603 (2021)',
                        linkHref: 'https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.126.080603',
                    },
                ],
            },
            {
                participants: 'Z. B. Tan, A. Laitinen, N. S. Kirsanov, A. Galda, M. Haque, A. Savin, D. S. Golubev, V. M. Vinokur, G. B. Lesovik, P. J. Hakonen',
                title: 'Thermoelectric current in a graphene Cooper pair splitter',
                links: [
                    {
                        linkText: 'arXiv:2005.13286',
                        linkHref: 'https://arxiv.org/abs/2005.13286',
                    },
                    {
                        linkText: 'Nat. Comm. <b>12</b>, 138 (2021)',
                        linkHref: 'https://www.nature.com/articles/s41467-020-20476-7',
                    },
                ],
            },
        ],
    },
    {
        year: 2020,
        publications: [
            {
                participants: 'Jukka P. Pekola, Bayan Karimi',
                title: 'Qubit decay in circuit quantum thermodynamics',
                links: [
                    {
                        linkText: 'arXiv:2010.11122',
                        linkHref: 'https://arxiv.org/abs/2010.11122',
                    },
                ],
            },
            {
                participants: 'Brecht Donvil, Paolo Muratore-Ginanneschi and Dmitry Golubev',
                title: 'Exactly solvable model of calorimetric measurements',
                links: [
                    {
                        linkText: 'arXiv:2007.15923',
                        linkHref: 'https://arxiv.org/abs/2007.15923',
                    },
                    {
                        linkText: 'Phys. Rev. B <b>102</b>, 245401 (2020)',
                        linkHref: 'https://doi.org/10.1103/PhysRevB.102.245401',
                    },
                ],
            },
            {
                participants: 'Gunta Kunakova, Ananthu P. Surendran, Domenico Montemurro, Matteo Salvato, Dmitry Golubev, Jana Andzane, Donats Erts, Thilo Bauch, and Floriana Lombardi',
                title: 'Topological insulator nanoribbon Josephson junctions: Evidence for size effects in transport properties',
                links: [
                    {
                        linkText: 'arXiv:2011.04787',
                        linkHref: 'https://arxiv.org/abs/2011.04787',
                    },
                    {
                        linkText: ' J. Appl. Phys. <b>128</b>, 194304 (2020)',
                        linkHref: 'https://doi.org/10.1063/5.0022126',
                    },
                ],
            },
            {
                participants: 'Cyril Elouard, George Thomas, Olivier Maillet, Jukka P. Pekola, Andrew N. Jordan',
                title: 'Quantifying the quantum heat contribution from a driven superconducting circuit',
                links: [
                    {
                        linkText: 'arXiv:2001.10367',
                        linkHref: 'https://arxiv.org/abs/2001.10367',
                    },
                    {
                        linkText: 'Phys. Rev. E <b>102</b>, 030102 (2020)',
                        linkHref: 'https://doi.org/10.1103/PhysRevE.102.030102',
                    },
                ],
            },
            {
                participants: 'Eduard Ilin, Irina Burkova, Xiangyu Song, Michael Pak, Dmitri S. Golubev, and Alexey Bezryadin',
                title: 'Superconducting phase transition in inhomogeneous chains of superconducting islands',
                links: [
                    {
                        linkText: 'Phys. Rev. B <b>102</b>, 134502 (2020)',
                        linkHref: 'https://journals.aps.org/prb/abstract/10.1103/PhysRevB.102.134502',
                    },
                ],
            },
            {
                participants: 'George Thomas, Azat Gubaydullin, Dmitry S. Golubev, Jukka P. Pekola',
                title: 'Thermally pumped on-chip maser',
                links: [
                    {
                        linkText: 'arXiv:2003.12199',
                        linkHref: 'https://arxiv.org/abs/2003.12199',
                    },
                    {
                        linkText: 'Phys. Rev. B <b>102</b>, 104503 (2020)',
                        linkHref: 'https://link.aps.org/doi/10.1103/PhysRevB.102.104503',
                    },
                ],
            },
            {
                participants: 'E.S. Tikhonov, A.O. Denisov, S.U. Piatrusha, I.N. Khrapach, J.P. Pekola, B. Karimi, R.N. Jabdaraghi, V.S. Khrapai',
                title: 'Spatial and energy resolution of electronic states by shot noise',
                links: [
                    {
                        linkText: 'arXiv:2001.07563',
                        linkHref: 'https://arxiv.org/abs/2001.07563',
                    },
                    {
                        linkText: 'Phys. Rev. B <b>102</b>, 085417 (2020)',
                        linkHref: 'https://doi.org/10.1103/PhysRevB.102.085417',
                    },
                ],
            },
            {
                participants: 'Olivier Maillet, Diego A. Subero Rengel, Joonas T. Peltonen, Dmitry S. Golubev, Jukka P. Pekola',
                title: 'Electric field control of radiative heat transfer in a superconducting circuit',
                links: [
                    {
                        linkText: 'arXiv:2002.11591',
                        linkHref: 'https://arxiv.org/abs/2002.11591',
                    },
                    {
                        linkText: 'Nat. Comm. <b>11</b>, 4326 (2020)',
                        linkHref: 'https://www.nature.com/articles/s41467-020-18163-8',
                    },
                ],
            },
            {
                participants: 'Marco Marín-Suárez, Joonas T. Peltonen, Jukka P. Pekola',
                title: 'Active quasiparticle suppression in a non-equilibrium superconductor',
                links: [
                    {
                        linkText: 'arXiv:2002.12052',
                        linkHref: 'https://arxiv.org/abs/2002.12052',
                    },
                    {
                        linkText: 'Nano Lett. <b>20</b>, 5065 (2020).',
                        linkHref: 'https://doi.org/10.1021/acs.nanolett.0c01264',
                    },
                ],
            },
            {
                participants: 'Jorden Senior, Azat Gubaydullin, Bayan Karimi, Joonas T. Peltonen, Joachim Ankerhold, Jukka P. Pekola',
                title: 'Heat rectification via a superconducting artificial atom',
                links: [
                    {
                        linkText: 'arXiv:1908.05574',
                        linkHref: 'https://arxiv.org/abs/1908.05574',
                    },
                    {
                        linkText: 'Comm. Phys. <b>3</b>, 40 (2020)',
                        linkHref: 'https://doi.org/10.1038/s42005-020-0307-5',
                    },
                ],
            },
            {
                participants: 'Bayan Karimi, Danilo Nikolić, Tuomas Tuukkanen, Joonas T. Peltonen, Wolfgang Belzig, and Jukka P. Pekola',
                title: 'Optimized Proximity Thermometer for Ultrasensitive Detection',
                links: [
                    {
                        linkText: 'arXiv:1911.02844',
                        linkHref: 'https://arxiv.org/abs/1911.02844',
                    },
                    {
                        linkText: 'Phys. Rev. Appl. <b>13</b>, 054001 (2020)',
                        linkHref: 'https://doi.org/10.1103/PhysRevApplied.13.054001',
                    },
                ],
            },
            {
                participants: 'Bayan Karimi, Jukka P. Pekola',
                title: 'Quantum trajectory analysis of single microwave photon detection by nanocalorimetry',
                links: [
                    {
                        linkText: 'arXiv:2001.01943',
                        linkHref: 'https://arxiv.org/abs/2001.01943',
                    },
                    {
                        linkText: 'Phys. Rev. Lett. <b>124</b>, 170601 (2020)',
                        linkHref: 'https://doi.org/10.1103/PhysRevLett.124.170601',
                    },
                ],
            },
            {
                participants: 'Olli-Pentti Saira, Matthew H. Matheny, Libin Wang, Jukka Pekola, Michael Roukes',
                title: 'Modification of electron-phonon coupling by micromachining and suspension',
                links: [
                    {
                        linkText: 'arXiv:1910.10126',
                        linkHref: 'https://arxiv.org/abs/1910.10126',
                    },
                    {
                        linkText: 'J Appl. Phys. <b>127</b>, 024307 (2020)',
                        linkHref: 'https://doi.org/10.1063/1.5132948',
                    },
                ],
            },
            {
                participants: 'B. Karimi, F. Brange, P. Samuelsson, and J. P. Pekola',
                title: 'Reaching the ultimate energy resolution of a quantum detector',
                links: [
                    {
                        linkText: 'arXiv:1904.05041',
                        linkHref: 'https://arxiv.org/abs/1904.05041',
                    },
                    {
                        linkText: 'Nat. Comm. <b>11</b>, 367 (2020)',
                        linkHref: 'https://www.nature.com/articles/s41467-019-14247-2',
                    },
                ],
            },
        ],
    },
    {
        year: 2019,
        publications: [
            {
                participants: 'L. B. Wang, D. S. Golubev, Y. M. Galperin, J. P. Pekola',
                title: 'Dynamic thermal relaxation in copper films',
                links: [
                    {
                        linkText: 'arXiv:1910.09448',
                        linkHref: 'https://arxiv.org/abs/1910.09448',
                    },
                ],
            },
            {
                participants: 'George Thomas, Debmalya Das, and Sibasish Ghosh',
                title: 'Quantum heat engine based on level degeneracy',
                links: [
                    {
                        linkText: 'arXiv:1802.07681',
                        linkHref: 'https://arxiv.org/abs/1802.07681',
                    },
                    {
                        linkText: 'Phys. Rev. E <b>100</b>, 012123 (2019)',
                        linkHref: 'https://journals.aps.org/pre/abstract/10.1103/PhysRevE.100.012123',
                    },
                ],
            },
            {
                participants: 'Dmitry Golubev, Thilo Bauch, Floriana Lombardi',
                title: 'Josephson Effect in Graphene and 3D Topological Insulators',
                links: [
                    {
                        linkText: 'Springer Series in Materials Science, <b>286</b>, 529 (2019)',
                        linkHref: 'https://link.springer.com/chapter/10.1007%2F978-3-030-20726-7_13',
                    },
                ],
            },
            {
                participants: 'George Thomas, Jukka P. Pekola, Dmitry S. Golubev',
                title: 'Photonic heat transport across a Josephson junction',
                links: [
                    {
                        linkText: 'arXiv:1907.02885',
                        linkHref: 'https://arxiv.org/abs/1907.02885',
                    },
                    {
                        linkText: 'Phys. Rev. B <b>100</b>, 094508 (2019)',
                        linkHref: 'https://doi.org/10.1103/PhysRevB.100.094508',
                    },
                ],
            },
            {
                participants: 'Ken Funo, Neill Lambert, Bayan Karimi, Jukka P. Pekola, Yuta Masuyama, and Franco Nori',
                title: 'Speeding up a quantum refrigerator via counterdiabatic driving',
                links: [
                    {
                        linkText: 'arXiv:1905.03480',
                        linkHref: 'https://arxiv.org/abs/1905.03480',
                    },
                    {
                        linkText: 'Phys. Rev. B <b>100</b>, 035407 (2019)',
                        linkHref: 'https://doi.org/10.1103/PhysRevB.100.035407',
                    },
                ],
            },
            {
                participants: 'Brecht Donvil, Paolo Muratore-Ginanneschi, and Jukka P. Pekola',
                title: 'Hybrid master equation for calorimetric measurements',
                links: [
                    {
                        linkText: 'Phys. Rev. A <b>99</b>, 042127 (2019)',
                        linkHref: 'https://doi.org/10.1103/PhysRevA.99.042127',
                    },
                ],
            },
            {
                participants: 'Jukka P. Pekola, Bayan Karimi, George Thomas, Dmitri V. Averin',
                title: 'Supremacy of incoherent sudden cycles',
                links: [
                    {
                        linkText: 'arXiv:1812.10933',
                        linkHref: 'https://arxiv.org/abs/1812.10933',
                    },
                    {
                        linkText: 'Phys. Rev. B <b>100</b>, 085405 (2019)',
                        linkHref: 'https://doi.org/10.1103/PhysRevB.100.085405',
                    },
                ],
            },
            {
                participants: 'L. B. Wang, O.-P. Saira, D. S. Golubev, J. P. Pekola',
                title: 'Crossover between electron-phonon and boundary resistance limited thermal relaxation in copper films',
                links: [
                    {
                        linkText: 'arXiv:1903.10848',
                        linkHref: 'https://arxiv.org/abs/1903.10848',
                    },
                    {
                        linkText: 'Phys. Rev. Appl. <b>12</b>, 024051 (2019)',
                        linkHref: 'https://doi.org/10.1103/PhysRevApplied.12.024051',
                    },
                ],
            },
            {
                participants: 'E. T. Mannila, V. F. Maisi, H. Q. Nguyen, C. M. Marcus, J. P. Pekola',
                title: 'Detecting parity effect in a superconducting device in the presence of parity switches',
                links: [
                    {
                        linkText: 'arXiv:1807.01733',
                        linkHref: 'https://arxiv.org/abs/1807.01733',
                    },
                    {
                        linkText: 'Phys. Rev. B <b>100</b>, 020502(R) (2019).',
                        linkHref: 'https://doi.org/10.1103/PhysRevB.100.020502',
                    },
                ],
            },
            {
                participants: 'A. V. Samokhvalov, I. A. Shereshevskii, N. K. Vdovicheva, M. Taupin, I. M. Khaymovich, J. P. Pekola, A. S. Mel’nikov',
                title: 'Electronic structure of mesoscopic superconducting disk: Quasiparticle tunneling between the giant vortex core and disk edge',
                links: [
                    {
                        linkText: 'arXiv:1901.01263',
                        linkHref: 'https://arxiv.org/abs/1901.01263',
                    },
                    {
                        linkText: 'Phys. Rev. B <b>99</b>, 134512 (2019)',
                        linkHref: 'https://doi.org/10.1103/PhysRevB.99.134512',
                    },
                ],
            },
            {
                participants: 'E. Trabaldo, R. Arpaia, M. Arzeo, E. Andersson, D. Golubev, F. Lombardi and T. Bauch',
                title: 'Transport and noise properties of YBCO nanowire based nanoSQUIDs',
                links: [
                    {
                        linkText: 'Supercond. Sci. Technol. <b>32</b>, 073001 (2019)',
                        linkHref: 'https://iopscience.iop.org/article/10.1088/1361-6668/ab1814',
                    },
                ],
            },
            {
                participants: 'Y.-C. Chang, B. Karimi, J. Senior, A. Ronzani, J. T. Peltonen, H.-S. Goan, C.-D. Chen, and J. P. Pekola',
                title: 'Utilization of the superconducting transition for characterizing low-quality-factor superconducting resonators',
                links: [
                    {
                        linkText: 'arXiv:1904.01781',
                        linkHref: 'https://arxiv.org/abs/1904.01781',
                    },
                    {
                        linkText: 'Appl. Phys. Lett. <b>115</b>, 022601 (2019)',
                        linkHref: 'https://doi.org/10.1063/1.5098310',
                    },
                ],
            },
            {
                participants: 'S. Lara-Avila, A. Danilov, D. Golubev, H. He, K. H. Kim, R. Yakimova, F. Lombardi, T. Bauch, S. Cherednichenko, and S. Kubatkin',
                title: 'Towards quantum-limited coherent detection of terahertz waves in charge-neutral graphene',
                links: [
                    {
                        linkText: 'arXiv:1904.03247',
                        linkHref: 'https://arxiv.org/abs/1904.03247',
                    },
                    {
                        linkText: 'Nat. Astronomy (2019)',
                        linkHref: 'https://doi.org/10.1038/s41550-019-0843-7',
                    },
                ],
            },
            {
                participants: 'Paolo A. Erdman, Joonas T. Peltonen, Bibek Bhandari, Bivas Dutta, Hervé Courtois, Rosario Fazio, Fabio Taddei, Jukka P. Pekola',
                title: 'Non-Linear Thermovoltage in a Single-Electron Transistor',
                links: [
                    {
                        linkText: 'arXiv:1812.06514',
                        linkHref: 'https://arxiv.org/abs/1812.06514',
                    },
                    {
                        linkText: 'Phys. Rev. B <b>99</b>, 165405 (2019)',
                        linkHref: 'https://doi.org/10.1103/PhysRevB.99.165405',
                    },
                ],
            },
            {
                participants: 'I. Pietikäinen, J. Tuorila, D. S. Golubev, and G. S. Paraoanu',
                title: 'Photon blockade and the quantum-to-classical transition in the driven-dissipative Josephson pendulum coupled to a resonator',
                links: [
                    {
                        linkText: 'arXiv:1901.05655',
                        linkHref: 'https://arxiv.org/abs/1901.05655',
                    },
                    {
                        linkText: 'Phys. Rev. A <b>99</b>, 063828 (2019)',
                        linkHref: 'https://doi.org/10.1103/PhysRevA.99.063828',
                    },
                ],
            },
            {
                participants: 'Shilpi Singh, Paul Menczel, Dmitry S. Golubev, Ivan M. Khaymovich, Joonas T. Peltonen, Christian Flindt, Keiji Saito, Édgar Roldán, Jukka P. Pekola',
                title: 'Universal First-Passage-Time Distribution of Non-Gaussian Currents',
                links: [
                    {
                        linkText: 'arXiv:1809.06870',
                        linkHref: 'https://arxiv.org/abs/1809.06870',
                    },
                    {
                        linkText: 'Phys. Rev. Lett. <b>122</b>, 230602 (2019)',
                        linkHref: 'https://doi.org/10.1103/PhysRevLett.122.230602',
                    },
                ],
            },
            {
                participants: 'Olivier Maillet, Paolo A. Erdman, Vasco Cavina, Bibek Bhandari, Elsa T. Mannila, Joonas T. Peltonen, Andrea Mari, Fabio Taddei, Christopher Jarzynski, Vittorio Giovannetti, Jukka P. Pekola',
                title: 'Optimal probabilistic work extraction beyond the free energy difference with a single-electron device',
                links: [
                    {
                        linkText: 'arXiv:1810.06274',
                        linkHref: 'https://arxiv.org/abs/1810.06274',
                    },
                    {
                        linkText: 'Phys. Rev. Lett. <b>122</b>, 150604 (2019)',
                        linkHref: 'https://doi.org/10.1103/PhysRevLett.122.150604',
                    },
                ],
            },
            {
                participants: 'Dmitry S. Golubev, Andrei D. Zaikin',
                title: 'Cross-correlated shot noise in three-terminal superconducting hybrid nanostructures',
                links: [
                    {
                        linkText: 'arXiv:1902.05476',
                        linkHref: 'https://arxiv.org/abs/1902.05476',
                    },
                    {
                        linkText: ' hys. Rev. B <b>99</b>, 144504 (2019)',
                        linkHref: 'https://doi.org/10.1103/PhysRevB.99.144504',
                    },
                ],
            },
            {
                participants: 'Shilpi Singh, Édgar Roldán, Izaak Neri, Ivan M. Khaymovich, Dmitry S. Golubev, Ville F. Maisi, Joonas T. Peltonen, Frank Jülicher, Jukka P. Pekola',
                title: 'Extreme reductions of entropy in an electronic double dot',
                links: [
                    {
                        linkText: 'arXiv:1712.01693',
                        linkHref: 'https://arxiv.org/abs/1712.01693',
                    },
                    {
                        linkText: 'Phys. Rev. B <b>99</b>, 115422 (2019)',
                        linkHref: 'https://doi.org/10.1103/PhysRevB.99.115422',
                    },
                ],
            },
            {
                participants: 'N. S. Kirsanov, Z. B. Tan, D. S. Golubev, P. J. Hakonen, G. B. Lesovik',
                title: 'Heat Switch and Thermoelectric Effects Based on Split Cooper Pairs and Elastic Co-tunneling',
                links: [
                    {
                        linkText: 'arXiv:1806.09838',
                        linkHref: 'https://arxiv.org/abs/1806.09838',
                    },
                    {
                        linkText: 'Phys. Rev. B <b>99</b>, 115127 (2019)',
                        linkHref: 'https://doi.org/10.1103/PhysRevB.99.115127',
                    },
                ],
            },
            {
                participants: 'J. P. Pekola, I. M. Khaymovich',
                title: 'Thermodynamics in Single-Electron Circuits and Superconducting Qubits',
                links: [
                    {
                        linkText: 'arXiv:1812.06333',
                        linkHref: 'https://arxiv.org/abs/1812.06333',
                    },
                    {
                        linkText: 'Annu. Rev. Condens. Matter <b>10</b>, 193 (2019)',
                        linkHref: 'https://doi.org/10.1146/annurev-conmatphys-033117-054120',
                    },
                ],
            },
            {
                participants: 'Dmitry S. Golubev, Artem V. Galaktionov, and Andrei D. Zaikin',
                title: 'Intrinsic Dissipation in Superconducting Junctions Probed by Qubit Spectroscopy',
                links: [
                    {
                        linkText: 'arXiv:1810.00750',
                        linkHref: 'https://arxiv.org/abs/1810.00750',
                    },
                    {
                        linkText: 'Phys. Status Solidi RRL <b>13</b>, 1800256 (2019)',
                        linkHref: 'https://doi.org/10.1002/pssr.201800256',
                    },
                ],
            },
        ],
    },
    {
        year: 2018,
        publications: [
            {
                participants: 'Bayan Karimi and Jukka Pekola',
                title: 'Noninvasive Thermometer Based on the Zero-Bias Anomaly of a Superconducting Junction for Ultrasensitive Calorimetry',
                links: [
                    {
                        linkText: 'arXiv:1807.08962',
                        linkHref: 'https://arxiv.org/abs/1807.08962',
                    },
                    {
                        linkText: 'Phys. Rev. Appl. <b>10</b>, 054048 (2018)',
                        linkHref: 'https://doi.org/10.1103/PhysRevApplied.10.054048',
                    },
                ],
            },
            {
                participants: 'J. T. Peltonen, P. C. J. J. Coumou, Z. H. Peng, T. M. Klapwijk, J. S. Tsai & O. V. Astafiev',
                title: 'Hybrid rf SQUID qubit based on high kinetic inductance',
                links: [
                    {
                        linkText: 'Scientific Rep. <b>8</b>, 10033 (2018)',
                        linkHref: 'https://doi.org/10.1038/s41598-018-27154-1',
                    },
                ],
            },
            {
                participants: 'F. Brange, P. Samuelsson, B. Karimi, J. P. Pekola',
                title: 'Nanoscale Quantum Calorimetry with Electronic Temperature Fluctuations',
                links: [
                    {
                        linkText: 'arXiv:1805.02728',
                        linkHref: 'https://arxiv.org/abs/1805.02728',
                    },
                    {
                        linkText: 'Phys. Rev. B. <b>98</b>, 205414 (2018)',
                        linkHref: 'https://doi.org/10.1103/PhysRevB.98.205414',
                    },
                ],
            },
            {
                participants: 'M. Zgirski, M. Foltyn, A. Savin, K. Norowski, M. Meschke, and J. Pekola',
                title: 'Nanosecond Thermometry with Josephson Junctions',
                links: [
                    {
                        linkText: 'Phys. Rev. Appl. <b>10</b>, 044068 (2018)',
                        linkHref: 'https://doi.org/10.1103/PhysRevApplied.10.044068',
                    },
                ],
            },
            {
                participants: 'Paolo Andrea Erdman, Bibek Bhandari, Rosario Fazio, Jukka P. Pekola, and Fabio Taddei',
                title: 'Absorption refrigerators based on Coulomb-coupled single-electron systems',
                links: [
                    {
                        linkText: 'Phys. Rev. B. <b>98</b>, 045433 (2018)',
                        linkHref: 'https://doi.org/10.1103/PhysRevB.98.045433',
                    },
                ],
            },
            {
                participants: 'Shilpi Singh, Elsa T. Mannila, Dmitry S. Golubev, Joonas T. Peltonen, and Jukka P. Pekola',
                title: 'Determining the parameters of a random telegraph signal by digital low pass filtering',
                links: [
                    {
                        linkText: 'arXiv:1804.03956',
                        linkHref: 'https://arxiv.org/abs/1804.03956',
                    },
                    {
                        linkText: 'Appl. Phys. Lett. <b>112</b>, 243101 (2018)',
                        linkHref: 'https://doi.org/10.1063/1.5033560',
                    },
                ],
            },
            {
                participants: 'Dmitry S. Golubev and Andrei D. Zaikin',
                title: 'Anomalous Switching Current Distributions in Superconducting Weak Links',
                links: [
                    {
                        linkText: 'IEEE Transactions on Applied Superconductivity <b>28</b>, 1700305 (2018)',
                        linkHref: 'https://doi.org/10.1109/TASC.2018.2836944',
                    },
                ],
            },
            {
                participants: 'K. L. Viisanen and J. P. Pekola',
                title: 'Anomalous electronic heat capacity of copper nanowires at sub-Kelvin temperatures',
                links: [
                    {
                        linkText: 'arXiv:1606.02985',
                        linkHref: 'http://arxiv.org/abs/1606.02985',
                    },
                    {
                        linkText: 'Phys. Rev. B <b>97</b>, 115422 (2018)',
                        linkHref: 'https://doi.org/10.1103/PhysRevB.97.115422',
                    },
                ],
            },
            {
                participants: 'Samuel A. Wilkinson, Nicolas Vogt, Dmitry S. Golubev, Jared H. Cole',
                title: 'Approximate solutions to Mathieu’s equation',
                links: [
                    {
                        linkText: 'arXiv:1710.00657',
                        linkHref: 'https://arxiv.org/abs/1710.00657',
                    },
                    {
                        linkText: 'Physica E <b>100</b>, 24 (2018)',
                        linkHref: 'https://doi.org/10.1016/j.physe.2018.02.019',
                    },
                ],
            },
            {
                participants: 'Alberto Ronzani, Bayan Karimi, Jorden Senior, Yu-Cheng Chang, Joonas T. Peltonen, ChiiDong Chen, and Jukka Pekola',
                title: 'Tunable photonic heat transport in a quantum heat valve',
                links: [
                    {
                        linkText: 'arXiv:1801.09312',
                        linkHref: 'https://arxiv.org/abs/1801.09312',
                    },
                    {
                        linkText: 'Nat. Phys. <b>14</b>, 991 (2018).',
                        linkHref: 'https://doi.org/10.1038/s41567-018-0199-4',
                    },
                ],
            },
            {
                participants: 'R. N. Jabdaraghi, J. T. Peltonen, D. S. Golubev, and J. P. Pekola',
                title: 'Magnetometry with low resistance proximity Josephson junction',
                links: [
                    {
                        linkText: 'arXiv:1710.01500',
                        linkHref: 'https://arxiv.org/abs/1710.01500',
                    },
                    {
                        linkText: 'J. Low Temp. Phys. (2018).',
                        linkHref: 'https://doi.org/10.1007/s10909-018-1863-x',
                    },
                ],
            },
            {
                participants: 'Jukka P. Pekola and Bayan Karimi',
                title: 'Quantum noise of electron-phonon heat current',
                links: [
                    {
                        linkText: 'arXiv:1711.01844',
                        linkHref: 'https://arxiv.org/abs/1711.01844',
                    },
                    {
                        linkText: 'J. Low Temp. Phys. (2018)',
                        linkHref: 'https://doi.org/10.1007/s10909-018-1854-y',
                    },
                ],
            },
            {
                participants: 'Libin Wang, Olli-Pentti Saira, and Jukka Pekola',
                title: 'Fast thermometry with a proximity Josephson junction',
                links: [
                    {
                        linkText: 'arXiv:1710.10082',
                        linkHref: 'https://arxiv.org/abs/1710.10082',
                    },
                    {
                        linkText: 'Appl. Phys. Lett. <b>112</b>, 013105 (2018)',
                        linkHref: 'https://doi.org/10.1063/1.5010236',
                    },
                ],
            },
            {
                participants: 'Brecht Donvil, Paolo Muratore-Ginanneschi, Jukka P. Pekola, and Kay Schwieger',
                title: 'Model for calorimetric measurements in an open quantum system',
                links: [
                    {
                        linkText: 'Phys. Rev. A <b>97</b>, 052107 (2018)',
                        linkHref: 'https://doi.org/10.1103/PhysRevA.97.052107',
                    },
                ],
            },
            {
                participants: 'Sina Hamedani Raja, Massimo Borrelli, Rebecca Schmidt, Jukka P. Pekola, and Sabrina Maniscalco',
                title: 'Thermodynamic fingerprints of non-Markovianity in a system of coupled superconducting qubits',
                links: [
                    {
                        linkText: 'Phys. Rev. A <b>97</b>, 032133 (2018)',
                        linkHref: 'https://doi.org/10.1103/PhysRevA.97.032133',
                    },
                ],
            },
        ],
    },
    {
        year: 2017,
        publications: [
            {
                participants: 'S. Charpentier, L. Galletti, G. Kunakova, R. Arpaia, Y. Song, R. Baghdadi, S.M. Wang, A. Kalaboukhov, E. Olsson, F. Tafuri, D. Golubev, J. Linder, T. Bauch, F. Lombardi',
                title: 'Induced unconventional superconductivity on the surface states of Bi2Te3 topological insulator',
                links: [
                    {
                        linkText: 'Nature Comm. <b>8</b>, 2019 (2017)',
                        linkHref: 'https://www.nature.com/articles/s41467-017-02069-z',
                    },
                ],
            },
            {
                participants: 'I.M. Khaymovich, J.P. Pekola and A.S. Melnikov',
                title: 'Nonlocality and dynamic response of Majorana states in fermionic superfluids',
                links: [
                    {
                        linkText: 'New J. Phys. <b>19</b>, 123026 (2017)',
                        linkHref: '',
                    },
                ],
            },
            {
                participants: 'A. Kalaboukhov, P. P. Aurino, L. Galletti, T. Bauch, F. Lombardi, D. Winkler, T. Claeson, and D. Golubev',
                title: 'Homogeneous superconductivity at the LaAlO3/SrTiO3 interface probed by nanoscale transport',
                links: [
                    {
                        linkText: 'Phys. Rev. B <b>96</b>, 184525 (2017)',
                        linkHref: 'https://doi.org/10.1103/PhysRevB.96.184525',
                    },
                ],
            },
            {
                participants: 'J. T. Peltonen, A. Moisio, V. F. Maisi, M. Meschke, J. S. Tsai, J. P. Pekola',
                title: 'Hybrid single-electron turnstiles with thick superconducting electrodes for improved quasiparticle relaxation',
                links: [
                    {
                        linkText: 'arXiv:1709.09832',
                        linkHref: 'https://arxiv.org/abs/1709.09832',
                    },
                ],
            },
            {
                participants: 'A.V. Galaktionov, D.S. Golubev, and A.D. Zaikin',
                title: 'Andreev levels as a quantum dissipative environment',
                links: [
                    {
                        linkText: 'arXiv:1705.06029',
                        linkHref: 'https://arxiv.org/abs/1705.06029',
                    },
                    {
                        linkText: 'Phys. Rev. B <b>96</b>, 134509 (2017)',
                        linkHref: 'https://doi.org/10.1103/PhysRevB.96.134509',
                    },
                ],
            },
            {
                participants: 'R. Arpaia, D. Golubev, R. Baghdadi, R. Ciancio, G. Drazic, P. Orgiani, D. Montemurro, T. Bauch, and F. Lombardi',
                title: 'Transport properties of ultrathin YBa2Cu3O_(7−delta) nanowires: A route to single-photon detection',
                links: [
                    {
                        linkText: 'Phys. Rev. B <b>96</b>, 064525 (2017)',
                        linkHref: 'https://doi.org/10.1103/PhysRevB.96.064525',
                    },
                ],
            },
            {
                participants: 'T. Elo, P. Lähteenmäki, D. Golubev, A. Savin, K. Arutyunov, P. Hakonen',
                title: 'Thermal Relaxation in Titanium Nanowires: Signatures of Inelastic Electron-Boundary Scattering in Heat Transfer',
                links: [
                    {
                        linkText: 'arXiv:1612.09424',
                        linkHref: 'http://arxiv.org/abs/1612.09424',
                    },
                    {
                        linkText: 'J. Low Temp. Phys. <b>189</b>, 204 (2017)',
                        linkHref: 'https://doi.org/10.1007/s10909-017-1802-2',
                    },
                ],
            },
            {
                participants: 'S. Hamedani Raja, M. Borrelli, R. Schmidt, J. P. Pekola, and S. Maniscalco',
                title: 'Thermodynamic fingerprints of non-Markovianity',
                links: [
                    {
                        linkText: 'arXiv:1708.04458',
                        linkHref: 'https://arxiv.org/abs/1708.04458',
                    },
                ],
            },
            {
                participants: 'I. Pietikäinen, S. Danilin, K. S. Kumar, A. Vepsäläinen, D. S. Golubev, J. Tuorila, and G. S. Paraoanu',
                title: 'Observation of the Bloch-Siegert shift in a driven quantum-to-classical transition',
                links: [
                    {
                        linkText: 'arXiv:1610.09153',
                        linkHref: 'http://arxiv.org/abs/1610.09153',
                    },
                    {
                        linkText: 'Phys. Rev. B <b>96</b>, 020501(R) (2017)',
                        linkHref: 'https://journals.aps.org/prb/abstract/10.1103/PhysRevB.96.020501',
                    },
                ],
            },
            {
                participants: 'V. Vesterinen, O.-P. Saira, I. Räisänen, M. Möttönen, L. Grönberg, J. Pekola, and J. Hassel',
                title: 'Lumped-element Josephson parametric amplifier at 650MHz for nano-calorimeter readout',
                links: [
                    {
                        linkText: 'Supercond. Sci. Tech. <b>30</b>, 085001 (2017)',
                        linkHref: 'http://dx.doi.org/10.1088/1361-6668/aa73ed',
                    },
                ],
            },
            {
                participants: 'R. N. Jabdaraghi, D. S. Golubev, J. P. Pekola, J. T. Peltonen',
                title: 'Noise of a superconducting magnetic flux sensor based on a proximity Josephson junction',
                links: [
                    {
                        linkText: 'arXiv:1705.06448',
                        linkHref: 'https://arxiv.org/abs/1705.06448',
                    },
                    {
                        linkText: 'Sci. Rep. <b>7</b>, 8011 (2017)',
                        linkHref: 'https://doi.org/10.1038/s41598-017-08710-7',
                    },
                ],
            },
            {
                participants: 'R. Baghdadi, S. Abay, D. Golubev, T. Bauch, and F. Lombardi',
                title: 'Josephson effect through YBa2Cu3O_(7-delta)/Au-encapsulated nanogaps',
                links: [
                    {
                        linkText: 'Phys. Rev. B <b>95</b>, 174510 (2017)',
                        linkHref: 'https://journals.aps.org/prb/abstract/10.1103/PhysRevB.95.174510',
                    },
                ],
            },
            {
                participants: 'R. Baghdadi, R. Arpaia, E. Stepantsov, M. Arzeo, D. Golubev, D. Montemurro, E. Andersson, T. Bauch, and F. Lombardi',
                title: 'Study of in-plane electrical transport anisotropy of a-axis oriented YBa2Cu3O_(7-delta) nanodevices',
                links: [
                    {
                        linkText: 'Phys. Rev. B <b>95</b>, 184505 (2017)',
                        linkHref: 'https://journals.aps.org/prb/abstract/10.1103/PhysRevB.95.184505',
                    },
                ],
            },
            {
                participants: 'Kay Brandner, Ville F. Maisi, Jukka P. Pekola, Juan P. Garrahan, and Christian Flindt',
                title: 'Experimental Determination of Dynamical Lee-Yang Zeros',
                links: [
                    {
                        linkText: 'arXiv:1610.08669',
                        linkHref: 'https://arxiv.org/abs/1610.08669',
                    },
                    {
                        linkText: 'Phys. Rev. Lett. <b>118</b>, 180601 (2017)',
                        linkHref: 'https://doi.org/10.1103/PhysRevLett.118.180601',
                    },
                ],
            },
            {
                participants: 'B. Dutta, J. T. Peltonen, D. S. Antonenko, M. Meschke, M. A. Skvortsov, B. Kubala, J. König, C. B. Winkelmann, H. Courtois, and J. P. Pekola',
                title: 'Thermal Conductance of a Single-Electron Transistor',
                links: [
                    {
                        linkText: 'arXiv:1704.02622',
                        linkHref: 'https://arxiv.org/abs/1704.02622',
                    },
                    {
                        linkText: 'Phys. Rev. Lett. <b>119</b>, 077701 (2017)',
                        linkHref: 'https://doi.org/10.1103/PhysRevLett.119.077701',
                    },
                    {
                        linkText: 'Featured in Physics',
                        linkHref: 'https://physics.aps.org/synopsis-for/10.1103/PhysRevLett.119.077701',
                    },
                ],
            },
            {
                participants: 'M. Zgirski, M. Foltyn, A. Savin, M. Meschke, and J. Pekola',
                title: 'Nanosecond thermometry with Josephson junction',
                links: [
                    {
                        linkText: 'arXiv:1704.04762',
                        linkHref: 'https://arxiv.org/abs/1704.04762',
                    },
                ],
            },
            {
                participants: 'J. S. Lehtinen, E. Mykkänen, A. Kemppinen, S. V. Lotkhov, D. Golubev, and A. J. Manninen',
                title: 'Characterizing superconducting ﬁlters using residual microwave background',
                links: [
                    {
                        linkText: 'arXiv:1609.07376',
                        linkHref: 'https://arxiv.org/abs/1609.07376',
                    },
                    {
                        linkText: 'Supercond. Sci. Technol. <b>30</b>, 055006 (2017)',
                        linkHref: 'https://doi.org/10.1088/1361-6668/aa63bc',
                    },
                ],
            },
            {
                participants: 'R. E. George, J. Senior, O.-P. Saira, S. E. de Graaf, T. Lindstrom, J. P. Pekola, and Yu. A. Pashkin',
                title: 'Multiplexing Superconducting Qubit Circuit for Single Microwave Photon Generation',
                links: [
                    {
                        linkText: 'J. Low Temp. Phys. <b>189</b>, 60-75 (2017)',
                        linkHref: 'http://dx.doi.org/10.1007/s10909-017-1787-x',
                    },
                ],
            },
            {
                participants: 'B. Karimi and J. P. Pekola',
                title: 'Correlated vs. uncorrelated noise acting on a quantum refrigerator',
                links: [
                    {
                        linkText: 'Phys. Rev. B <b>96</b>, 115408 (2017)',
                        linkHref: 'https://journals.aps.org/prb/abstract/10.1103/PhysRevB.96.115408',
                    },
                ],
            },
            {
                participants: 'B. Karimi, J. P. Pekola, M. Campisi, and R. Fazio',
                title: 'Coupled qubits as a quantum heat switch',
                links: [
                    {
                        linkText: 'Quantum Sci. Technol. <b>2</b> 044007 (2017)',
                        linkHref: 'https://doi.org/10.1088/2058-9565/aa8330',
                    },
                ],
            },
            {
                participants: 'L. Galletti, S. Charpentier, Y. Song, D. Golubev, S. M. Wang, T. Bauch, and F. Lombardi',
                title: 'High-Transparency Al/Bi2Te3 Double-Barrier Heterostructures',
                links: [
                    {
                        linkText: 'IEEE Trans. Appl. Supercond. <b>27</b>, 7756380 (2017)',
                        linkHref: 'http://dx.doi.org/10.1109/TASC.2016.2632112',
                    },
                ],
            },
            {
                participants: 'Michele Campisi, Jukka Pekola, and Rosario Fazio',
                title: 'Feedback controlled heat transport in quantum devices: Theory and solid state experimental proposal',
                links: [
                    {
                        linkText: 'arXiv:1702.05604',
                        linkHref: 'https://arxiv.org/abs/1702.05604',
                    },
                ],
            },
            {
                participants: 'A. V. Feshchenko, O.-P. Saira, J. T. Peltonen, and J. P. Pekola',
                title: 'Thermal conductance of Nb thin films at sub-kelvin temperatures',
                links: [
                    {
                        linkText: 'arXiv:1609.06519',
                        linkHref: 'https://arxiv.org/abs/1609.06519',
                    },
                    {
                        linkText: ' Sci. Rep. <b>7</b>, 41728 (2017)',
                        linkHref: 'https://doi.org/10.1038/srep41728',
                    },
                ],
            },
            {
                participants: 'D. V. Averin and J. P. Pekola',
                title: 'Reversing the Landauer’s erasure: single-electron Maxwell’s demon operating at the limit of thermodynamic efficiency',
                links: [
                    {
                        linkText: 'arXiv:1701.05266',
                        linkHref: 'https://arxiv.org/abs/1701.05266',
                    },
                    {
                        linkText: 'Phys. Stat. Solidi B <b>254</b>, 1600677 (2017)',
                        linkHref: 'http://dx.doi.org/10.1002/pssb.201600677',
                    },
                ],
            },
            {
                participants: 'O. Hahtela, E. Mykkanen, A. Kemppinen, M. Meschke, M. Prunnila, D. Gunnarsson, L. Roschier, J. Penttila, and J. Pekola',
                title: 'Traceable Coulomb Blockade Thermometry',
                links: [
                    {
                        linkText: 'arXiv:1609.06943',
                        linkHref: 'https://arxiv.org/abs/1609.06943',
                    },
                    {
                        linkText: 'Metrologia <b>54</b>, 69 (2017)',
                        linkHref: 'http://dx.doi.org/10.1088/1681-7575/aa4f84',
                    },
                ],
            },
            {
                participants: 'S. Nakamura, Yu. A. Pashkin, M. Taupin, V. F. Maisi, I. M. Khaymovich, A. S. Mel’nikov, J. T. Peltonen, J. P. Pekola, Y. Okazaki, S. Kashiwaya, S. Kawabata, A. S. Vasenko, J.-S. Tsai, and N.-H. Kaneko',
                title: 'Interplay of the inverse proximity effect and magnetic field in out-of-equilibrium single-electron devices',
                links: [
                    {
                        linkText: 'arXiv:1612.04116',
                        linkHref: 'https://arxiv.org/abs/1612.04116',
                    },
                    {
                        linkText: 'Phys. Rev. Appl. <b>7</b>, 054021 (2017)',
                        linkHref: 'http://dx.doi.org/10.1103/PhysRevApplied.7.054021',
                    },
                ],
            },
        ],
    },
    {
        year: 2016,
        publications: [
            {
                participants: 'I. M. Khaymovich, J. P. Pekola, and A. S. Mel’nikov',
                title: 'Nonlocality and dynamic response of Majorana states in fermionic superfluids',
                links: [
                    {
                        linkText: 'arXiv:1606.09546',
                        linkHref: 'http://arxiv.org/abs/1606.09546',
                    },
                ],
            },
            {
                participants: 'A. Kupiainen, P. Muratore-Ginanneschi, J. Pekola, and K. Schwieger',
                title: 'Fluctuation relation for qubit calorimetry',
                links: [
                    {
                        linkText: 'arXiv:1606.02984',
                        linkHref: 'http://arxiv.org/abs/1606.02984',
                    },
                    {
                        linkText: 'Phys. Rev. E <b>94</b>, 062127 (2016).',
                        linkHref: 'https://doi.org/10.1103/PhysRevE.94.062127',
                    },
                ],
            },
            {
                participants: 'S. Singh, J. T. Peltonen, I. M. Khaymovich, J. V. Koski, C. Flindt, and J. P. Pekola',
                title: 'Distribution of Current Fluctuations in a Bistable Conductor',
                links: [
                    {
                        linkText: 'arXiv:1606.06839',
                        linkHref: 'http://arxiv.org/abs/1606.06839',
                    },
                    {
                        linkText: 'Phys. Rev. B <b>94</b>, 241407(R) (2016)',
                        linkHref: 'https://doi.org/10.1103/PhysRevB.94.241407',
                    },
                ],
            },
            {
                participants: 'H. Courtois, H. Q. Nguyen, C. Winkelmann, and J. P. Pekola',
                title: 'High-performance electronic cooling with superconducting tunnel junctions',
                links: [
                    {
                        linkText: 'arXiv:1608.06410',
                        linkHref: 'https://arxiv.org/abs/1608.06410',
                    },
                    {
                        linkText: 'C. R. Physique <b>17</b>, 1139 (2016)',
                        linkHref: 'http://dx.doi.org/10.1016/j.crhy.2016.08.010',
                    },
                ],
            },
            {
                participants: 'M. Taupin, E. Mannila, P. Krogstrup, V. F. Maisi, H. Nguyen, S. M. Albrecht, J. Nygård, C. M. Marcus, and J. P. Pekola',
                title: 'InAs Nanowire with Epitaxial Aluminum as a Single-Electron Transistor with Fixed Tunnel Barriers',
                links: [
                    {
                        linkText: 'arXiv:1601.01149',
                        linkHref: 'https://arxiv.org/abs/1601.01149',
                    },
                    {
                        linkText: 'Phys. Rev. Appl. <b>6</b>, 054017 (2016)',
                        linkHref: 'https://doi.org/10.1103/PhysRevApplied.6.054017',
                    },
                ],
            },
            {
                participants: 'B. Karimi and J. P. Pekola',
                title: 'Otto refrigerator based on a superconducting qubit: classical and quantum performance',
                links: [
                    {
                        linkText: 'arXiv:1610.02776',
                        linkHref: 'https://arxiv.org/abs/1610.02776',
                    },
                    {
                        linkText: 'Phys. Rev. B <b>94</b>, 184503 (2016),',
                        linkHref: 'https://doi.org/10.1103/PhysRevB.94.184503',
                    },
                ],
            },
            {
                participants: 'A. Kutvonen, J. Koski, and T. Ala-Nissila',
                title: 'Thermodynamics and efficiency of an autonomous on-chip Maxwell’s demon',
                links: [
                    {
                        linkText: 'arXiv:1509.08288',
                        linkHref: 'http://arxiv.org/abs/1509.08288',
                    },
                    {
                        linkText: 'Scientific Rep. <b>6</b>, 21126 (2016)',
                        linkHref: 'http://dx.doi.org/10.1038/srep21126',
                    },
                ],
            },
            {
                participants: 'S. Charpentier, R. Arpaia, J. Gaudet, D. Matte, R. Baghdadi, T. Löfwander, D. Golubev, P. Fournier, T. Bauch, and F. Lombardi',
                title: 'Hot spot formation in electron-doped PCCO nanobridges',
                links: [
                    {
                        linkText: 'Phys. Rev. B <b>94</b>, 060503 (R) (2016)',
                        linkHref: 'https://doi.org/10.1103/PhysRevB.94.060503',
                    },
                ],
            },
            {
                participants: 'J. V. Koski and J. P. Pekola',
                title: 'Maxwell’s demons realized in electronic circuits',
                links: [
                    {
                        linkText: 'C. R. Physique <b>17</b>, 1130 (2016)',
                        linkHref: 'http://dx.doi.org/10.1016/j.crhy.2016.08.011',
                    },
                ],
            },
            {
                participants: 'J. Engert, A. Kirste, A. Shibahara, A. Casey, L.V. Levitin, J. Saunders, O. Hahtela, A. Kemppinen, E. Mykkanen, M. Prunnila, D. Gunnarsson, L. Roschier, M. Meschke, J. Pekola',
                title: 'New Evaluation of T – T2000 from 0.02 K to 1 K by Independent Thermodynamics Methods',
                links: [
                    {
                        linkText: 'Int. J. Thermophysics <b>37</b>, 125 (2016)',
                        linkHref: 'http://dx.doi.org/10.1007/s10765-016-2123-4',
                    },
                ],
            },
            {
                participants: 'H. Q. Nguyen, J. T. Peltonen, M. Meschke, and J. P. Pekola',
                title: 'A cascade electronic refrigerator using superconducting tunnel junctions',
                links: [
                    {
                        linkText: 'arXiv:1605.00830',
                        linkHref: 'https://arxiv.org/abs/1605.00830',
                    },
                    {
                        linkText: 'Phys. Rev. Applied <b>6</b>, 054011 (2016)',
                        linkHref: 'http://dx.doi.org/10.1103/PhysRevApplied.6.054011',
                    },
                ],
            },
            {
                participants: 'A. Peltonen, H. Q. Nguyen, J. T. Muhonen, and J. P. Pekola',
                title: 'Milling a silicon nitride membrane by focused ion beam',
                links: [
                    {
                        linkText: 'J. Vac. Sci. Tech. B <b>34</b>, 062201 (2016)',
                        linkHref: 'http://dx.doi.org/10.1116/1.4963895',
                    },
                ],
            },
            {
                participants: 'J. P. Pekola, S. Suomela, and Y. M. Galperin',
                title: 'Finite size bath in qubit thermodynamics',
                links: [
                    {
                        linkText: 'arXiv:1602.00474',
                        linkHref: 'http://arxiv.org/abs/1602.00474',
                    },
                    {
                        linkText: 'J. Low Temp. Phys. <b>184</b>, 1015 (2016)',
                        linkHref: 'http://dx.doi.org/10.1007/s10909-016-1618-5',
                    },
                ],
            },
            {
                participants: 'J. P. Pekola, P. Muratore-Ginanneschi, A. Kupiainen, and Y. M. Galperin',
                title: 'Energy fluctuations of finite free-electron Fermi gas',
                links: [
                    {
                        linkText: 'arXiv:1605.05877',
                        linkHref: 'http://arxiv.org/abs/1605.05877',
                    },
                    {
                        linkText: 'Phys. Rev. E <b>94</b>, 022123 (2016).',
                        linkHref: 'https://doi.org/10.1103/PhysRevE.94.022123',
                    },
                ],
            },
            {
                participants: 'O.-P. Saira, M. Zgirski, K.L. Viisanen, D.S. Golubev, and J.P. Pekola',
                title: 'Dispersive thermometry with a Josephson junction coupled to a resonator',
                links: [
                    {
                        linkText: 'arXiv:1604.05089',
                        linkHref: 'http://arxiv.org/abs/1604.05089',
                    },
                    {
                        linkText: 'Phys. Rev. Appl. <b>6</b>, 024005 (2016)',
                        linkHref: 'https://doi.org/10.1103/PhysRevApplied.6.024005',
                    },
                ],
            },
            {
                participants: 'D. M. T. van Zanten, D. M. Basko, I. M. Khaymovich, J. P. Pekola, H. Courtois, and C. B. Winkelmann',
                title: 'Single Quantum Level Electron Turnstile',
                links: [
                    {
                        linkText: 'arXiv:1601.02469',
                        linkHref: 'http://arxiv.org/abs/1601.02469',
                    },
                    {
                        linkText: 'Phys. Rev. Lett. <b>116</b>, 166801 (2016)',
                        linkHref: 'https://doi.org/10.1103/PhysRevLett.116.166801',
                    },
                ],
            },
            {
                participants: 'M. Meschke, A. Kemppinen, and J.P. Pekola',
                title: 'Accurate Coulomb Blockade Thermometry up to 60 Kelvin',
                links: [
                    {
                        linkText: 'arXiv:1507.05462',
                        linkHref: '',
                    },
                    {
                        linkText: 'Phil. Trans. R. Soc. A <b>374</b>, 20150052 (2016)',
                        linkHref: '',
                    },
                ],
            },
            {
                participants: 'M. Koberidze, A. V. Feshchenko, M. J. Puska, R. M. Nieminen, and J. P. Pekola',
                title: 'Effect of interface geometry on electron tunnelling in Al/Al$_2$O$_3$/Al junctions',
                links: [
                    {
                        linkText: 'arXiv:1511.08636',
                        linkHref: 'http://arxiv.org/abs/1511.08636',
                    },
                    {
                        linkText: 'J. Phys. D: Appl. Phys. 49, 165303 (2016)',
                        linkHref: 'http://dx.doi.org/10.1088/0022-3727/49/16/165303',
                    },
                ],
            },
            {
                participants: 'M. Taupin, I. M. Khaymovich, M. Meschke, A. S. Mel’nikov, and J. P. Pekola',
                title: 'Tunable quasiparticle trapping in Meissner and vortex states of mesoscopic superconductors',
                links: [
                    {
                        linkText: 'arXiv:1506.09165',
                        linkHref: 'http://arxiv.org/abs/1506.09165',
                    },
                    {
                        linkText: 'Nature Comm. 6, 10977 (2016)',
                        linkHref: 'http://dx.doi.org/10.1038/ncomms10977',
                    },
                ],
            },
            {
                participants: 'R. N. Jabdaraghi, J. T. Peltonen, O.-P. Saira, and J. P. Pekola',
                title: 'Low-temperature characterization of Nb-Cu-Nb weak links with Ar ion-cleaned interfaces',
                links: [
                    {
                        linkText: 'arXiv:1510.04138',
                        linkHref: 'http://arxiv.org/abs/1510.04138',
                    },
                    {
                        linkText: 'Appl. Phys. Lett. <b>108</b>, 042604 (2016)',
                        linkHref: 'http://dx.doi.org/10.1063/1.4940979',
                    },
                ],
            },
            {
                participants: 'J. P. Pekola, D. S. Golubev, and D. V. Averin',
                title: 'Maxwell’s demon based on a single qubit',
                links: [
                    {
                        linkText: 'arXiv:1508.03803',
                        linkHref: 'http://arxiv.org/abs/1508.03803',
                    },
                    {
                        linkText: 'Phys. Rev. B <b>93</b>, 024501 (2016)',
                        linkHref: 'http://dx.doi.org/10.1103/PhysRevB.93.024501',
                    },
                ],
            },
        ],
    },
    {
        year: 2015,
        publications: [
            {
                participants: 'J. T. Peltonen, V. F. Maisi, S. Singh, E. Mannila, J. P. Pekola',
                title: 'On-chip error counting for hybrid metallic single-electron turnstiles',
                links: [
                    {
                        linkText: 'arXiv:1512.00374',
                        linkHref: 'http://arxiv.org/abs/1512.00374',
                    },
                ],
            },
            {
                participants: 'J. V. Koski, A. Kutvonen, I. M. Khaymovich, T. Ala-Nissila, J. P. Pekola',
                title: 'On-chip Maxwell’s demon as an information-powered refrigerator',
                links: [
                    {
                        linkText: 'arXiv:1507.00530',
                        linkHref: 'http://arxiv.org/abs/1507.00530',
                    },
                    {
                        linkText: 'Phys. Rev. Lett. <b>115</b>, 260602 (2015)',
                        linkHref: 'http://journals.aps.org/prl/abstract/10.1103/PhysRevLett.115.260602',
                    },
                    {
                        linkText: 'Physics Viewpoint',
                        linkHref: 'http://physics.aps.org/articles/v8/127',
                    },
                    {
                        linkText: 'Science News',
                        linkHref: 'https://www.sciencenews.org/article/maxwells-demon-faces-heat',
                    },
                    {
                        linkText: 'Nature Nanodevices Research Highlights',
                        linkHref: 'http://www.nature.com/nnano/reshigh/2016/0216/full/nnano.2016.10.htmlt',
                    },
                    {
                        linkText: 'Physics World',
                        linkHref: 'http://physicsworld.com/cws/article/news/2016/jan/11/autonomous-maxwells-demon-displays-chilling-power',
                    },
                ],
            },
            {
                participants: 'V. E. Kravtsov, I. M. Khaymovich, E. Cuevas, M. Amini',
                title: 'A random matrix model with two localization transitions',
                links: [
                    {
                        linkText: 'arXiv:1508.01714',
                        linkHref: 'http://arxiv.org/abs/1508.01714',
                    },
                    {
                        linkText: 'New J. Phys. <b>17</b> 122002',
                        linkHref: 'http://iopscience.iop.org/article/10.1088/1367-2630/17/12/122002',
                    },
                ],
            },
            {
                participants: 'Angelo Di Marco, Ville F. Maisi, Frank W. J. Hekking, Jukka P. Pekola',
                title: 'Effect of Photon-Assisted Andreev Reflection in the Accuracy of a SINIS Turnstile',
                links: [
                    {
                        linkText: 'arXiv:1507.03900',
                        linkHref: 'http://arxiv.org/abs/1507.03900',
                    },
                    {
                        linkText: 'Phys. Rev. B <b>92</b> 094514',
                        linkHref: 'http://journals.aps.org/prb/abstract/10.1103/PhysRevB.92.094514',
                    },
                ],
            },
            {
                participants: 'A. V. Feshchenko, L. Casparis, I. M. Khaymovich, D. Maradan, O.-P. Saira, M. Palma, M. Meschke, J. P. Pekola, D. M. Zumbühl',
                title: 'Tunnel junction thermometry down to millikelvin temperatures',
                links: [
                    {
                        linkText: 'arXiv:1504.03841',
                        linkHref: 'http://arxiv.org/abs/1504.03841',
                    },
                    {
                        linkText: 'Phys. Rev. Appl. <b>4</b> 034001',
                        linkHref: 'http://journals.aps.org/prapplied/abstract/10.1103/PhysRevApplied.4.034001',
                    },
                    {
                        linkText: 'Synopsis',
                        linkHref: 'http://physics.aps.org/synopsis-for/10.1103/PhysRevApplied.4.034001',
                    },
                ],
            },
            {
                participants: 'Reza Baghdadi, Riccardo Arpaia, Sophie Charpentier, Dmitri Golubev, Thilo Bauch, and Floriana Lombardi',
                title: 'Fabricating Nanogaps in YBa2Cu3O7−δ for Hybrid Proximity-Based Josephson Junctions',
                links: [
                    {
                        linkText: 'Phys. Rev. Appl. <b>4</b> 014022',
                        linkHref: 'http://journals.aps.org/prapplied/abstract/10.1103/PhysRevApplied.4.014022',
                    },
                ],
            },
            {
                participants: 'D.S. Golubev, J.P. Pekola',
                title: 'Statistics of heat exchange between two resistors',
                links: [
                    {
                        linkText: 'arXiv:1502.07221',
                        linkHref: 'http://arxiv.org/abs/1502.07221',
                    },
                    {
                        linkText: 'Phys. Rev. B <b>92</b>, 085412',
                        linkHref: 'https://journals.aps.org/prb/abstract/10.1103/PhysRevB.92.085412',
                    },
                ],
            },
            {
                participants: 'P. Solinas, S. Gasparinetti, D. Golubev, F. Giazotto',
                title: 'A Josephson radiation comb generator',
                links: [
                    {
                        linkText: 'arXiv:1410.8035',
                        linkHref: 'http://arxiv.org/abs/1410.8035',
                    },
                    {
                        linkText: 'Sci. Rep. <b>5</b>, 12260',
                        linkHref: 'http://www.nature.com/srep/2015/150720/srep12260/full/srep12260.html',
                    },
                ],
            },
            {
                participants: 'D. Gunnarsson, J. S. Richardson-Bullock, M. J. Prest, H. Q. Nguyen, A. V. Timofeev, V. A. Shah, T. E. Whall, E. H. C. Parker, D. R. Leadley, M. Myronov & M. Prunnila',
                title: 'Interfacial Engineering of Semiconductor–Superconductor Junctions for High Performance Micro-Coolers',
                links: [
                    {
                        linkText: 'Sci. Rep. <b>5</b>, 17398',
                        linkHref: 'http://www.nature.com/articles/srep17398',
                    },
                ],
            },
            {
                participants: 'I. M. Khaymovich, V. F. Maisi, J. P. Pekola, A. S. Mel’nikov',
                title: 'Charge-vortex interplay in a superconducting Coulomb-blockaded island',
                links: [
                    {
                        linkText: 'arXiv:1502.00272',
                        linkHref: 'http://arxiv.org/abs/1502.00272',
                    },
                    {
                        linkText: 'Phys. Rev. B <b>92</b>, 020501(R)',
                        linkHref: 'http://journals.aps.org/prb/abstract/10.1103/PhysRevB.92.020501',
                    },
                ],
            },
            {
                participants: 'S. Aki Kutvonen, Tapio Ala-Nissilä, Jukka P. Pekola',
                title: 'Entropy production in a non-Markovian environment',
                links: [
                    {
                        linkText: 'arXiv:1408.3020',
                        linkHref: 'http://arxiv.org/abs/1408.3020',
                    },
                    {
                        linkText: 'Phys. Rev. E <b>92</b>, 012107',
                        linkHref: 'http://journals.aps.org/pre/abstract/10.1103/PhysRevE.92.012107',
                    },
                ],
            },
            {
                participants: 'Pasi Häkkinen, Aurélien Fay, Dmitry Golubev, Pasi Lähteenmäki, and Pertti Hakonen',
                title: 'Wideband superconducting nanotube electrometer',
                links: [
                    {
                        linkText: 'arXiv:1508.03825',
                        linkHref: 'http://arxiv.org/abs/1508.03825',
                    },
                    {
                        linkText: 'Appl. Phys. Lett. <b>107</b>, 012601 (2015)',
                        linkHref: 'http://scitation.aip.org/content/aip/journal/apl/107/1/10.1063/1.4926400',
                    },
                ],
            },
            {
                participants: 'R. Schmidt, M. F. Carusela, J. P. Pekola, J. Ankerhold',
                title: 'Work and heat for two-level systems in dissipative environments: Strong driving and non-Markovian dynamics',
                links: [
                    {
                        linkText: 'arXiv:1412.6442',
                        linkHref: 'http://arxiv.org/abs/1412.6442',
                    },
                    {
                        linkText: 'Phys. Rev. B <b>91</b>, 224303',
                        linkHref: 'http://link.aps.org/doi/10.1103/PhysRevB.91.224303',
                    },
                ],
            },
            {
                participants: 'M. Marthaler, Y. Utsumi, D. S. Golubev',
                title: 'Lasing in circuit quantum electrodynamics with strong noise',
                links: [
                    {
                        linkText: 'arXiv:1503.01597',
                        linkHref: 'http://arxiv.org/abs/1503.01597',
                    },
                    {
                        linkText: 'Phys. Rev. B <b>91</b>, 184515',
                        linkHref: 'http://journals.aps.org/prb/abstract/10.1103/PhysRevB.91.184515',
                    },
                ],
            },
            {
                participants: 'J. P. Pekola, Y. Masuyama, Y. Nakamura, J. Bergli, Y. M. Galperin',
                title: 'Dephasing and dissipation in qubit thermodynamics',
                links: [
                    {
                        linkText: 'arXiv:1503.059402',
                        linkHref: 'http://arxiv.org/abs/1503.05940',
                    },
                    {
                        linkText: 'Phys. Rev. E <b>91</b>, 062109',
                        linkHref: 'http://journals.aps.org/pre/abstract/10.1103/PhysRevE.91.062109',
                    },
                    {
                        linkText: 'Erratum.',
                        linkHref: 'http://journals.aps.org/pre/abstract/10.1103/PhysRevE.92.039901',
                    },
                ],
            },
            {
                participants: 'K. L. Viisanen, S. Suomela, S. Gasparinetti, O.-P. Saira, J. Ankerhold, J. P. Pekola',
                title: 'Incomplete measurement of work in a dissipative two level system',
                links: [
                    {
                        linkText: 'arXiv:1412.7322',
                        linkHref: 'http://arxiv.org/abs/1412.7322',
                    },
                    {
                        linkText: 'New J. Phys. <b>17</b>, 055014',
                        linkHref: 'http://iopscience.iop.org/1367-2630/17/5/055014/',
                    },
                ],
            },
            {
                participants: 'T. Faivre, D. S. Golubev, J. P. Pekola',
                title: 'Andreev Current for low temperature thermometry',
                links: [
                    {
                        linkText: 'arXiv:1503.03972',
                        linkHref: 'http://arxiv.org/abs/1503.03972',
                    },
                    {
                        linkText: 'Appl. Phys. Lett. <b>106</b>, 182602',
                        linkHref: 'http://scitation.aip.org/content/aip/journal/apl/106/18/10.1063/1.4919892',
                    },
                ],
            },
            {
                participants: 'I. M. Khaymovich, J. V. Koski, O.-P. Saira, V. E. Kravtsov, J. P. Pekola',
                title: 'Multifractality of random eigenfunctions and generalization of Jarzynski equality',
                links: [
                    {
                        linkText: 'arXiv:1411.1852',
                        linkHref: 'http://arxiv.org/abs/1411.1852',
                    },
                    {
                        linkText: 'Nature Comm. <b>6</b> 7010 ',
                        linkHref: 'http://www.nature.com/ncomms/2015/150427/ncomms8010/full/ncomms8010.html',
                    },
                ],
            },
            {
                participants: 'M. Campisi, J. Pekola, R. Fazio',
                title: 'Nonequilibrium fluctuations in quantum heat engines: Theory, example, and possible solid state experiments',
                links: [
                    {
                        linkText: 'arXiv:1412.0898',
                        linkHref: 'http://arxiv.org/abs/1412.0898',
                    },
                    {
                        linkText: 'New J. Phys. <b>17</b> 035012 ',
                        linkHref: 'http://iopscience.iop.org/1367-2630/17/3/035012',
                    },
                ],
            },
            {
                participants: 'Z. B. Tan, D. Cox, T. Nieminen, P. Lähteenmäki, D. Golubev, G. B. Lesovik, P. J. Hakonen',
                title: 'Cooper Pair Splitting by means of Graphene Quantum Dots',
                links: [
                    {
                        linkText: 'arXiv:1412.8451',
                        linkHref: 'http://arxiv.org/abs/1412.8451',
                    },
                    {
                        linkText: 'Phys. Rev. Lett. <b>114</b>, 096602',
                        linkHref: 'https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.114.096602',
                    },
                ],
            },
            {
                participants: 'R. Arpaia, M. Ejrnaes, L. Parlato, F. Tafuri, R. Cristiano, D. Golubev, Roman Sobolewski, T. Bauch, F. Lombardi, G.P. Pepe',
                title: 'High-temperature superconducting nanowires for photon detection',
                links: [
                    {
                        linkText: 'Physica C, <b>509</b>, 16',
                        linkHref: '',
                    },
                ],
            },
            {
                participants: 'J. P. Pekola',
                title: 'Towards quantum thermodynamics in electronic circuits',
                links: [
                    {
                        linkText: 'Nature Physics <b>11</b>, 118–123',
                        linkHref: 'http://www.nature.com/nphys/journal/v11/n2/abs/nphys3169.html',
                    },
                ],
            },
            {
                participants: 'M. Borrelli, J. V. Koski, S. Maniscalco, J. P. Pekola',
                title: 'Fluctuation relations for driven coupled classical two-level systems',
                links: [
                    {
                        linkText: 'arxiv:1410.6301',
                        linkHref: 'http://arxiv.org/abs/1410.6301',
                    },
                    {
                        linkText: ' Phys. Rev. E <b>91</b>, 012145',
                        linkHref: 'https://journals.aps.org/pre/abstract/10.1103/PhysRevE.91.012145',
                    },
                ],
            },
            {
                participants: 'S. Gasparinetti, K. L. Viisanen, O.-P. Saira, T. Faivre, M. Arzeo, M. Meschke, J. P. Pekola',
                title: 'Fast electron thermometry towards ultra-sensitive calorimetric detection',
                links: [
                    {
                        linkText: 'arXiv:1405.7568',
                        linkHref: 'http://arxiv.org/abs/1405.7568',
                    },
                    {
                        linkText: 'Physical Review Applied <b>3</b>, 014007',
                        linkHref: 'https://journals.aps.org/prapplied/abstract/10.1103/PhysRevApplied.3.014007',
                    },
                ],
            },
            {
                participants: 'H. Q. Nguyen, M. Meschke, J. P. Pekola',
                title: 'A robust platform cooled by superconducting electronic refrigerators',
                links: [
                    {
                        linkText: 'arXiv:1411.6348',
                        linkHref: 'http://arxiv.org/abs/1411.6348',
                    },
                    {
                        linkText: 'Appl. Phys. Lett. <b>106</b>, 012601',
                        linkHref: 'http://scitation.aip.org/content/aip/journal/apl/106/1/10.1063/1.4905440',
                    },
                ],
            },
        ],
    },
    {
        year: 2014,
        publications: [
            {
                participants: 'M. Taupin, L. Howald, D. Aoki, J.-P. Brison',
                title: 'Superconducting Gap of UCoGe probed by Thermal Transport',
                links: [
                    {
                        linkText: 'arXiv:1410.8361',
                        linkHref: 'http://arxiv.org/abs/1410.8361',
                    },
                    {
                        linkText: 'Physical Review B <b>90</b>, 180501(R)',
                        linkHref: 'http://journals.aps.org/prb/abstract/10.1103/PhysRevB.90.180501',
                    },
                ],
            },
            {
                participants: 'A. V. Feshchenko, J. V. Koski, J. P. Pekola',
                title: 'Experimental realization of a Coulomb blockade refrigerator',
                links: [
                    {
                        linkText: 'arXiv:1409.5637',
                        linkHref: 'http://arxiv.org/abs/1409.5637',
                    },
                    {
                        linkText: 'Physical Review B <b>90</b>, 201407(R)',
                        linkHref: 'http://journals.aps.org/prb/abstract/10.1103/PhysRevB.90.201407',
                    },
                ],
            },
            {
                participants: 'D. Golubev, F. Lombardi, T. Bauch',
                title: 'Effect of heating on critical current of YBCO nanowires',
                links: [
                    {
                        linkText: 'Physica C <b>506</b>, 174-177',
                        linkHref: 'http://www.sciencedirect.com/science/article/pii/S0921453414001920',
                    },
                ],
            },
            {
                participants: 'R. Arpaia, D. Golubev, R. Baghdadi, M. Arzeo, G. Kunakova, S. Charpentier, S. Nawaz, F. Lombardi, T. Bauch',
                title: 'Resistive state triggered by vortex entry in YBa2Cu3O7−δ nanostructures',
                links: [
                    {
                        linkText: 'Physica C <b>506</b>, 165-168',
                        linkHref: 'http://www.sciencedirect.com/science/article/pii/S0921453414001816',
                    },
                ],
            },
            {
                participants: 'T. Aref, A. Averin, S. van Dijken, A. Ferring, M. Koberidze, V. F. Maisi, H. Nguyen, R. M. Nieminen, J. P. Pekola, L. D. Yao',
                title: 'Characterization of aluminum oxide tunnel barriers by combining transport measurements and transmission electron microscopy imaging',
                links: [
                    {
                        linkText: 'arXiv:1406.6856',
                        linkHref: 'http://arxiv.org/abs/1406.6856',
                    },
                    {
                        linkText: 'J. Appl. Phys. <b>116</b>, 073702',
                        linkHref: 'http://scitation.aip.org/content/aip/journal/jap/116/7/10.1063/1.4893473',
                    },
                ],
            },
            {
                participants: 'Matthias Meschke',
                title: 'Nanosized Electronic Cooler Combined with Superconducting Proximity Effect Thermometry',
                links: [
                    {
                        linkText: 'J. Low Temp. Phys. <b>175</b>, 838',
                        linkHref: 'http://link.springer.com/article/10.1007%2Fs10909-014-1179-4',
                    },
                ],
            },
            {
                participants: 'Timothé Faivre, Dmitry Golubev, Jukka P. Pekola',
                title: 'Josephson junction based thermometer and its application in bolometry',
                links: [
                    {
                        linkText: 'arXiv:1405.1570',
                        linkHref: 'http://arxiv.org/abs/1405.1570',
                    },
                    {
                        linkText: 'J. Appl. Phys. <b>116</b>, 094302',
                        linkHref: 'http://scitation.aip.org/content/aip/journal/jap/116/9/10.1063/1.4894516',
                    },
                ],
            },
            {
                participants: 'Jonne V. Koski, Ville F. Maisi, Takahiro Sagawa, Jukka P. Pekola',
                title: 'Experimental study of mutual information in a Maxwell Demon',
                links: [
                    {
                        linkText: 'arXiv:1405.1272',
                        linkHref: 'http://arxiv.org/abs/1405.1272',
                    },
                    {
                        linkText: 'Physical Review Letters <b>113</b>, 030601',
                        linkHref: 'http://journals.aps.org/prl/abstract/10.1103/PhysRevLett.113.030601',
                    },
                ],
            },
            {
                participants: 'H. Courtois, F. W. J. Hekking, H. Q. Nguyen, C. B. Winkelmann',
                title: 'Electronic Coolers Based on Superconducting Tunnel Junctions: Fundamentals and Applications',
                links: [
                    {
                        linkText: 'arXiv:1404.7605',
                        linkHref: 'http://arxiv.org/abs/1404.7605',
                    },
                    {
                        linkText: 'J. Low Temp. Phys. <b>175</b>, 799',
                        linkHref: 'http://link.springer.com/article/10.1007%2Fs10909-014-1101-0#page-1',
                    },
                ],
            },
            {
                participants: 'Joachim Ankerhold, Jukka P. Pekola',
                title: 'Heat due to system-reservoir correlations in thermal equilibrium',
                links: [
                    {
                        linkText: 'arXiv:1404.4719',
                        linkHref: 'http://arxiv.org/abs/1404.4719',
                    },
                    {
                        linkText: 'Physical Review B <b>90</b>, 075421',
                        linkHref: 'http://journals.aps.org/prb/abstract/10.1103/PhysRevB.90.075421',
                    },
                ],
            },
            {
                participants: 'S. Gasparinetti, P. Solinas, A. Braggio, M. Sassetti',
                title: 'Heat-exchange statistics in driven open quantum systems',
                links: [
                    {
                        linkText: 'arXiv:1404.3507',
                        linkHref: 'http://arxiv.org/abs/1404.3507',
                    },
                    {
                        linkText: 'New J. Phys. <b>16</b>, 115001',
                        linkHref: 'http://dx.doi.org/10.1088/1367-2630/16/11/115001',
                    },
                ],
            },
            {
                participants: 'S. Suomela, P. Solinas, J. P. Pekola, J. Ankerhold, and T. Ala-Nissila',
                title: 'Moments of work in the two-point measurement protocol for a driven open quantum system',
                links: [
                    {
                        linkText: 'arXiv:1404.0610',
                        linkHref: 'http://arxiv.org/abs/1404.0610',
                    },
                    {
                        linkText: 'Physical Review B <b>90</b>, 094304',
                        linkHref: 'https://journals.aps.org/prb/abstract/10.1103/PhysRevB.90.094304',
                    },
                ],
            },
            {
                participants: 'C. P. Scheller, S. Heizmann, K. Bedner, D. Giss, M. Meschke, D. M. Zumbühl, J. D. Zimmerman, A. C. Gossard',
                title: 'Silver-Epoxy Microwave Filters and Thermalizers for Millikelvin Experiments',
                links: [
                    {
                        linkText: 'arXiv:1403.6205',
                        linkHref: 'http://arxiv.org/abs/1403.6205',
                    },
                    {
                        linkText: 'Applied Physics Letters <b>104</b>, 211106 (2014)',
                        linkHref: 'http://scitation.aip.org/content/aip/journal/apl/104/21/10.1063/1.4880099',
                    },
                ],
            },
            {
                participants: 'Jonne V. Koski, Ville F. Maisi, Jukka P. Pekola, Dmitri V. Averin',
                title: 'Experimental realization of a Szilard engine with a single electron',
                links: [
                    {
                        linkText: 'arXiv:1402.5907',
                        linkHref: 'http://arxiv.org/abs/1402.5907',
                    },
                    {
                        linkText: 'PNAS 111, 13786',
                        linkHref: 'http://www.pnas.org/content/111/38/13786.abstract',
                    },
                ],
            },
            {
                participants: 'Hung Q. Nguyen, Matthias Meschke, Hervé Courtois, Jukka P. Pekola',
                title: 'Sub-50 mK electronic cooling with large-area superconducting tunnel junctions',
                links: [
                    {
                        linkText: 'arXiv:1402.5872',
                        linkHref: 'http://arxiv.org/abs/1402.5872',
                    },
                    {
                        linkText: 'Physical Review Applied <b>2</b>, 054001',
                        linkHref: 'http://journals.aps.org/prapplied/abstract/10.1103/PhysRevApplied.2.054001',
                    },
                    {
                        linkText: 'Synopsys',
                        linkHref: 'http://physics.aps.org/synopsis-for/10.1103/PhysRevApplied.2.054001',
                    },
                ],
            },
            {
                participants: 'Vera Gramich, Simone Gasparinetti, Paolo Solinas, Joachim Ankerhold',
                title: 'Lamb shift enhancement and detection in strongly driven superconducting circuits',
                links: [
                    {
                        linkText: 'arXiv:1401.5396',
                        linkHref: 'http://arxiv.org/abs/1401.5396',
                    },
                    {
                        linkText: 'Physical Review Letters <b>113</b>, 027001',
                        linkHref: 'http://journals.aps.org/prl/abstract/10.1103/PhysRevLett.113.027001',
                    },
                ],
            },
            {
                participants: 'I. M. Khaymovich, A. S. Mel’nikov, A. I. Buzdin',
                title: 'Phase transitions in the domain structure of ferromagnetic superconductors',
                links: [
                    {
                        linkText: 'arXiv:1401.2806',
                        linkHref: 'http://arxiv.org/abs/1401.2806',
                    },
                    {
                        linkText: 'Physical Review B <b>89</b>, 094524 (2014)',
                        linkHref: 'http://journals.aps.org/prb/abstract/10.1103/PhysRevB.89.094524',
                    },
                ],
            },
            {
                participants: 'Robab Najafi Jabdaraghi, Matthias Meschke, Jukka P. Pekola',
                title: 'Non-hysteretic superconducting quantum interference proximity transistor with enhanced responsivity',
                links: [
                    {
                        linkText: 'arXiv:1310.8085',
                        linkHref: 'http://arxiv.org/abs/1310.8085',
                    },
                    {
                        linkText: 'Applied Physics Letters <b>104</b>, 082601 (2014)',
                        linkHref: 'http://scitation.aip.org/content/aip/journal/apl/104/8/10.1063/1.4866584',
                    },
                ],
            },
            {
                participants: 'Jukka P. Pekola, Jonne V. Koski, Dmitri V. Averin',
                title: 'Refrigerator based on the Coulomb barrier for single-electron tunneling',
                links: [
                    {
                        linkText: 'arXiv:1310.1471',
                        linkHref: 'http://arxiv.org/abs/1310.1471',
                    },
                    {
                        linkText: 'Physical Review B <b>89</b>, 081309 (2014)',
                        linkHref: 'http://journals.aps.org/prb/abstract/10.1103/PhysRevB.89.081309',
                    },
                ],
            },
            {
                participants: 'Andreas Heimes, Ville F. Maisi, Dmitri S. Golubev, Michael Marthaler, Gerd Schön, Jukka P. Pekola',
                title: 'Tunneling and Relaxation of Single Quasiparticles in a Normal-Superconductor-Normal Single Electron Transistor',
                links: [
                    {
                        linkText: 'arXiv:1310.6508',
                        linkHref: 'http://arxiv.org/abs/1310.6508',
                    },
                    {
                        linkText: 'Physical Review B <b>89</b>, 014508 (2014)',
                        linkHref: 'http://prb.aps.org/abstract/PRB/v89/i1/e014508',
                    },
                ],
            },
            {
                participants: 'Ville F. Maisi, Dania Kambly, Christian Flindt, Jukka P. Pekola',
                title: 'Full counting statistics of Andreev tunneling',
                links: [
                    {
                        linkText: 'arXiv:1307.4176',
                        linkHref: 'http://arxiv.org/abs/1307.4176',
                    },
                    {
                        linkText: 'Physical Review Letters <b>112</b>, 036801 (2014)',
                        linkHref: 'http://prl.aps.org/abstract/PRL/v112/i3/e036801',
                    },
                    {
                        linkText: 'on the cover',
                        linkHref: 'http://prl.aps.org/covers/112/3',
                    },
                ],
            },
        ],
    },
    {
        year: 2013,
        publications: [
            {
                participants: 'P. Torresani, M. J. Martínez-Pérez, S. Gasparinetti, J. Renard, G. Biasiol, L. Sorba, F. Giazotto, S. De Franceschi',
                title: 'Non-galvanic primary thermometry of a two-dimensional electron gas',
                links: [
                    {
                        linkText: 'arXiv:1309.2176',
                        linkHref: 'http://arxiv.org/abs/1309.2176',
                    },
                    {
                        linkText: ' Physical Review B <b>88</b>, 245304 (2013)',
                        linkHref: 'http://prb.aps.org/abstract/PRB/v88/i24/e245304',
                    },
                ],
            },
            {
                participants: 'S. Kolenda, M. J. Wolf, D. S. Golubev, A. D. Zaikin, and D. Beckmann',
                title: 'Nonlocal transport and heating in superconductors under dual-bias conditions',
                links: [
                    {
                        linkText: 'arXiv:1308.5823',
                        linkHref: 'http://arxiv.org/abs/1308.5823',
                    },
                    {
                        linkText: 'Physical Review B <b>88</b>, 174509 (2013)',
                        linkHref: 'http://prb.aps.org/abstract/PRB/v88/i17/e174509',
                    },
                ],
            },
            {
                participants: 'V.J. Kauppila, H. Q. Nguyen, T. T. Heikkilä',
                title: 'Nonequilibrium and proximity effects in superconductor-normal metal junctions',
                links: [
                    {
                        linkText: 'arXiv:1304.1288',
                        linkHref: 'http://arxiv.org/abs/1304.1288',
                    },
                    {
                        linkText: 'Physical Review B <b>88</b>, 075428 (2013)',
                        linkHref: 'http://prb.aps.org/abstract/PRB/v88/i7/e075428',
                    },
                ],
            },
            {
                participants: 'J. P. Pekola, P. Solinas, A. Shnirman, D. V. Averin',
                title: 'Calorimetric measurement of work in a quantum system',
                links: [
                    {
                        linkText: 'arXiv:1212.5808v1',
                        linkHref: 'http://arxiv.org/abs/1212.5808',
                    },
                    {
                        linkText: 'New Journal of Physics <b>15</b>, 115006 (2013)',
                        linkHref: 'http://iopscience.iop.org/1367-2630/15/11/115006',
                    },
                ],
            },
            {
                participants: 'A. Di Marco, V. F. Maisi, J. P. Pekola, and F. W. J. Hekking',
                title: 'Leakage current of a superconductor–normal metal tunnel junction connected to a high-temperature environment',
                links: [
                    {
                        linkText: 'arXiv:1307.5446',
                        linkHref: 'http://arxiv.org/abs/1307.5446',
                    },
                    {
                        linkText: 'Physical Review B <b>88</b>, 174507 (2013)',
                        linkHref: 'http://link.aps.org/doi/10.1103/PhysRevB.88.174507',
                    },
                ],
            },
            {
                participants: 'V. F. Maisi, S. V. Lotkhov, A. Kemppinen, A. Heimes, J. T. Muhonen, J. P. Pekola',
                title: 'Excitation of single quasiparticles in a small superconducting Al island connected to normal-metal leads by tunnel junctions',
                links: [
                    {
                        linkText: 'arXiv:1212.2755',
                        linkHref: 'http://arxiv.org/abs/1212.2755',
                    },
                    {
                        linkText: 'Physical Review Letters <b>111</b>, 147001 (2013)',
                        linkHref: 'http://link.aps.org/doi/10.1103/PhysRevLett.111.147001',
                    },
                ],
            },
            {
                participants: 'F. W. J. Hekking, J. P. Pekola',
                title: 'Quantum jump approach for work and dissipation in a two-level system',
                links: [
                    {
                        linkText: 'arXiv:1305.5207',
                        linkHref: 'http://arxiv.org/abs/1305.5207',
                    },
                    {
                        linkText: 'Physical Review Letters <b>111</b>, 093602 (2013)',
                        linkHref: 'http://prl.aps.org/abstract/PRL/v111/i9/e093602',
                    },
                ],
            },
            {
                participants: 'H.Q. Nguyen, T. Aref, V. J. Kauppila, M. Meschke, C. B. Winkelmann, H. Courtois, J. P. Pekola',
                title: 'Trapping hot quasi-particles in a high-power electronic cooler',
                links: [
                    {
                        linkText: 'arXiv:1304.1846',
                        linkHref: 'http://arxiv.org/abs/1304.1846',
                    },
                    {
                        linkText: 'New Journal of Physics <b>15</b>, 085013 (2013)',
                        linkHref: 'http://iopscience.iop.org/1367-2630/15/8/085013',
                    },
                ],
            },
            {
                participants: 'J. V. Koski, T. Sagawa, O.-P. Saira, Y. Yoon, A. Kutvonen, P. Solinas, M. Möttönen, T. Ala-Nissila, J. P. Pekola',
                title: 'Distribution of Entropy Production in a Single-Electron Box',
                links: [
                    {
                        linkText: 'arXiv:1303.6405',
                        linkHref: 'http://arxiv.org/abs/1303.6405',
                    },
                    {
                        linkText: 'Nature Physics <b>9</b>, 644 (2013)',
                        linkHref: 'http://dx.doi.org/10.1038/nphys2711',
                    },
                ],
            },
            {
                participants: 'J. P. Pekola, O.-P. Saira, V. F. Maisi, A. Kemppinen, M. Möttönen, Yu. A. Pashkin, D. V. Averin',
                title: 'Single-electron current sources: towards a refined definition of ampere',
                links: [
                    {
                        linkText: 'arXiv:1208.4030',
                        linkHref: 'http://arxiv.org/abs/1208.4030',
                    },
                    {
                        linkText: 'Reviews of Modern Physics <b>85</b>, 1421 (2013)',
                        linkHref: 'http://rmp.aps.org/abstract/RMP/v85/i4/p1421_1',
                    },
                ],
            },
            {
                participants: 'A. V. Feshchenko, M. Meschke, D. Gunnarsson, M. Prunnila, L. Roschier, J. S. Penttilä and J. P. Pekola',
                title: 'Primary thermometry in the intermediate Coulomb blockade regime',
                links: [
                    {
                        linkText: 'arXiv:1206.0548',
                        linkHref: 'http://arxiv.org/abs/1206.0548',
                    },
                    {
                        linkText: 'Journal of Low Temperature Physics <b>173</b>, 36 (2013)',
                        linkHref: 'http://link.springer.com/article/10.1007/s10909-013-0874-x',
                    },
                ],
            },
            {
                participants: 'S. Gasparinetti, P. Solinas, S. Pugnetti, R. Fazio, J. P. Pekola',
                title: 'Environment-governed dynamics in driven quantum systems',
                links: [
                    {
                        linkText: 'arXiv:1212.3099',
                        linkHref: 'http://arxiv.org/abs/1212.3099',
                    },
                    {
                        linkText: 'Physical Review Letters <b>110</b>, 150403 (2013)',
                        linkHref: 'http://link.aps.org/doi/10.1103/PhysRevLett.110.150403',
                    },
                ],
            },
            {
                participants: 'D. Golubev, T. Faivre, J. P. Pekola',
                title: 'Heat transport through a Josephson junction',
                links: [
                    {
                        linkText: 'arXiv:1212.4267',
                        linkHref: 'http://arxiv.org/abs/1212.4267',
                    },
                    {
                        linkText: 'Physical Review B <b>87</b>, 094522 (2013)',
                        linkHref: 'http://link.aps.org/doi/10.1103/PhysRevB.87.094522',
                    },
                ],
            },
            {
                participants: 'P. Solinas, D. V. Averin and J. P. Pekola',
                title: 'Work and its fluctuations in a driven quantum system',
                links: [
                    {
                        linkText: 'arXiv:1206.5699',
                        linkHref: 'http://arxiv.org/abs/1206.5699',
                    },
                    {
                        linkText: 'Physical Review B <b>87</b>, 060508 (2013)',
                        linkHref: 'http://link.aps.org/doi/10.1103/PhysRevB.87.060508',
                    },
                ],
            },
            {
                participants: 'J. P. Pekola, A. Kutvonen and T. Ala-Nissila',
                title: 'Dissipated work and fluctuation relations for non-equilibrium single-electron transitions',
                links: [
                    {
                        linkText: 'arXiv:1205.3951',
                        linkHref: 'http://arxiv.org/abs/1205.3951',
                    },
                    {
                        linkText: 'Journal of Statistical Mechanics <b>P02033</b> (2013)',
                        linkHref: 'http://dx.doi.org/10.1088/1742-5468/2013/02/P02033',
                    },
                ],
            },
        ],
    },
    {
        year: 2012,
        publications: [
            {
                participants: 'O.-P. Saira, Y. Yoon, T. Tanttu, M. Möttönen, D. V. Averin and J. P. Pekola',
                title: 'Test of Jarzynski and Crooks fluctuation relations in an electronic system',
                links: [
                    {
                        linkText: 'arXiv:1206.7049',
                        linkHref: 'http://arxiv.org/abs/1206.7049',
                    },
                    {
                        linkText: 'Physical Review Letters <b>109</b>, 180601 (2012)',
                        linkHref: 'http://link.aps.org/doi/10.1103/PhysRevLett.109.180601',
                    },
                ],
            },
            {
                participants: 'S. Gasparinetti and I. Kamleitner',
                title: 'Coherent Cooper-pair pumping by magnetic flux control',
                links: [
                    {
                        linkText: 'arXiv:1209.3626',
                        linkHref: 'http://arxiv.org/abs/1209.3626',
                    },
                    {
                        linkText: 'Physical Review B <b>86</b>, 224510 (2012)',
                        linkHref: 'http://link.aps.org/doi/10.1103/PhysRevB.86.224510',
                    },
                ],
            },
            {
                participants: 'S. Gasparinetti, P. Solinas, Y. Yoon and J. P. Pekola',
                title: 'Single Cooper-pair pumping in the adiabatic limit and beyond',
                links: [
                    {
                        linkText: 'arXiv:1206.0193',
                        linkHref: 'http://arxiv.org/abs/1206.0193',
                    },
                    {
                        linkText: 'Physical Review B <b>86</b>, 060502 (2012).',
                        linkHref: 'http://link.aps.org/doi/10.1103/PhysRevB.86.060502',
                    },
                ],
            },
            {
                participants: 'O.-P. Saira, A. Kemppinen, V. F. Maisi, and J. P. Pekola',
                title: 'Vanishing quasiparticle density in a hybrid Al/Cu/Al single-electron transistor',
                links: [
                    {
                        linkText: 'arXiv:1106.1326',
                        linkHref: 'http://arxiv.org/abs/1106.1326',
                    },
                    {
                        linkText: 'Physical Review B <b>85</b>, 012504 (2012)',
                        linkHref: 'http://link.aps.org/doi/10.1103/PhysRevB.85.012504',
                    },
                ],
            },
            {
                participants: 'P. Solinas, M. Möttönen, J. Salmilehto, and J. P. Pekola',
                title: 'Cooper-pair current in the presence of flux noise',
                links: [
                    {
                        linkText: 'arXiv:1110.5503',
                        linkHref: 'http://arxiv.org/abs/1110.5503v1',
                    },
                    {
                        linkText: 'Physical Review B <b>85</b>, 024527 (2012)',
                        linkHref: 'http://link.aps.org/doi/10.1103/PhysRevB.85.024527',
                    },
                ],
            },
            {
                participants: 'F. Hoehne, Y. A. Pashkin, O. V. Astafiev, M. Möttönen, J. P. Pekola, and J. S. Tsai',
                title: 'Coherent superconducting quantum pump',
                links: [
                    {
                        linkText: 'arXiv:1109.5543',
                        linkHref: 'http://arxiv.org/abs/1109.5543',
                    },
                    {
                        linkText: 'Physical Review B <b>85</b>, 140504 (2012)',
                        linkHref: 'http://link.aps.org/doi/10.1103/PhysRevB.85.140504',
                    },
                ],
            },
            {
                participants: 'N. Vercruyssen, T. G. A. Verhagen, M. G. Flokstra, J. P. Pekola and T. M. Klapwijk',
                title: 'Evanescent states and nonequilibrium in driven superconducting nanowires',
                links: [
                    {
                        linkText: 'arXiv:1202.2588',
                        linkHref: 'http://arxiv.org/abs/1202.2588',
                    },
                    {
                        linkText: 'Physical Review B <b>85</b>, 224503 (2012)',
                        linkHref: 'http://link.aps.org/doi/10.1103/PhysRevB.85.224503',
                    },
                ],
            },
            {
                participants: 'H. Godfrin, M. Meschke, H.-J. Lauter, A. Sultan, H. M. Böhm, E. Krotscheck and M. Panholzer',
                title: 'Observation of a roton collective mode in a two-dimensional Fermi liquid',
                links: [
                    {
                        linkText: 'Nature <b>483</b>, 576 (2012)',
                        linkHref: 'http://dx.doi.org/10.1038/nature10919',
                    },
                ],
            },
            {
                participants: 'J. T. Muhonen, M. Meschke and J. P. Pekola',
                title: 'Micrometre-scale refrigerators',
                links: [
                    {
                        linkText: 'arXiv:1203.5100',
                        linkHref: 'http://arxiv.org/abs/1203.5100',
                    },
                    {
                        linkText: 'Reports on Progress in Physics <b>75</B>, 046501 (2012)',
                        linkHref: 'http://dx.doi.org/10.1088/0034-4885/75/4/046501',
                    },
                ],
            },
            {
                participants: 'L. Casparis, M. Meschke, D. Maradan, A. C. Clark, C. Scheller, K. K. Schwarzwalder, J. P. Pekola and D. M. Zumbuhl',
                title: 'Metallic Coulomb Blockade Thermometry down to 10 mK and below',
                links: [
                    {
                        linkText: 'arXiv:1111.1972',
                        linkHref: 'http://arxiv.org/abs/1111.1972',
                    },
                    {
                        linkText: 'Review of Scientific Instruments <b>83</b>, 083903 (2012)',
                        linkHref: 'http://link.aip.org/link/doi/10.1063/1.4744944',
                    },
                ],
            },
            {
                participants: 'H. S. Knowles, V. F. Maisi, J. P. Pekola',
                title: 'Probing quasiparticle excitations in a hybrid single electron transistor',
                links: [
                    {
                        linkText: 'arXiv:1204.1028v1',
                        linkHref: 'http://arxiv.org/abs/1204.1028',
                    },
                    {
                        linkText: 'Applied Physics Letters <b>100</b>, 262601 (2012)',
                        linkHref: 'http://link.aip.org/link/?APL/100/262601/1',
                    },
                ],
            },
            {
                participants: 'S. Gasparinetti, M. J. Martínez-Pérez, S. de Franceschi, J. P. Pekola and F. Giazotto',
                title: 'Nongalvanic thermometry for ultracold two-dimensional electron domains',
                links: [
                    {
                        linkText: 'arXiv:1203.5693',
                        linkHref: 'http://arxiv.org/abs/1203.5693',
                    },
                    {
                        linkText: 'Applied Physics Letters <b>100</b>, 253502 (2012)',
                        linkHref: 'http://link.aip.org/link/?APL/100/253502',
                    },
                ],
            },
            {
                participants: 'J. P. Pekola and O.-P. Saira',
                title: 'Work, Free Energy and Dissipation in Voltage Driven Single-Electron Transitions',
                links: [
                    {
                        linkText: 'arXiv:1204.4623',
                        linkHref: 'http://arxiv.org/abs/1204.4623',
                    },
                    {
                        linkText: 'Journal of Low Temperature Physics <b>169</b>, 70 (2012)',
                        linkHref: 'http://dx.doi.org/10.1007/s10909-012-0659-7',
                    },
                ],
            },
            {
                participants: 'L. Roschier, D. Gunnarsson, M. Meschke, A. Savin, J. S. Penttilä and M. Prunnila',
                title: 'Effect of on-chip filter on Coulomb blockade thermometer',
                links: [
                    {
                        linkText: 'Journal of Physics: Conference Series <b>400</b>, 052029 (2012)',
                        linkHref: 'http://dx.doi.org/10.1088/1742-6596/400/5/052029',
                    },
                ],
            },
        ],
    },
    {
        year: 2011,
        publications: [
            {
                participants: 'S. Gasparinetti, P. Solinas, and J. P. Pekola',
                title: 'Geometric Landau-Zener Interferometry',
                links: [
                    {
                        linkText: 'arXiv:1106.3941',
                        linkHref: 'http://arxiv.org/abs/1106.3941',
                    },
                    {
                        linkText: 'Physical Review Letters <b>107</b>, 207002 (2011)',
                        linkHref: 'http://link.aps.org/doi/10.1103/PhysRevLett.107.207002',
                    },
                ],
            },
            {
                participants: 'V. F. Maisi, O.-P. Saira, Yu. A. Pashkin, J. S. Tsai, D.V. Averin, and J. P. Pekola',
                title: 'Real-time observation of discrete Andreev tunneling events',
                links: [
                    {
                        linkText: 'arXiv:1012.5750',
                        linkHref: 'http://arxiv.org/abs/1012.5750',
                    },
                    {
                        linkText: 'Physical Review Letters <b>106</b>, 217003 (2011)',
                        linkHref: 'http://dx.doi.org/10.1103/PhysRevLett.106.217003',
                    },
                ],
            },
            {
                participants: 'D. V. Averin and J. P. Pekola',
                title: 'Statistics of the dissipated energy in driven single-electron transitions',
                links: [
                    {
                        linkText: 'arXiv:1105.0416',
                        linkHref: 'http://arxiv.org/abs/1105.0416',
                    },
                    {
                        linkText: 'Europhysics Letters <b>96</b>, 67004 (2011)',
                        linkHref: 'http://dx.doi.org/10.1209/0295-5075/96/67004',
                    },
                ],
            },
            {
                participants: 'T. Aref, V.F. Maisi, M. V. Gustafsson, P. Delsing, and J.P. Pekola',
                title: 'Andreev tunneling in charge pumping with SINIS turnstiles',
                links: [
                    {
                        linkText: 'arXiv:1106.3918',
                        linkHref: 'http://arxiv.org/abs/1106.3918',
                    },
                    {
                        linkText: 'Europhysics Letters <b>96</b> 37008 (2011)',
                        linkHref: 'http://dx.doi.org/10.1209/0295-5075/96/37008',
                    },
                ],
            },
            {
                participants: 'Dmitri V. Averin, Mikko Möttönen, and Jukka P. Pekola',
                title: 'Maxwell’s demon based on a single-electron pump',
                links: [
                    {
                        linkText: 'arXiv:1108.5435',
                        linkHref: 'http://arxiv.org/abs/1108.5435',
                    },
                    {
                        linkText: ' Physical Review B <b>84</b> 245448 (2011)',
                        linkHref: 'http://link.aps.org/doi/10.1103/PhysRevB.84.245448',
                    },
                ],
            },
            {
                participants: 'J. T. Peltonen, M. Helle, A. V. Timofeev, P. Solinas, F. W. J. Hekking, and J. P. Pekola',
                title: 'Brownian refrigeration by hybrid tunnel junctions',
                links: [
                    {
                        linkText: 'arXiv:1104.5623',
                        linkHref: 'http://arxiv.org/abs/1104.5623',
                    },
                    {
                        linkText: 'Physical Review B <b>84</b>, 144505 (2011)',
                        linkHref: 'http://link.aps.org/doi/10.1103/PhysRevB.84.144505',
                    },
                ],
            },
            {
                participants: 'S. Gasparinetti, F. Deon, G. Biasiol, L. Sorba, F. Beltram, and F. Giazotto',
                title: 'Probing the local temperature of a two-dimensional electron gas microdomain with a quantum dot: Measurement of electron-phonon interaction',
                links: [
                    {
                        linkText: 'arXiv:1007.0172',
                        linkHref: 'http://arxiv.org/abs/1007.0172',
                    },
                    {
                        linkText: 'Physical Review B <b>83</b>, 201306(R) (2011)',
                        linkHref: 'http://dx.doi.org/10.1103/PhysRevB.83.201306',
                    },
                ],
            },
            {
                participants: 'M. Meschke, J. T. Peltonen, J. P. Pekola, and F. Giazotto',
                title: 'Tunnel Spectroscopy of a Proximity Josephson Junction',
                links: [
                    {
                        linkText: 'arXiv:1105.3875',
                        linkHref: 'http://arxiv.org/abs/1105.3875',
                    },
                    {
                        linkText: 'Physical Review B <b>84</b>, 214514 (2011)',
                        linkHref: 'http://link.aps.org/doi/10.1103/PhysRevB.84.214514',
                    },
                ],
            },
            {
                participants: 'J. T. Peltonen, J. T. Muhonen, M. Meschke, N. B. Kopnin, and J. P. Pekola',
                title: 'Magnetic-field-induced stabilization of nonequilibrium superconductivity in a normal-metal/insulator/superconductor junction',
                links: [
                    {
                        linkText: 'arXiv:1108.1544',
                        linkHref: 'http://arxiv.org/abs/1108.1544',
                    },
                    {
                        linkText: 'Physical Review B <b>84</b>, 220502(R) (2011)',
                        linkHref: 'http://link.aps.org/doi/10.1103/PhysRevB.84.220502',
                    },
                ],
            },
            {
                participants: 'S. V. Lotkhov, O.-P. Saira, J. P. Pekola, and A. B. Zorin',
                title: 'Single-charge escape processes through a hybrid turnstile in a dissipative environment',
                links: [
                    {
                        linkText: 'arXiv:1010.2168',
                        linkHref: 'http://arxiv.org/abs/1010.2168',
                    },
                    {
                        linkText: 'New Journal of Physics <b>13</b>, 013040 (2011)',
                        linkHref: 'http://dx.doi.org/10.1088/1367-2630/13/1/013040',
                    },
                ],
            },
            {
                participants: 'V. Gramich, P. Solinas, M. Möttönen, J. P. Pekola, and J. Ankerhold',
                title: 'Measurement scheme for the Lamb shift in a superconducting circuit with broadband environment',
                links: [
                    {
                        linkText: 'arXiv:1109.4572',
                        linkHref: 'http://arxiv.org/abs/1109.4572',
                    },
                    {
                        linkText: 'Physical Review A <b>84</b>, 052103 (2011)',
                        linkHref: 'http://link.aps.org/doi/10.1103/PhysRevA.84.052103',
                    },
                ],
            },
            {
                participants: 'A. Kemppinen, S. V. Lotkov, O.-P. Saira, A. B. Zorin, J. P. Pekola, and A. J. Manninen',
                title: 'Long hold times in a two-junction electron trap',
                links: [
                    {
                        linkText: 'arXiv:1108.1684',
                        linkHref: 'http://arxiv.org/abs/1108.1684',
                    },
                    {
                        linkText: 'Applied Physics Letters <b>99</b>, 142106 (2011)',
                        linkHref: 'http://link.aip.org/link/doi/10.1063/1.3647557',
                    },
                ],
            },
            {
                participants: 'J. T. Muhonen, M. J. Prest, M. Prunnila, D. Gunnarsson, V. A. Shah, A. Dobbie, M. Myronov, R. J. H. Morris, T. E. Whall, E. H. C. Parker, and D. R. Leadley',
                title: 'Strain dependence of electron-phonon energy loss rate in many-valley semiconductors',
                links: [
                    {
                        linkText: 'arXiv:1101.5889',
                        linkHref: 'http://arxiv.org/abs/1101.5889',
                    },
                    {
                        linkText: 'Applied Physics Letters <b>98</b>, 182103 (2011)',
                        linkHref: 'http://dx.doi.org/10.1063/1.3579524',
                    },
                ],
            },
            {
                participants: 'M. J. Prest, J. T. Muhonen, M. Prunnila, D. Gunnarsson, V. A. Shah, J. S. Richardson-Bullock, A. Dobbie, M. Myronov, R. J. H. Morris, T. E. Whall, E. H. C. Parker, D. R. Leadley',
                title: 'Strain enhanced electron cooling in a degenerately doped semiconductor',
                links: [
                    {
                        linkText: 'arXiv:1111.0465',
                        linkHref: 'http://arxiv.org/abs/1111.0465',
                    },
                    {
                        linkText: 'Applied Physics Letters <b>99</b>, 251908 (2011)',
                        linkHref: 'http://link.aip.org/link/doi/10.1063/1.3670330',
                    },
                ],
            },
            {
                participants: 'J. V. Koski, J. T. Peltonen, M. Meschke, and J. P. Pekola',
                title: 'Laterally proximized aluminum tunnel junctions',
                links: [
                    {
                        linkText: 'arXiv:1104.3052',
                        linkHref: 'http://arxiv.org/abs/1104.3052',
                    },
                    {
                        linkText: 'Applied Physics Letters <b>98</b>, 203501 (2011)',
                        linkHref: 'http://link.aip.org/link/doi/10.1063/1.3590922',
                    },
                ],
            },
            {
                participants: 'N. Vercruyssen, R. Barends, T. M. Klapwijk, J. T. Muhonen, M. Meschke, and J. P. Pekola',
                title: 'Substrate-dependent quasiparticle recombination time in superconducting resonators',
                links: [
                    {
                        linkText: 'Applied Physics Letters <b>99</b>, 062509 (2011)',
                        linkHref: 'http://dx.doi.org/10.1063/1.3624463',
                    },
                ],
            },
            {
                participants: 'Y. Yoon, S. Gasparinetti, M. Möttönen, and J. P. Pekola',
                title: 'Capacitively Enhanced Thermal Escape in Underdamped Josephson Junctions',
                links: [
                    {
                        linkText: 'arXiv:1012.0541',
                        linkHref: 'http://arxiv.org/abs/1012.0541',
                    },
                    {
                        linkText: 'Journal of Low Temperature Physics <b>163</b>, 164 (2011)',
                        linkHref: 'http://dx.doi.org/10.1007/s10909-011-0344-2',
                    },
                ],
            },
            {
                participants: 'M. Meschke, J. Engert, D. Heyer, and J. P. Pekola',
                title: 'Comparison of Coulomb Blockade Thermometers with the International Temperature Scale PLTS-2000',
                links: [
                    {
                        linkText: 'arXiv:1006.1609',
                        linkHref: 'http://arxiv.org/abs/1006.1609',
                    },
                    {
                        linkText: 'International Journal of Thermophysics <b>32</b>, 1378 (2011)',
                        linkHref: 'http://dx.doi.org/10.1007/s10765-011-1033-8',
                    },
                ],
            },
        ],
    },
    {
        year: 2010,
        publications: [
            {
                participants: 'J. P. Pekola, V. F. Maisi, S. Kafanov, N. Chekurov, A. Kemppinen, Yu. A. Pashkin, O.-P. Saira, M. Möttönen, and J. S. Tsai',
                title: 'Environment-Assisted Tunneling as an Origin of the Dynes Density of States',
                links: [
                    {
                        linkText: 'arXiv:1001.3853',
                        linkHref: 'http://arxiv.org/abs/1001.3853',
                    },
                    {
                        linkText: 'Physical Review Letters <b>105</b>, 026803 (2010).',
                        linkHref: 'http://dx.doi.org/10.1103/PhysRevLett.105.026803',
                    },
                ],
            },
            {
                participants: 'O.-P. Saira, M. Möttönen, V. F. Maisi, and J. P. Pekola',
                title: 'Environmentally Activated Tunneling Events in a Hybrid Single-Electron Box',
                links: [
                    {
                        linkText: 'arXiv:1006.0479',
                        linkHref: 'http://arxiv.org/abs/1006.0479',
                    },
                    {
                        linkText: 'Physical Review B <b>82</b>, 155443 (2010)',
                        linkHref: 'http://dx.doi.org/10.1103/PhysRevB.82.155443',
                    },
                ],
            },
            {
                participants: 'F. Giazotto, J. T. Peltonen, M. Meschke, and J. P. Pekola',
                title: 'SQUIPT – Superconducting Quantum Interference Proximity Transistor',
                links: [
                    {
                        linkText: 'arXiv:0909.3806',
                        linkHref: 'http://arxiv.org/abs/0909.3806',
                    },
                    {
                        linkText: 'Nature Physics <b>6</b>, 254 (2010)',
                        linkHref: 'http://dx.doi.org/10.1038/nphys1537',
                    },
                ],
            },
            {
                participants: 'M. Prunnila, M. Meschke, D. Gunnarsson, S. Enouz-Vedrenne, J. M. Kivioja, and J.P. Pekola',
                title: 'Ex situ Tunnel Junction Process Technique Characterized by Coulomb Blockade Thermometry',
                links: [
                    {
                        linkText: 'arXiv:1006.2436',
                        linkHref: 'http://arxiv.org/abs/1006.2436',
                    },
                    {
                        linkText: 'Journal of Vacuum Science and Technology <b>28</b>, 1026 (2010)',
                        linkHref: 'http://dx.doi.org/10.1116/1.3490406',
                    },
                ],
            },
            {
                participants: 'P. Solinas, M. Möttönen, J. Salmilehto, and J.P. Pekola',
                title: 'Decoherence of adiabatically steered quantum systems',
                links: [
                    {
                        linkText: 'arXiv:1007.2347',
                        linkHref: 'http://arxiv.org/abs/1007.2347',
                    },
                    {
                        linkText: 'Physical Review B <b>82</b>, 134517 (2010)',
                        linkHref: 'http://dx.doi.org/10.1103/PhysRevB.82.134517',
                    },
                ],
            },
            {
                participants: 'J. P. Pekola, V. Brosco, M. Möttönen, P. Solinas, and A. Shnirman',
                title: 'Decoherence in adiabatic quantum evolution: application to Cooper pair pumping',
                links: [
                    {
                        linkText: 'arXiv:0911.3750',
                        linkHref: 'http://arxiv.org/abs/0911.3750',
                    },
                    {
                        linkText: 'Physical Review Letters <b>105</b>, 030401 (2010)',
                        linkHref: 'http://dx.doi.org/10.1103/PhysRevLett.105.030401',
                    },
                ],
            },
            {
                participants: 'J. T. Peltonen, P. Virtanen, M. Meschke, J. V. Koski, T. T. Heikkilä, and J. P. Pekola',
                title: 'Thermal Conductance by the Inverse Proximity Effect in a Superconductor',
                links: [
                    {
                        linkText: 'arXiv:1003.5154',
                        linkHref: 'http://arxiv.org/abs/1003.5154',
                    },
                    {
                        linkText: 'Physical Review Letters <b>105</b>, 097004 (2010)',
                        linkHref: 'http://dx.doi.org/10.1103/PhysRevLett.105.097004',
                    },
                ],
            },
            {
                participants: 'D. V. Averin and J. P. Pekola',
                title: 'Violation of the fluctuation-dissipation theorem in time-dependent mesoscopic heat transport',
                links: [
                    {
                        linkText: 'arXiv:1003.2146',
                        linkHref: 'http://arxiv.org/abs/1003.2146',
                    },
                    {
                        linkText: 'Physical Review Letters <b>104</b>, 220601 (2010)',
                        linkHref: 'http://dx.doi.org/10.1103/PhysRevLett.104.220601',
                    },
                ],
            },
            {
                participants: 'Yu. A. Pashkin, T. F. Li, J. P. Pekola, O. Astafiev, D. A. Knyazev, F. Hoehne, H. Im, Y. Nakamura, and J. S. Tsai',
                title: 'Detection of mechanical resonance of a single-electron transistor by direct current',
                links: [
                    {
                        linkText: 'arXiv:1004.3074',
                        linkHref: 'http://arxiv.org/abs/1004.3074',
                    },
                    {
                        linkText: 'Applied Physics Letters <b>96</b>, 263513 (2010)',
                        linkHref: 'http://dx.doi.org/10.1063/1.3455880',
                    },
                ],
            },
            {
                participants: 'J.-M. Pirkkalainen, P. Solinas, J. P. Pekola, M. Möttönen',
                title: 'Non-Abelian geometric phases in ground-state Josephson devices',
                links: [
                    {
                        linkText: 'arXiv:1002.0957',
                        linkHref: 'http://arxiv.org/abs/1002.0957',
                    },
                    {
                        linkText: 'Physical Review B <b>81</b>, 174506 (2010)',
                        linkHref: 'http://dx.doi.org/10.1103/PhysRevB.81.174506',
                    },
                ],
            },
        ],
    },
    {
        year: 2009,
        publications: [
            {
                participants: 'S. Kafanov, A. Kemppinen, Yu. A. Pashkin, M. Meschke, J. S. Tsai, and J.P. Pekola',
                title: 'Single-Electronic Radio-Frequency Refrigerator',
                links: [
                    {
                        linkText: 'arXiv:0906.0597',
                        linkHref: 'http://arxiv.org/abs/0906.0597',
                    },
                    {
                        linkText: 'Physical Review Letters <b>103</b>, 120801 (2009)',
                        linkHref: 'http://dx.doi.org/doi:10.1103/PhysRevLett.103.120801',
                    },
                ],
            },
            {
                participants: 'S.V. Lotkhov, A. Kemppinen, S. Kafanov, J.P. Pekola, and A.B. Zorin',
                title: 'Pumping properties of the hybrid single-electron transistor in dissipative environment',
                links: [
                    {
                        linkText: 'arXiv:0905.3402',
                        linkHref: 'http://arxiv.org/abs/0905.3402',
                    },
                    {
                        linkText: 'Applied Physics Letters <b>95</b>, 112507 (2009)',
                        linkHref: 'http://dx.doi.org/doi:10.1063/1.3227839',
                    },
                ],
            },
            {
                participants: 'V. F. Maisi, Yu. A. Pashkin, S. Kafanov, J. S. Tsai, and J. P. Pekola',
                title: 'Parallel pumping of electrons',
                links: [
                    {
                        linkText: 'arXiv:0908.2357',
                        linkHref: 'http://arxiv.org/abs/0908.2357',
                    },
                    {
                        linkText: 'New Journal of Physics <b>11</b>, 113057 (2009)',
                        linkHref: 'http://dx.doi.org/10.1088/1367-2630/11/11/113057',
                    },
                ],
            },
            {
                participants: 'S.J. MacLeod, S. Kafanov, and J.P. Pekola',
                title: 'Periodicity in Al/Ti superconducting single electron transistors',
                links: [
                    {
                        linkText: 'arXiv:0906.0715',
                        linkHref: 'http://arxiv.org/abs/0906.0715',
                    },
                    {
                        linkText: 'Applied Physics Letters <b>95</b>, 052503 (2009)',
                        linkHref: 'http://dx.doi.org/doi:10.1063/1.3194777',
                    },
                ],
            },
            {
                participants: 'E. Isosaari, T. Holmqvist, M. Meschke, M. Heinonen, and J. P. Pekola',
                title: 'Thermometry by micro and nanodevices',
                links: [
                    {
                        linkText: 'The European Physical Journal – Special Topics <b>172</b>, 323 (2009)',
                        linkHref: 'http://dx.doi.org/doi:10.1140/epjst/e2009-01057-y',
                    },
                ],
            },
            {
                participants: 'A. Kemppinen, M. Meschke, M. Möttönen, D.V. Averin, and J.P. Pekola',
                title: 'Quantized current of a hybrid single-electron transistor with superconducting leads and a normal-metal island',
                links: [
                    {
                        linkText: 'arXiv:0803.1563',
                        linkHref: 'http://arxiv.org/abs/0803.1563',
                    },
                    {
                        linkText: ' The European Physical Journal – Special Topics <b>172</b>, 311 (2009)',
                        linkHref: 'http://dx.doi.org/doi:10.1140/epjst/e2009-01056-0',
                    },
                ],
            },
            {
                participants: 'A.V. Timofeev, M. Helle, M. Meschke, M. Möttönen, and J.P. Pekola',
                title: 'Electronic Refrigeration at the Quantum Limit',
                links: [
                    {
                        linkText: 'arXiv:0902.2584',
                        linkHref: 'http://arxiv.org/abs/0902.2584',
                    },
                    {
                        linkText: 'Physical Review Letters <b>102</b>, 200801 (2009)',
                        linkHref: 'http://dx.doi.org/doi:10.1103/PhysRevLett.102.200801',
                    },
                ],
            },
            {
                participants: 'M.A. Sillanpää, J. Sarkar, J. Sulkko, J. Muhonen, and P.J. Hakonen',
                title: 'Accessing nanomechanical resonators via a fast microwave circuit',
                links: [
                    {
                        linkText: 'arXiv:0810.5242',
                        linkHref: 'http://arxiv.org/abs/0810.5242',
                    },
                    {
                        linkText: 'Applied Physics Letters <b>95</b>, 011909 (2009)',
                        linkHref: 'http://dx.doi.org/doi:10.1063/1.3173826',
                    },
                ],
            },
            {
                participants: 'A. Kemppinen, S. Kafanov, Yu. A. Pashkin, J. S. Tsai, D. V. Averin, and J. P. Pekola',
                title: 'Experimental investigation of hybrid single-electron turnstiles with high charging energy',
                links: [
                    {
                        linkText: 'arXiv:0903.3482',
                        linkHref: 'http://arxiv.org/abs/0903.3482',
                    },
                    {
                        linkText: 'Applied Physics Letters <b>94</b>, 172108 (2009)',
                        linkHref: 'http://link.aip.org/link/?APPLAB/94/172108/1',
                    },
                ],
            },
            {
                participants: 'T. Holmqvist, J.P. Pekola, and M. Meschke',
                title: 'Influence of Environment on Tunneling Thermometry',
                links: [
                    {
                        linkText: 'Journal of Low Temperature Physics <b>154</b>, 172 (2009)',
                        linkHref: 'http://dx.doi.org/doi:10.1007/s10909-009-9859-1',
                    },
                ],
            },
            {
                participants: 'M. Meschke, J.T. Peltonen, H. Courtois, and J.P. Pekola',
                title: 'Calorimetric Readout of a Superconducting Proximity-Effect Thermometer',
                links: [
                    {
                        linkText: 'arXiv:0901.1013',
                        linkHref: 'http://arxiv.org/abs/0901.1013',
                    },
                    {
                        linkText: 'Journal of Low Temperature Physics <b>154</b>, 190 (2009).',
                        linkHref: 'http://dx.doi.org/doi:10.1007/s10909-008-9854-y',
                    },
                ],
            },
            {
                participants: 'J.T. Muhonen, A.O. Niskanen, M. Meschke, Yu.A. Pashkin, J.S. Tsai, L. Sainiemi, S. Franssila, and J.P. Pekola',
                title: 'Electronic cooling of a submicron-sized metallic beam',
                links: [
                    {
                        linkText: 'arXiv:0807.0283',
                        linkHref: 'http://arxiv.org/abs/0807.0283',
                    },
                    {
                        linkText: 'Applied Physics Letters <b>94</b>, 073101 (2009)',
                        linkHref: 'http://link.aip.org/link/?APL/94/073101',
                    },
                ],
            },
            {
                participants: 'A.V. Timofeev, C. Pascual Garcia, N.B. Kopnin, A.M. Savin, M. Meschke, F. Giazotto, and J.P. Pekola',
                title: 'Recombination-Limited Energy Relaxation in a Bardeen-Cooper-Schrieffer Superconductor',
                links: [
                    {
                        linkText: 'arXiv:0804.4413',
                        linkHref: 'http://arxiv.org/abs/0804.4413',
                    },
                    {
                        linkText: 'Physical Review Letters <b>102</b>, 017003 (2009).',
                        linkHref: 'http://dx.doi.org/doi:10.1103/PhysRevLett.102.017003',
                    },
                ],
            },
        ],
    },
    {
        year: 2008,
        publications: [
            {
                participants: 'Jukka P. Pekola, Tommy Holmqvist, and Matthias Meschke',
                title: 'Primary tunnel junction thermometry',
                links: [
                    {
                        linkText: 'arXiv:0808.0124',
                        linkHref: 'http://arxiv.org/abs/arXiv:0808.0124',
                    },
                    {
                        linkText: 'Physical Review Letters <b>101</b>, 206801 (2008)',
                        linkHref: 'http://dx.doi.org/doi:10.1103/PhysRevLett.101.206801',
                    },
                ],
            },
            {
                participants: 'H. Courtois, M. Meschke, J.T. Peltonen, and J.P. Pekola',
                title: 'Origin of Hysteresis in a Proximity Josephson Junction',
                links: [
                    {
                        linkText: 'arXiv:0805.4524',
                        linkHref: 'http://arxiv.org/abs/0805.4524',
                    },
                    {
                        linkText: 'Physical Review Letters <b>101</b>, 067002 (2008).',
                        linkHref: 'http://dx.doi.org/doi:10.1103/PhysRevLett.101.067002',
                    },
                ],
            },
            {
                participants: 'S. Tirelli, A.M. Savin, C. Pascual Garcia, J.P. Pekola, F. Beltram, and F. Giazotto',
                title: 'Manipulation and Generation of Supercurrent in Out-of-Equilibrium Josephson Tunnel Nanojunctions',
                links: [
                    {
                        linkText: 'arXiv:0804.2649',
                        linkHref: 'http://arxiv.org/abs/0804.2649',
                    },
                    {
                        linkText: 'Physical Review Letters <b>101</b>, 077004 (2008)',
                        linkHref: 'http://dx.doi.org/doi:10.1103/PhysRevLett.101.077004',
                    },
                ],
            },
            {
                participants: 'F. Giazotto, T.T. Heikkilä, G. Pepe. P. Helistö, A. Luukanen, and J.P. Pekola',
                title: 'Ultrasensitive Proximity Josephson Sensor with Kinetic Inductance Readout',
                links: [
                    {
                        linkText: 'arXiv:0802.2483',
                        linkHref: 'http://arxiv.org/abs/0802.2483',
                    },
                    {
                        linkText: 'Applied Physics Letters <b>92</b>, 162507 (2008)',
                        linkHref: 'http://dx.doi.org/10.1063/1.2908922',
                    },
                ],
            },
            {
                participants: 'Dmitri V. Averin and Jukka P. Pekola',
                title: 'Nonadiabatic charge pumping in a Hybrid Single-Electron Transistor',
                links: [
                    {
                        linkText: 'arXiv:0802.1364',
                        linkHref: 'http://arxiv.org/abs/0802.1364',
                    },
                    {
                        linkText: 'Physical Review Letters <b>101</b>, 066801 (2008)',
                        linkHref: 'http://dx.doi.org/doi:10.1103/PhysRevLett.101.066801',
                    },
                ],
            },
            {
                participants: 'F.W.J. Hekking, A.O. Niskanen, and J.P. Pekola',
                title: 'Electron-phonon coupling and longitudinal mechanical-mode cooling in a metallic nanowire',
                links: [
                    {
                        linkText: 'arXiv:0710.0250',
                        linkHref: 'http://arxiv.org/abs/0710.0250',
                    },
                    {
                        linkText: 'Physical Review B <b>77</b>, 033401 (2008)',
                        linkHref: 'http://dx.doi.org/10.1103/PhysRevB.77.033401',
                    },
                ],
            },
            {
                participants: 'T. Holmqvist, M. Meschke, and J.P. Pekola',
                title: 'Double oxidation scheme for tunnel junction fabrication',
                links: [
                    {
                        linkText: 'Journal of Vacuum Science and Technology B <b>26</b>, 28 (2008)',
                        linkHref: 'http://dx.doi.org/10.1116/1.2817629',
                    },
                ],
            },
            {
                participants: 'Antti Kemppinen, Antti J. Manninen, Mikko Möttönen, Juha J. Vartiainen, Joonas T. Peltonen, and Jukka P. Pekola',
                title: 'Suppression of the critical current of a balanced superconducting quantum interference device',
                links: [
                    {
                        linkText: 'arXiv:0712.0063',
                        linkHref: 'http://arxiv.org/abs/0712.0063',
                    },
                    {
                        linkText: 'Applied Physics Letters <b>92</b>, 052110 (2008)',
                        linkHref: 'http://dx.doi.org/10.1063/1.2842413',
                    },
                ],
            },
            {
                participants: 'N. B. Kopnin, F. Taddei, J. P. Pekola, and F. Giazotto',
                title: 'Influence of photon-assisted tunneling on heat flow in a normal metal-superconductor tunnel junction',
                links: [
                    {
                        linkText: 'arXiv:0712.3204',
                        linkHref: 'http://arxiv.org/abs/0712.3204',
                    },
                    {
                        linkText: 'Physical Review B <b>77</b>, 104517 (2008)',
                        linkHref: 'http://dx.doi.org/doi:10.1103/PhysRevB.77.104517',
                    },
                ],
            },
            {
                participants: 'Mikko Möttönen, Juha J. Vartiainen, and Jukka P. Pekola',
                title: 'Experimental Determination of the Berry Phase in a Superconducting Charge Pump',
                links: [
                    {
                        linkText: 'arXiv:0710.5623',
                        linkHref: 'http://arxiv.org/abs/0710.5623',
                    },
                    {
                        linkText: 'Physical Review Letters <b>100</b>, 177201 (2008)',
                        linkHref: 'http://dx.doi.org/10.1103/PhysRevLett.100.177201',
                    },
                ],
            },
            {
                participants: 'Björn Kubala, Jurgen König, and Jukka Pekola',
                title: 'Violation of the Wiedemann-Franz Law in a Single-Electron Transistor,',
                links: [
                    {
                        linkText: 'arXiv:0709.4181',
                        linkHref: 'http://arxiv.org/abs/0709.4181',
                    },
                    {
                        linkText: 'Physical Review Letters <b>100</b>, 066801 (2008)',
                        linkHref: 'http://dx.doi.org/10.1103/PhysRevLett.100.066801',
                    },
                ],
            },
            {
                participants: 'Jukka P. Pekola, Juha J. Vartiainen, Mikko Möttönen, Olli-Pentti Saira, Matthias Meschke, and Dmitri V. Averin',
                title: 'Hybrid single-electron transistor as a source of quantized electric current',
                links: [
                    {
                        linkText: 'arXiv:0708.1995',
                        linkHref: 'http://arxiv.org/abs/0708.1995',
                    },
                    {
                        linkText: 'Nature Physics <b>4</b>, 120 (2008)',
                        linkHref: 'http://dx.doi.org/10.1038/nphys808',
                    },
                ],
            },
            {
                participants: 'P. Kuopanportti, M. Möttönen, V. Bergholm, O.-P. Saira, J. Zhang, and K. B. Whaley',
                title: 'Suppression of 1/f noise in one-qubit systems',
                links: [
                    {
                        linkText: 'arXiv: 0704.0771',
                        linkHref: 'http://arxiv.org/abs/0704.0771',
                    },
                    {
                        linkText: 'Physical Review A <b>77</b>, 032334 (2008)',
                        linkHref: 'http://dx.doi.org/10.1103/PhysRevA.77.032334',
                    },
                ],
            },
        ],
    },
    {
        year: 2007,
        publications: [
            {
                participants: 'Olli-Pentti Saira, Matthias Meschke, Francesco Giazotto, Alexander M. Savin, Mikko Möttönen, and Jukka P. Pekola',
                title: 'Heat Transistor: Demonstration of Gate-Controlled Electronic Refrigeration',
                links: [
                    {
                        linkText: 'cond-mat/0702361',
                        linkHref: 'http://arxiv.org/abs/cond-mat/0702361',
                    },
                    {
                        linkText: 'Physical Review Letters <b>99</b>, 027203 (2007)',
                        linkHref: 'http://dx.doi.org/10.1103/PhysRevLett.99.027203',
                    },
                ],
            },
            {
                participants: 'J.P. Pekola and F.W.J. Hekking',
                title: 'Normal-metal-superconductor tunnel junction as a Brownian refrigerator',
                links: [
                    {
                        linkText: 'cond-mat/0702233',
                        linkHref: 'http://arxiv.org/abs/cond-mat/0702233',
                    },
                    {
                        linkText: 'Physical Review Letters <b>98</b>, 210604 (2007)',
                        linkHref: 'http://dx.doi.org/10.1103/PhysRevLett.98.210604',
                    },
                ],
            },
            {
                participants: 'J.T. Peltonen, A.V. Timofeev, M. Meschke, T.T. Heikkilä, and J.P. Pekola',
                title: 'Detecting non-Gaussian current fluctuations using a Josephson threshold detector',
                links: [
                    {
                        linkText: 'Physica E <b>40</b>, 111 (2007)',
                        linkHref: 'http://dx.doi.org/10.1016/j.physe.2007.05.017',
                    },
                ],
            },
            {
                participants: 'O.-P. Saira, V. Bergholm, T. Ojanen, and M. Möttönen',
                title: 'Equivalent qubit dynamics under classical and quantum noise',
                links: [
                    {
                        linkText: 'quant-ph/0612556',
                        linkHref: 'http://arxiv.org/abs/quant-ph/0605241',
                    },
                    {
                        linkText: 'Physical Review A <b>75</b>, 012308 (2007)',
                        linkHref: 'http://dx.doi.org/10.1103/PhysRevA.75.012308',
                    },
                ],
            },
            {
                participants: 'A.V. Timofeev, M. Meschke, J.T. Peltonen, T.T. Heikkilä, and J.P. Pekola',
                title: 'Wideband detection of the third moment of shot noise by a hysteretic Josephson junction',
                links: [
                    {
                        linkText: 'cond-mat/0612087',
                        linkHref: 'http://arxiv.org/abs/cond-mat/0612087',
                    },
                    {
                        linkText: 'Physical Review Letters <b>98</b>, 207001 (2007)',
                        linkHref: 'http://dx.doi.org/10.1103/PhysRevLett.98.207001',
                    },
                ],
            },
            {
                participants: 'Juha Karvanen, Juha J. Vartiainen, Andrey Timofeev, and Jukka Pekola',
                title: 'Experimental Designs for Binary Data in Switching Measurements on Superconducting Josephson Junctions',
                links: [
                    {
                        linkText: 'cond-mat/0610507',
                        linkHref: 'http://arxiv.org/abs/cond-mat/0610507',
                    },
                    {
                        linkText: 'Journal of the Royal Statistical Society: Series C <b>56</b>, 167 (2007)',
                        linkHref: 'http://dx.doi.org/doi:10.1111/j.1467-9876.2007.00572.x',
                    },
                ],
            },
            {
                participants: 'J.J. Vartiainen, M. Möttönen, J.P. Pekola, and A. Kemppinen',
                title: 'Nanoampere pumping of Cooper pairs',
                links: [
                    {
                        linkText: 'cond-mat/0612556',
                        linkHref: 'http://arxiv.org/abs/cond-mat/0612556',
                    },
                    {
                        linkText: 'Applied Physics Letters <b>90</b>, 082102 (2007)',
                        linkHref: 'http://dx.doi.org/10.1063/1.2709967',
                    },
                ],
            },
            {
                participants: 'Jukka P. Pekola, Francesco Giazotto, and Olli-Pentti Saira',
                title: 'Radio-Frequency Single-Electron Refrigerator',
                links: [
                    {
                        linkText: 'cond-mat/0607814',
                        linkHref: 'http://arxiv.org/abs/cond-mat/0607814',
                    },
                    {
                        linkText: 'Physical Review Letters <b>98</b>, 037201 (2007)',
                        linkHref: 'http://dx.doi.org/10.1103/PhysRevLett.98.037201',
                    },
                ],
            },
            {
                participants: 'J. T. Peltonen, A. V. Timofeev, M. Meschke, and J. P. Pekola',
                title: 'Detecting Current Noise with a Josephson Junction in the Macroscopic Quantum Tunneling Regime',
                links: [
                    {
                        linkText: 'cond-mat/0611593',
                        linkHref: 'http://arxiv.org/abs/cond-mat/0611593',
                    },
                    {
                        linkText: 'Journal of Low Temperature Physics <b>146</b>, 135 (2007)',
                        linkHref: 'http://dx.doi.org/10.1007/s10909-006-9272-y',
                    },
                ],
            },
            {
                participants: 'J. Zou, I. Sosnin, P. Virtanen, M. Meschke, V. T. Petrashov, and T. T. Heikkilä',
                title: 'Influence of Supercurrents on Low-Temperature Thermopower in Mesoscopic N/S Structures',
                links: [
                    {
                        linkText: 'cond-mat/0609309',
                        linkHref: 'http://arxiv.org/abs/cond-mat/0609309',
                    },
                    {
                        linkText: 'Journal of Low Temperature Physics <b>146</b>, 193 (2007)',
                        linkHref: 'http://dx.doi.org/10.1007/s10909-006-9257-x',
                    },
                ],
            },
            {
                participants: 'A.O. Niskanen, Y. Nakamura, and J.P. Pekola',
                title: 'Information entropic superconducting microcooler',
                links: [
                    {
                        linkText: 'arxiv:0704.0845',
                        linkHref: 'http://arxiv.org/abs/0704.0845',
                    },
                    {
                        linkText: 'Physical Review B <b>76</b>, 174523 (2007)',
                        linkHref: 'http://dx.doi.org/10.1103/PhysRevB.76.174523',
                    },
                ],
            },
            {
                participants: 'A.M. Savin, M. Meschke, J.P. Pekola, Yu.A. Pashkin, T.F. Li, H. Im, and J.S. Tsai',
                title: 'Parity effect in Al and Nb single electron transistors in a tunable environment',
                links: [
                    {
                        linkText: 'arXiv:0707.0732',
                        linkHref: 'http://arxiv.org/abs/0707.0732',
                    },
                    {
                        linkText: 'Applied Physics Letters <b>91</b>, 063512 (2007)',
                        linkHref: 'http://dx.doi.org/10.1063/1.2768897',
                    },
                ],
            },
        ],
    },
    {
        year: 2006,
        publications: [
            {
                participants: 'M. Meschke, W. Guichard, and J.P. Pekola',
                title: 'Single-mode heat conduction by photons',
                links: [
                    {
                        linkText: 'cond-mat/0605678',
                        linkHref: 'http://arxiv.org/abs/cond-mat/0605678',
                    },
                    {
                        linkText: 'Nature <b>444</b>, 187 (2006)',
                        linkHref: 'http://dx.doi.org/10.1038/nature05276',
                    },
                ],
            },
            {
                participants: 'S. Intiso, J. Pekola, A. Savin, Y. Devyatov, and A. Kidiyarova-Shevchenko',
                title: 'Rapid single-flux-quantum circuits for low noise mK operation',
                links: [
                    {
                        linkText: 'Superconductor Science and Technology <b>19</b>, 335 (2006)',
                        linkHref: 'http://dx.doi.org/10.1088/0953-2048/19/5/S36',
                    },
                ],
            },
            {
                participants: 'A.M. Savin, J.T. Flyktman, F. Giazotto, and J.P. Pekola',
                title: 'Electron cooling and control of Josephson current at sub-Kelvin temperatures',
                links: [
                    {
                        linkText: 'Journal of Superconductivity and Novel Magnetism <b>19</b>, 11 (2006)',
                        linkHref: 'http://dx.doi.org/10.1007/s10948-005-0094-y',
                    },
                ],
            },
            {
                participants: 'A.M. Savin, J.P. Pekola, T. Holmqvist, J. Hassel, L. Grönberg, P. Helistö, and A. Kidiyarova-Shevchenko',
                title: 'High-resolution superconducting single-flux quantum comparator for sub-Kelvin temperatures',
                links: [
                    {
                        linkText: 'cond-mat/0606761',
                        linkHref: 'http://arxiv.org/abs/cond-mat/0606761',
                    },
                    {
                        linkText: 'Applied Physics Letters <b>99</b>, 133505 (2006)',
                        linkHref: 'http://dx.doi.org/10.1063/1.2357858',
                    },
                ],
            },
            {
                participants: 'J. Salo, F.W.J. Hekking, and J.P. Pekola',
                title: 'Frequency-dependent current correlation functions from scattering theory',
                links: [
                    {
                        linkText: 'cond-mat/0605478',
                        linkHref: 'http://arxiv.org/abs/cond-mat/0605478',
                    },
                    {
                        linkText: 'Physical Review B <b>74</b>, 125427 (2006)',
                        linkHref: 'http://link.aps.org/abstract/PRB/v74/e125427',
                    },
                ],
            },
            {
                participants: 'V. Pietilä, M. Möttönen, T. Isoshima, J.A.M. Huhtamäki, and S.M.M. Virtanen',
                title: 'Stability and dynamics of vortex clusters in nonrotated Bose-Einstein condensates',
                links: [
                    {
                        linkText: 'cond-mat/0609313',
                        linkHref: 'http://arxiv.org/abs/cond-mat/0609313',
                    },
                    {
                        linkText: 'Physical Review A <b>74</b>, 023603 (2006)',
                        linkHref: 'http://link.aps.org/abstract/PRA/v74/e023603',
                    },
                ],
            },
            {
                participants: 'J. A.M. Huhtamäki, M. Möttönen,1, T. Isoshima, V. Pietilä, and S.M.M. Virtanen',
                title: 'Splitting Times of Doubly Quantized Vortices in Dilute Bose-Einstein Condensates',
                links: [
                    {
                        linkText: 'quant-ph/0605125',
                        linkHref: 'http://arxiv.org/abs/quant-ph/0605125',
                    },
                    {
                        linkText: 'Physical Review Letters <b>97</b>, 110406 (2006)',
                        linkHref: 'http://link.aps.org/abstract/PRL/v97/e110406',
                    },
                ],
            },
            {
                participants: 'Francesco Giazotto, Tero T. Heikkilä, Arttu Luukanen, Alexander M. Savin, and Jukka P. Pekola',
                title: 'Opportunities for mesoscopics in thermometry and refrigeration: Physics and applications',
                links: [
                    {
                        linkText: 'cond-mat/0508093',
                        linkHref: 'http://arxiv.org/abs/cond-mat/0508093',
                    },
                    {
                        linkText: 'Reviews of Modern Physics <b>78</b>, 217 (2006)',
                        linkHref: 'http://link.aps.org/abstract/RMP/v78/p217',
                    },
                ],
            },
            {
                participants: 'F.W.J. Hekking and J.P. Pekola',
                title: 'Finite frequency quantum noise in an interacting mesoscopic conductor',
                links: [
                    {
                        linkText: 'cond-mat/0508450',
                        linkHref: 'http://arxiv.org/abs/cond-mat/0508450',
                    },
                    {
                        linkText: 'Physical Review Letters <b>96</b>, 056603 (2006)',
                        linkHref: 'http://link.aps.org/abstract/PRL/v96/e056603',
                    },
                ],
            },
            {
                participants: 'Mikio Nakahara, Juha J. Vartiainen, Yasushi Kondo, Shogo Tanimura, Kazuya Hata',
                title: 'Reducing execution time of quantum algorithms by additional permutation gates',
                links: [
                    {
                        linkText: 'quant-ph/0411153',
                        linkHref: 'http://arxiv.org/abs/quant-ph/0411153',
                    },
                    {
                        linkText: 'Physics Letters A <b>350</b>, 27 (2006)',
                        linkHref: 'http://dx.doi.org/10.1016/j.physleta.2005.10.002',
                    },
                ],
            },
            {
                participants: 'A.M. Savin, J.P. Pekola, D.V. Averin, and V.K. Semenov',
                title: 'Thermal budget of superconducting digital circuits at subkelvin temperatures',
                links: [
                    {
                        linkText: 'cond-mat/0509318',
                        linkHref: 'http://arxiv.org/abs/cond-mat/0509318',
                    },
                    {
                        linkText: 'Journal of Applied Physics <b>99</b>, 084501 (2006)',
                        linkHref: 'http://dx.doi.org/doi:10.1063/1.2187276',
                    },
                ],
            },
            {
                participants: 'V. Brosco, R. Fazio, F.W.J. Hekking, and J.P. Pekola',
                title: 'Model of qubits as devices to detect the third moment of current fluctuations',
                links: [
                    {
                        linkText: 'cond-mat/0603844',
                        linkHref: 'http://arxiv.org/abs/cond-mat/0603844',
                    },
                    {
                        linkText: 'Physical Review B <b>74</b>, 024524 (2006)',
                        linkHref: 'http://link.aps.org/abstract/PRB/v74/e024524',
                    },
                ],
            },
            {
                participants: 'M. Möttönen, J.P. Pekola, J.J. Vartiainen, V. Brosco, and F.W.J. Hekking',
                title: 'Measurement scheme of the Berry phase in superconducting circuits',
                links: [
                    {
                        linkText: 'cond-mat/0604198',
                        linkHref: 'http://arxiv.org/abs/cond-mat/0604198',
                    },
                    {
                        linkText: 'Physical Review B <b>73</b>, 214523 (2006)',
                        linkHref: 'http://link.aps.org/abstract/PRB/v73/e214523',
                    },
                ],
            },
        ],
    },
    {
        year: 2005,
        publications: [
            {
                participants: 'Juha Vartiainen',
                title: 'Kvanttilaskentaa suprajohteilla',
                links: [
                    {
                        linkText: 'Tietoyhteys <b>3</b>, 16 (2005)',
                        linkHref: 'http://www.csc.fi/lehdet/tietoyhteys/TY3_2005.pdf',
                    },
                ],
            },
            {
                participants: 'Jukka Pekola',
                title: 'Low-temperature physics: Tunnelling into the chill',
                links: [
                    {
                        linkText: 'Nature <b>435</b>, 889 (2005)',
                        linkHref: 'http://www.nature.com/nature/journal/v435/n7044/full/435889a.html',
                    },
                ],
            },
            {
                participants: 'M. Prunnila, P. Kivinen, A. Savin, P. Törmä, and J. Ahopelto',
                title: 'Intervalley-Scattering-Induced Electron-Phonon Energy Relaxation in Many-Valley Semiconductors at Low Temperatures',
                links: [
                    {
                        linkText: 'cond-mat/0506045',
                        linkHref: 'http://arxiv.org/abs/cond-mat/0506045',
                    },
                    {
                        linkText: 'Physical Review Letters <b>95</b>, 206602 (2005)',
                        linkHref: 'http://link.aps.org/abstract/PRL/v95/e206602',
                    },
                ],
            },
            {
                participants: 'J.P. Pekola, T.E. Nieminen, M. Meschke, J.M. Kivioja, A.O. Niskanen, and J.J. Vartiainen',
                title: 'Shot-noise-driven escape in hysteretic Josephson junctions',
                links: [
                    {
                        linkText: 'cond-mat/0502446',
                        linkHref: 'http://arxiv.org/abs/cond-mat/0502446',
                    },
                    {
                        linkText: 'Physical Review Letters <b>95</b>, 197004 (2005)',
                        linkHref: 'http://link.aps.org/abstract/PRL/v95/e197004',
                    },
                ],
            },
            {
                participants: 'J.M. Kivioja,T.E. Nieminen, J. Claudon, O. Buisson, F.W.J. Hekking, and J.P. Pekola',
                title: 'Observation of transition from escape dynamics to underdamped phase diffusion in a Josephson junction',
                links: [
                    {
                        linkText: 'cond-mat/0501383',
                        linkHref: 'http://arxiv.org/abs/cond-mat/0501383',
                    },
                    {
                        linkText: ' Physical Review Letters <b>94</b>, 247002 (2005)',
                        linkHref: 'http://link.aps.org/abstract/PRL/v94/e247002',
                    },
                ],
            },
            {
                participants: 'F. Giazotto and J.P. Pekola',
                title: 'Josephson tunnel junction controlled by quasiparticle injection',
                links: [
                    {
                        linkText: 'cond-mat/0405511',
                        linkHref: 'http://arxiv.org/abs/cond-mat/0405511',
                    },
                    {
                        linkText: 'Journal of Applied Physics <b>97</b>, 023908 (2005)',
                        linkHref: 'http://link.aip.org/link/?JAP/97/023908/1',
                    },
                ],
            },
        ],
    },
    {
        year: 2004,
        publications: [
            {
                participants: 'A.O. Niskanen, J.M. Kivioja, H. Seppä, and J.P. Pekola',
                title: 'Evidence of Cooper pair pumping with combined flux and voltage control',
                links: [
                    {
                        linkText: 'cond-mat/0410758',
                        linkHref: 'http://arxiv.org/abs/cond-mat/0410758',
                    },
                    {
                        linkText: 'Physical Review B <b>71</b>, 012513 (2004)',
                        linkHref: 'http://link.aps.org/abstract/PRB/v71/e012513',
                    },
                ],
            },
            {
                participants: 'J.P. Pekola',
                title: 'Josephson Junction as a Detector of Poissonian Charge Injection',
                links: [
                    {
                        linkText: 'cond-mat/0403673',
                        linkHref: 'http://arxiv.org/abs/cond-mat/0403673',
                    },
                    {
                        linkText: 'Physical Review Letters <b>93</b>, 206601 (2004)',
                        linkHref: 'http://link.aps.org/abstract/PRL/v93/e206601',
                    },
                ],
            },
            {
                participants: 'F. Giazotto, T.T. Heikkilä, F. Taddei, J. Pekola, and F. Beltram',
                title: 'Tailoring Josephson Coupling through superconductivity-induced nonequilibrium',
                links: [
                    {
                        linkText: 'cond-mat/0311384',
                        linkHref: 'http://arxiv.org/abs/cond-mat/0311384',
                    },
                    {
                        linkText: 'Physical Review Letters <b>92</b>, 137001 (2004)',
                        linkHref: 'http://link.aps.org/abstract/PRL/v92/e137001',
                    },
                ],
            },
            {
                participants: 'J.P. Pekola, T.T. Heikkilä, A.M. Savin, J.T. Flyktman, F. Giazotto, and F.W.J. Hekking',
                title: 'Limitations in cooling electrons using normal-metal-superconductor tunnel junctions',
                links: [
                    {
                        linkText: 'cond-mat/0312401',
                        linkHref: 'http://arxiv.org/abs/cond-mat/0312401',
                    },
                    {
                        linkText: 'Physical Review Letters <b>92</b>, 056804 (2004)',
                        linkHref: 'http://link.aps.org/abstract/PRL/v92/e056804',
                    },
                ],
            },
            {
                participants: 'J. Pekola, R. Schoelkopf, and J. Ullom',
                title: 'Cryogenics on a chip',
                links: [
                    {
                        linkText: 'Physics Today <b>57</b>, 41 (2004)',
                        linkHref: 'http://dx.doi.org/10.1063/1.1768673',
                    },
                ],
            },
            {
                participants: 'T. Kuhn, D. V. Anghel, J. P. Pekola, M. Manninen, and Y.M. Galperin',
                title: 'Heat transport in ultra-thin dielectric membranes and bridges',
                links: [
                    {
                        linkText: 'cond-mat/0404676',
                        linkHref: 'http://arxiv.org/abs/cond-mat/0404676',
                    },
                    {
                        linkText: 'Physical Review B <b>70</b>, 125425 (2004)',
                        linkHref: 'http://link.aps.org/abstract/PRB/v70/e125425',
                    },
                ],
            },
            {
                participants: 'F. Giazotto, T. T. Heikkilä, F. Taddei, R. Fazio, J.P. Pekola, F. Beltram',
                title: 'Mesoscopic supercurrent transistor controlled by nonequilibrium cooling',
                links: [
                    {
                        linkText: 'cond-mat/0404383',
                        linkHref: 'http://arxiv.org/abs/cond-mat/0404383',
                    },
                    {
                        linkText: 'Journal of Low Temperature Physics <b>136</b>, 435 (2004).',
                        linkHref: 'http://dx.doi.org/10.1023/B:JOLT.0000041276.95355.e8',
                    },
                ],
            },
            {
                participants: 'A.M. Savin, J.P. Pekola, J.T. Flyktman, A. Anthore, and F. Giazotto',
                title: 'Cold electron Josephson transistor',
                links: [
                    {
                        linkText: 'cond-mat/0403732',
                        linkHref: 'http://arxiv.org/abs/cond-mat/0403732',
                    },
                    {
                        linkText: 'Applied Physics Letters <b>84</b>, 4179 (2004).',
                        linkHref: 'http://dx.doi.org/10.1063/1.1756192',
                    },
                ],
            },
            {
                participants: 'A. Savin, J. Pekola, M. Prunnila, J. Ahopelto, and P. Kivinen',
                title: 'Electronic cooling and hot electron effects in heavily doped silicon-on-insulator film',
                links: [
                    {
                        linkText: 'Physica Scripta <b>T114</b>, 57 (2004)',
                        linkHref: 'http://dx.doi.org/10.1088/0031-8949/2004/T114/013',
                    },
                ],
            },
            {
                participants: 'P. Kivinen, M. Prunnila, A. Savin, P.Törmä, J. Pekola, and J. Ahopelto',
                title: 'Electron-phonon heat transport in degenerate Si at low temperatures',
                links: [
                    {
                        linkText: 'Physica Status Solidi (c) <b>1</b>, 2848 (2004)',
                        linkHref: 'http://dx.doi.org/10.1002/pssc.200405351',
                    },
                ],
            },
            {
                participants: 'J. Toppari, J. Kivioja, J. Pekola, and M.T. Savolainen',
                title: 'Turnstile behaviour of the Cooper pair pump',
                links: [
                    {
                        linkText: 'cond-mat/0311135',
                        linkHref: 'http://arxiv.org/abs/cond-mat/0311135',
                    },
                    {
                        linkText: 'Journal of Low Temperature Physics <b>136</b>, 57 (2004)',
                        linkHref: 'http://dx.doi.org/10.1023/B:JOLT.0000035371.17386.fe',
                    },
                ],
            },
            {
                participants: 'J. Pekola',
                title: 'Trends in thermometry',
                links: [
                    {
                        linkText: 'Journal of Low Temperature Physics <b>135</b>, 723 (2004)',
                        linkHref: 'http://dx.doi.org/10.1023/B:JOLT.0000029516.18146.42',
                    },
                ],
            },
            {
                participants: 'M. Meschke, J. Pekola, F. Gay, R. Rapp, and H. Godfrin',
                title: 'Electron thermalization in metallic islands probed by Coulomb blockade thermometry',
                links: [
                    {
                        linkText: 'Journal of Low Temperature Physics <b>134</b>, 1119 (2004)',
                        linkHref: 'http://dx.doi.org/10.1023/B:JOLT.0000016733.75220.5d',
                    },
                ],
            },
        ],
    },
];

export const phdThesis = [
    {
        year: 2020,
        thesis: [
            {
                title: 'Klaara Viisanen',
                linkText: 'Fast thermometry and energy relaxation measurements on metallic calorimeters',
                linkHref: 'https://aaltodoc.aalto.fi/handle/123456789/46579',
            },
            {
                title: 'Libin Wang',
                linkText: 'Experiments on thermal relaxation of copper films for nano-calorimetry',
                linkHref: 'https://aaltodoc.aalto.fi/handle/123456789/42350',
            },
        ],
    },
    {
        year: 2019,
        thesis: [
            {
                title: 'Jorden Senior',
                linkText: 'Heat Transport in Superconducting Quantum Circuits',
                linkHref: 'https://aaltodoc.aalto.fi/handle/123456789/41494',
            },
            {
                title: 'Shilpi Singh',
                linkText: 'Statistics of rare events in single-electron devices',
                linkHref: 'https://aaltodoc.aalto.fi/handle/123456789/36445',
            },
        ],
    },
    {
        year: 2018,
        thesis: [
            {
                title: 'Robab Najafi Jabdaraghi',
                linkText: 'Magnetometry by a proximity Josephson junction interferometer',
                linkHref: 'https://aaltodoc.aalto.fi/handle/123456789/30053',
            },
        ],
    },
    {
        year: 2017,
        thesis: [
            {
                title: 'Anna Feshchenko',
                linkText: 'Electron thermometry, refrigeration and heat transport in nanostructure at sub-kelvin temperatures',
                linkHref: 'https://aaltodoc.aalto.fi/handle/123456789/25287',
            },
        ],
    },
    {
        year: 2016,
        thesis: [
            {
                title: 'Jonne Koski',
                linkText: 'Heat transport, fluctuations, and Maxwell’s demon in electronic nanocircuits',
                linkHref: 'https://aaltodoc.aalto.fi/handle/123456789/20096',
            },
        ],
    },
    {
        year: 2015,
        thesis: [
            {
                title: 'Timothé Faivre',
                linkText: 'Low dissipation thermometry using superconducting tunnel junctions',
                linkHref: 'https://aaltodoc.aalto.fi/handle/123456789/18201',
            },
        ],
    },
    {
        year: 2014,
        thesis: [
            {
                title: 'Ville Maisi',
                linkText: 'Andreev tunneling and quasiparticle excitations in mesoscopic normal metal – superconductor structures',
                linkHref: 'http://urn.fi/URN:ISBN:978-952-6682-11-2',
            },
            {
                title: 'Simone Gasparinetti',
                linkText: 'Dissipation at the Nanoscale: Cooper-pair Pumpingand Electron Thermometry',
                linkHref: 'http://urn.fi/URN:ISBN:978-952-60-5920-4',
            },
        ],
    },
    {
        year: 2013,
        thesis: [
            {
                title: 'Olli-Pentti Saira',
                linkText: 'Electrostatic control of quasiparticle transport in superconducting hybrid nanostructures',
                linkHref: 'http://urn.fi/URN:ISBN:978-952-60-5076-8',
            },
        ],
    },
    {
        year: 2012,
        thesis: [
            {
                title: 'Juha Muhonen',
                linkText: 'Cooling and heat transport in low dimensional phonon systems, superconductors and silicon',
                linkHref: 'http://urn.fi/URN:ISBN:978-952-60-4670-9',
            },
        ],
    },
    {
        year: 2011,
        thesis: [
            {
                title: 'Joonas Peltonen',
                linkText: 'Fluctuations, Relaxation and Proximity Effect in Superconducting Circuits',
                linkHref: 'http://lib.tkk.fi/Diss/2011/isbn9789526043517/',
            },
        ],
    },
    {
        year: 2010,
        thesis: [
            {
                title: 'Tommy Holmqvist',
                linkText: 'Tunnel Junction Thermometry and Thermalisation of Electrons',
                linkHref: 'http://lib.tkk.fi/Diss/2010/isbn9789526030791/',
            },
        ],
    },
    {
        year: 2009,
        thesis: [
            {
                title: 'Antti Kemppinen',
                linkText: 'Tunnel Junction Thermometry and Thermalisation of Electrons',
                linkHref: 'http://lib.tkk.fi/Diss/2009/isbn9789525610543/',
            },
            {
                title: 'Andrey Timofeev',
                linkText: 'Tunnel Junctions as Detectors of Noise and Energy Relaxation in Superconducting Circuits',
                linkHref: 'http://lib.tkk.fi/Diss/2009/isbn9789522480255/',
            },
        ],
    },
    {
        year: 2005,
        thesis: [
            {
                title: 'Jani Kivioja',
                linkText: 'Mesoscopic Superconducting Tunnel Junction Devices: Experimental Studies of Performance Limitations',
                linkHref: 'http://lib.tkk.fi/Diss/2005/isbn9512277107/',
            },
        ],
    },
    {
        year: 2004,
        thesis: [
            {
                title: 'Antti Niskanen',
                linkText: 'Control of Quantum Evolution and Josephson Junction Circuits',
                linkHref: 'http://lib.tkk.fi/Diss/2004/isbn9513864219/',
            },
        ],
    },
];
