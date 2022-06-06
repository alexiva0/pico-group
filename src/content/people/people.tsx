import Image1 from './i/Pekola_Jukka_6x8.jpeg';
import Image2 from './i/golubev.jpeg';
import Image3 from './i/joonaspeltonen.jpeg';
import Image4 from './i/Azat_Gubaydullin2.jpeg';
import Image5 from './i/George_Thomas.jpeg';
import Image7 from './i/2230016.jpeg';
import Image8 from './i/elsa_mannila.jpeg';
import Image9 from './i/bayan.jpeg';
import Image10 from './i/thumbnail__9170585.jpeg';
import Image11 from './i/Rishabh_Upadhyay.jpeg';
import Image12 from './i/Diego_Subero.jpeg';
import Image13 from './i/Lvov_photo.png';
import Image14 from './i/Gunes.jpeg';

export interface IGroupPerson {
    name: string,
    degree?: string,
    image?: string,
    address?: string,
    phone?: string,
    fax?: string,
    email?: string,
    publications?: string,
}

export interface IPeople {
    people: IGroupPerson[],
};

export interface IGuestbookYearList {
    name: string,
    description: string,
    date: string,
};
interface IGuestbookYear {
    year: string;
    list: IGuestbookYearList[];
};
export interface IGuestbook {
    text: string;
    years: IGuestbookYear[];
};

export const groupPeople = {
    people: [
        {
            name: 'Prof. Jukka Pekola',
            degree: 'Professor, Dr.',
            image: Image1,
            address: 'Micronova, Tietotie 3, office\u00A04110 (4th floor)',
            phone: '+358 50 344 2697, <br /> +358 40 700 9290 (mobile)',
            fax: '+358-9-470 25008',
            email: 'jukka.pekola(at)aalto.fi',
            publications: 'https://publons.com/researcher/2680137/jukka-pekola/?utm_campaign=researcher_id_badge',
        },
        {
            name: 'Dr. Dmitry S. Golubev',
            degree: 'Research Fellow, Dr.',
            image: Image2,
            address: 'Micronova, Tietotie 3, office\u00A04160 (4th floor)',
            email: 'dmitry.golubev(at)aalto.fi',
            publications: 'https://publons.com/researcher/1523341/dmitry-golubev/?utm_campaign=researcher_id_badge',
        },
        {
            name: 'Dr. Joonas Peltonen',
            degree: 'Postdoctoral researcher, Dr.',
            image: Image3,
            address: 'Micronova, Tietotie 3, office\u00A04111 (4th floor)',
            phone: '+358-50-437-1594 (office)',
            email: 'joonas.peltonen(at)aalto.fi',
            publications: 'https://publons.com/researcher/2609045/joonas-t-peltonen/?utm_campaign=researcher_id_badge',
        },
        {
            name: 'Dr. Azat Gubaydullin',
            degree: 'Postdoctoral researcher, Dr.',
            image: Image4,
            address: 'Micronova, Tietotie 3, office\u00A04111 (4th floor)',
            phone: '+358-50-437-1594 (office)',
            email: 'azat.gubaydullin(at)aalto.fi',
        },
        {
            name: 'Dr. George Thomas',
            degree: 'Postdoctoral Researcher, Dr.',
            image: Image5,
            address: 'Micronova, Tietotie 3, office\u00A04160 (4th floor)',
            email: 'george.thomas(at)aalto.fi',
        },
        {
            name: 'Dr. Florian Blanchet',
            degree: 'Postdoctoral Researcher, Dr.',
            address: 'Micronova, Tietotie 3, office\u00A04160 (4th floor)',
            email: 'florian.blanchet(at)aalto.fi',
        },
        {
            name: 'Dr. Yu-Cheng Chang',
            degree: 'Research Associate',
            image: Image7,
            address: 'Micronova, Tietotie 3, office\u00A04112 (4th floor)',
            email: 'yu-cheng.chang(at)aalto.fi',
        },
        {
            name: 'M.Sc. Elsa Mannila',
            degree: 'Doctoral student',
            image: Image8,
            address: 'Micronova, Tietotie 3, office\u00A04112 (4th floor)',
            phone: '+358-40-513-6575',
            email: 'elsa.mannila(at)aalto.fi',
        },
        {
            name: 'M.Sc. Bayan Karimi',
            degree: 'Doctoral student',
            image: Image9,
            address: 'Micronova, Tietotie 3, office\u00A04112 (4th floor)',
            email: 'bayan.karimi(at)aalto.fi',
        },
        {
            name: 'M.Sc. Marco Marín Suárez',
            degree: 'Doctoral student, MSc.',
            image: Image10,
            address: 'Micronova, Tietotie 3, office\u00A04140 (4th floor)',
            phone: '+358-50-437-1594 (office)',
            email: 'marco.marinsuarez(at)aalto.fi',
        },
        {
            name: 'M.Sc. Rishabh Upadhyay',
            degree: 'Doctoral student',
            image: Image11,
            address: 'Micronova, Tietotie 3, office\u00A04112 (4th floor)',
            email: 'rishabh.upadhyay(at)aalto.fi',
        },
        {
            name: 'M. Sc. Diego Subero',
            degree: 'Doctoral student',
            image: Image12,
            address: 'Micronova, Tietotie 3, office\u00A04112 (4th floor)',
            email: 'diego.suberorengel@aalto.fi',
        },
        {
            name: 'M. Sc. Dmitrii Lvov',
            degree: 'Doctoral student',
            image: Image13,
            address: 'Micronova, Tietotie 3, office\u00A04112 (4th floor)',
            email: 'dmitrii.lvov@aalto.fi',
        },
    ],
};

export const administration = {
    people: [
        {
            name: 'Dr. Minna Gunes',
            degree: 'Scientific coordinator',
            image: Image14,
            address: 'Micronova, Tietotie 3, office\u00A04111 (4th floor)',
            phone: '+358 50 301 8442 (office)',
            email: 'minna.gunes(at)aalto.fi',
        },
    ],
};

export const recentVisitingScientists = [
    {
        name: 'Prof. Christian Enss (Heidelberg University, Germany)',
    },
    {
        name: 'Prof. Dmitri V. Averin (Stony Brook University, New York, USA)',
    },
    {
        name: 'Dr. Yuri Pashkin (NEC Nano Electronics Research Laboratories, Tsukuba, Japan)',
    },
    {
        name: 'Prof. Hervé Courtois (CNRS and University of Joseph Fourier, Grenoble, France)',
    },
    {
        name: 'Prof. Frank Hekking (CNRS and University of Joseph Fourier, Grenoble, France)',
    },
];

export const formerGroupMembers = [
    {
        name: 'Dr. Anne Anthore',
    },
    {
        name: 'Dr. Thomas Aref',
    },
    {
        name: 'Mr. Kurt Baarman',
    },
    {
        name: 'Dr. Massimo Borrelli',
    },
    {
        name: 'Dr. Timothé Faivre',
    },
    {
        name: 'Dr. Anna Feshchenko',
    },
    {
        name: 'M.Sc. Jouni Flyktman',
    },
    {
        name: 'Dr. Simone Gasparinetti',
    },
    {
        name: 'Dr. Meri Helle',
    },
    {
        name: 'Dr. Tommy Holmqvist',
    },
    {
        name: 'Mr. Antti Jokiluoma',
    },
    {
        name: 'Dr. Sergey Kafanov',
    },
    {
        name: 'Dr. Antti Kemppinen',
    },
    {
        name: 'Dr. Ivan Khaymovich',
    },
    {
        name: 'Dr. Jani Kivioja',
    },
    {
        name: 'M.Sc. Helena Knowles',
    },
    {
        name: 'Mr. Tuomas Kortelahti',
    },
    {
        name: 'Dr. Jonne Koski',
    },
    {
        name: 'Ms. Laura MacDonald',
    },
    {
        name: 'Ms. Sarah MacLeod',
    },
    {
        name: 'Prof. Matthias Meschke',
    },
    {
        name: 'Dr. Ville Maisi',
    },
    {
        name: 'Mr. Antti Moisio',
    },
    {
        name: 'Dr. Juha Muhonen',
    },
    {
        name: 'Mr. Jesse Muhojoki',
    },
    {
        name: 'Doc. Mikko Möttönen',
    },
    {
        name: 'Dr. Robab Najafi Jabdaraghi',
    },
    {
        name: 'Dr. Hung Nguyen',
    },
    {
        name: 'M.Sc. Tommi Nieminen',
    },
    {
        name: 'Dr. Antti Niskanen',
    },
    {
        name: 'Mr. Nicolas Paillet',
    },
    {
        name: 'Mr. Ilmo Räisänen',
    },
    {
        name: 'Dr. Alberto Ronzani',
    },
    {
        name: 'Dr. Olli-Pentti Saira',
    },
    {
        name: 'Dr. Alexander Savin',
    },
    {
        name: 'Dr. Paolo Solinas',
    },
    {
        name: 'Mr. Tuomas Talka',
    },
    {
        name: 'Dr. Matthieu Taupin',
    },
    {
        name: 'Dr. Andrey Timofeev',
    },
    {
        name: 'Dr. Jussi Toppari',
    },
    {
        name: 'Dr. Juha Vartiainen',
    },
    {
        name: 'Dr. Youngsoo Yoon',
    },
];

export const guestbook = {
    text: 'Starting from Jan 1, 2013 we keep a guestbook. <br /> Here is a list of our guests of last years.',
    years: [
        {
            year: 2017,
            list: [
                {
                    name: 'Oleg Astafiev',
                    description: 'Professor, Royal Holloway University of London',
                    date: 'Apr 19 to 22, 2017',
                },
                {
                    name: 'Fredrik Brange',
                    description: 'Mr, Lund University, Sweden',
                    date: 'Mar 13 to 17, 2017',
                },
                {
                    name: 'Michele Campisi',
                    description: 'Dr, Scuola Normale Superiore, Italy',
                    date: 'Jan 22 to 28, 2017; Apr 19 to 22, 2017; Sep 9 to 16, 2017',
                },
                {
                    name: 'Yu-Cheng Chang',
                    description: 'Mr, Institute of Physics, Academia Sinica, Taiwan',
                    date: 'Feb 15 2017 to Jan 15, 2018',
                },
                {
                    name: 'ChiiDong Chen',
                    description: 'Dr, Institute of Physics, Academia Sinica, Taiwan',
                    date: 'Jan 16 to Sep 15, 2017',
                },
                {
                    name: 'Hervé Courtois',
                    description: 'Professor, Institut Néel, CNRS and Université Grenoble Alpes, France',
                    date: 'Apr 18 to 22, 2017',
                },
                {
                    name: 'Christian Enss',
                    description: 'Professor, Heidelberg University, Germany',
                    date: 'Mar 29 to Apr 21, 2017; Sep 8 to 22, 2017; Dec 1 to 5, 2017',
                },
                {
                    name: 'Rosario Fazio',
                    description: 'Professor, Scuola Normale Superiore',
                    date: 'Jan 23 to 28, 2017; Apr 20 to 22, 2017',
                },
                {
                    name: 'Zhaoyu Fei',
                    description: 'M.Sc., Peking University, China',
                    date: 'Jan 8 to 22, 2017',
                },
                {
                    name: 'Ken Funo',
                    description: 'Dr, Peking University, China',
                    date: 'Jan 8 to 22, 2017',
                },
                {
                    name: 'Yuri Galperin',
                    description: 'rofessor, University of Oslo, Norway',
                    date: 'Jan 8 to 21, 2017; Apr 19 to 22, 2017, Nov 5 to 25, 2017',
                },
                {
                    name: 'Azat Gubaydullin',
                    description: 'Mr, RAS, Russia',
                    date: '13 to 14 Nov, 2017',
                },
                {
                    name: 'Wiebke Guichard',
                    description: 'Professor, Néel Institute – CNRS, Grenoble Alpes University, France',
                    date: 'Jul 5 to Aug 3, 2017',
                },
                {
                    name: 'Ivan Khaymovich',
                    description: 'Dr, Max Planck Institute, Germany',
                    date: 'Apr 8 to 23, 2017',
                },
                {
                    name: 'Heiner Linke',
                    description: 'Professor, Lund University, Sweden',
                    date: 'May 11 to 13, 2017',
                },
                {
                    name: 'Olivier Maillet',
                    description: 'Mr, CNRS, Grenoble, France',
                    date: 'Nov 2 to 3, 2017',
                },
                {
                    name: 'Arthur Marguerite',
                    description: 'Mr, ENS Paris, France',
                    date: 'May 24 to 26, 2017',
                },
                {
                    name: 'Alexander Mel’nikov',
                    description: 'Professor, Institute for Physics of Microstructures, RAS, Russia',
                    date: 'Apr 8 to 23, 2017',
                },
                {
                    name: 'Hung Nguyen',
                    description: 'Professor, Niels Bohr Institute, Denmark',
                    date: 'Nov 7 to 10, 2017',
                },
                {
                    name: 'Haitao Quan',
                    description: 'M.Sc., Peking University, China',
                    date: 'Jan 8 to 22, 2017',
                },
                {
                    name: 'Andreas Schnyder',
                    description: 'Dr, Max-Planck-Institut, Germany',
                    date: 'Feb 23 to 25, 2017',
                },
            ],
        },
        {
            year: 2016,
            list: [
                {
                    name: 'Joachim Ankerhold',
                    description: 'Professor, University of Ulm, Germany',
                    date: 'Jul 4 to 7, 2016',
                },
                {
                    name: 'Michele Campisi',
                    description: 'Dr, Scuola Normale Superiore, Italy',
                    date: 'May 23 to 25, 2016; Sep 27 to Oct 8, 2016',
                },
                {
                    name: 'Denis Basko',
                    description: 'Dr, Joseph Fourier University, France',
                    date: 'May 16 to 20, 2016',
                },
                {
                    name: 'Bivas Dutta',
                    description: 'Institute Néel, Grenoble, France',
                    date: 'Mar 20 to Apr 30, 2016; Jun 5 to 26, 2016; Jul 7 to Aug 7, 2016',
                },
                {
                    name: 'Christian Enss',
                    description: 'Professor, Heidelberg University, Germany',
                    date: 'May 2 to Jun 14, 2016; 19 Sep to 3 Oct, 2016',
                },
                {
                    name: 'Yuri Galperin',
                    description: 'Professor, University of Oslo',
                    date: 'Jan 24 to 30, 2016; May 8 to 25, 2016',
                },
                {
                    name: 'Francesco Giazotto',
                    description: 'Dr, NEST Istituto Nanoscienze-CNR & Scuola Normale Superiore, Italy',
                    date: 'May 22 to 29, 2016',
                },
                {
                    name: 'Wiebke Guichard',
                    description: 'Professor, Néel Institute – CNRS, Grenoble Alpes University, France',
                    date: 'Oct 17 to 21, 2016',
                },
                {
                    name: 'Frank Hekking',
                    description: 'Professor, Joseph Fourier University, France',
                    date: 'May 22 to 29, 2016',
                },
                {
                    name: 'Benjamin Huard',
                    description: 'Professor, Laboratoire Pierre Aigrain – Ecole Normale Supérieure, France',
                    date: 'May 24 to 25, 2016',
                },
                {
                    name: 'Alex Jones',
                    description: 'Lancaster University, UK',
                    date: 'Dec 11 to 17, 2016',
                },
                {
                    name: 'Ivan Khaymovich',
                    description: 'Dr, Joseph Fourier University, France',
                    date: 'May 12 to Jun 1, 2016',
                },
                {
                    name: 'Alexander Mel’nikov',
                    description: 'Professor, Institute for Physics of Microstructures, RAS, Russia',
                    date: 'May 11 to Jun 4, 2016; Oct 2 to 15, 2016',
                },
                {
                    name: 'Felix Ritort',
                    description: 'Professor, University of Barcelona, Spain',
                    date: 'May 11 to 14, 2016',
                },
                {
                    name: 'Michael Roukes',
                    description: 'Professor, California Institute of Technology, US',
                    date: 'Oct 6 to 10, 2016',
                },
                {
                    name: 'Keiji Saito',
                    description: 'Professor, Keio University, Japan',
                    date: 'Jan 24 to 30, 2016',
                },
                {
                    name: 'Fabio Taddei',
                    description: 'Dr, Scuola Normale di Pisa, Italy',
                    date: 'Dec 8 to 9, 2016',
                },
                {
                    name: 'Mathieu Taupin',
                    description: 'Dr, TU Wien, Austria',
                    date: 'Jan 4 to 29, 2016',
                },
                {
                    name: 'Maciej Zgirski',
                    description: 'Professor, Institute of Physics, Polish Academy of Sciences',
                    date: 'Sep 11 to 18, 2016',
                },
            ],
        },
        {
            year: 2015,
            list: [
                {
                    name: 'Sven Albrecht',
                    description: 'Niels Bohr Institute, Denmark',
                    date: 'Nov 17, 2015',
                },
                {
                    name: 'Joachim Ankerhold',
                    description: 'Professor, Universitaet Ulm',
                    date: 'July 8 to 11, 2015',
                },
                {
                    name: 'Alessandro Braggio',
                    description: 'Ph.D, CNR-SPIN, Genova',
                    date: 'Jan 08 to Jan 11, 2015',
                },
                {
                    name: 'Gianluigi Catelani',
                    description: 'Forschungszentrum Jülich, Germany',
                    date: 'Dec 20 to 23, 2015',
                },
                {
                    name: 'Lucas Casparis',
                    description: 'Niels Bohr Institute, Denmark',
                    date: 'Nov 17, 2015',
                },
                {
                    name: 'Vivek Chidambaram',
                    description: 'NPL, UK',
                    date: 'Nov 25 to 27, 2015',
                },
                {
                    name: 'Malcolm Conolly',
                    description: 'NPL, UK',
                    date: 'Nov 25 to 27, 2015',
                },
                {
                    name: 'Mingtang Deng',
                    description: 'Niels Bohr Institute, Denmark',
                    date: 'Nov 17, 2015',
                },
                {
                    name: 'Rosario Fazio',
                    description: 'Professor, Scuola Normale Superiore',
                    date: 'Apr 1, 2015',
                },
                {
                    name: 'Ian Ford',
                    description: 'Professor, University College London, UK',
                    date: 'Jan 22, 2015',
                },
                {
                    name: 'Yuri Galperin',
                    description: 'Professor, University of Oslo',
                    date: 'Jan 18 to Jan 25, 2015',
                },
                {
                    name: 'Richard George',
                    description: 'Professor, Lancaster University',
                    date: 'Sep 20 to Oct 3, 2015',
                },
                {
                    name: 'Timo Hyart',
                    description: 'Professor, Lancaster University',
                    date: 'Sep 20 to Oct 3, 2015',
                },
                {
                    name: 'Alexey Ioselevich',
                    description: 'Professor, Landau Institute for Theoretical Physics',
                    date: 'Jan 19 to Feb 1, 2015',
                },
                {
                    name: 'Ivan Khaymovich',
                    description: 'CNRS Grenoble',
                    date: 'Nov 12, 2015 to Jan 4, 2016',
                },
                {
                    name: 'Vladimir Kravtsov',
                    description: 'Professor, Abdus Salam International Centre for Theoretical Physics',
                    date: 'Mar 15 to Mar 27, 2015',
                },
                {
                    name: 'Ville Maisi',
                    description: 'Ph.D., ETH Zurich, Switzerland',
                    date: 'Aug 13, 2015',
                },
                {
                    name: 'Charles M. Marcus',
                    description: 'Professor, Niels Bohr Institute, Denmark',
                    date: 'Apr 22, 2015; Nov 17, 2015',
                },
                {
                    name: 'Alexander Mel’nikov',
                    description: 'Doctor of Science, Institute for Physics of Microstructures RAS, Russia',
                    date: 'Mar. 22 to Apr. 22, 2015; Nov 16 to Dec 12 2015',
                },
                {
                    name: 'Hung Nguyen',
                    description: 'Ph.D, Vietnam National University',
                    date: 'Jan 15 to May 14, 2015; Sept 29, 2015 to Jan 31, 2016',
                },
                {
                    name: 'Fabrizio Nichele',
                    description: 'Niels Bohr Institute, Denmark',
                    date: 'Nov 17, 2015',
                },
                {
                    name: 'Vadim Ponomarenko',
                    description: 'Professor, University of Minho',
                    date: 'Aug 26 to 30, 2015',
                },
                {
                    name: 'Valdimir Pudalov',
                    description: 'Professor, Moscow Institute of Physics and Technology, Russia',
                    date: 'Dec 9 to 11, 2015',
                },
                {
                    name: 'Felix Ritort',
                    description: 'Professor, Universitat de Barcelona, Spain',
                    date: 'Sep 24 to 25, 2015',
                },
                {
                    name: 'Valery Ryazanov',
                    description: 'Professor, Institute of Solid State Physics, Chernogolovka, Russia',
                    date: 'Nov 19 to 20, 2015',
                },
                {
                    name: 'Deividas Sabonis',
                    description: 'Niels Bohr Institute, Denmark',
                    date: 'Nov 17, 2015',
                },
                {
                    name: 'Peter Samuelsson',
                    description: 'Associate professor, Lund University, Sweden',
                    date: 'Aug 4 to 5, 2015',
                },
                {
                    name: 'Rafael Sánchez',
                    description: 'PhD, Instituto de Ciencia de Materiales de Madrid (ICMM-CSIC), Spain',
                    date: 'Sep 27 to 30, 2015',
                },
                {
                    name: 'Paolo Solinas',
                    description: 'Researcher, University of Genoa, SPIN-CNR, Italy',
                    date: 'Aug 10 to 15, 2015',
                },
                {
                    name: 'Yasuhiro Utsumi',
                    description: 'Associate Professor, Mie University',
                    date: 'July 17 to 26, 2015',
                },
                {
                    name: 'Maciej Zgirski',
                    description: 'Professor, Institute of Physics, Polish Academy of Sciences',
                    date: 'July 6 to 11, 2015',
                },
            ],
        },
        {
            year: 2014,
            list: [
                {
                    name: 'Joachim Ankerhold',
                    description: 'Professor, Universitaet Ulm',
                    date: 'Mar 24 to Apr 20, 2014',
                },
                {
                    name: 'Marco Arzeo',
                    description: 'M. Sc., Chalmers University of Technology',
                    date: 'Jan 13 to Feb 8, 2014',
                },
                {
                    name: 'Michele Campisi',
                    description: 'Ph.D, Scuola Normale Superiore di Pisa',
                    date: 'Jul 21 to Aug 01, 2014',
                },
                {
                    name: 'Rosario Fazio',
                    description: 'Professor, Scuola Normale Superiore',
                    date: 'Mar 24 to Mar 28, 2014',
                },
                {
                    name: 'Attila Geresdi',
                    description: 'PhD, Kavli Institute of Nanoscience, Delft University of Technology',
                    date: 'Sep 15 to Sep 16, 2014',
                },
                {
                    name: 'David Haviland',
                    description: 'Professor, Kungliga Tekniska Högskolan (KTH), Sweden',
                    date: 'Nov 18 to Nov 19, 2014',
                },
                {
                    name: 'Andrew Higginbotham',
                    description: 'M. Sc., Niels Bohr Institute, University of Copenhagen',
                    date: 'May 14, 2014',
                },
                {
                    name: 'Thomas S. Jespersen',
                    description: 'Associate Professor, Niels Bohr Institute, University of Copenhagen',
                    date: 'May 14, 2014',
                },
                {
                    name: 'Helen Kopnina',
                    description: 'Ph.D, The Hague University of Applied Science, Netherlands',
                    date: 'Jan 23 to Jan 25, 2014',
                },
                {
                    name: 'Peter Kopnin',
                    description: 'Ph.D, Alikhanov Institute for Theoretical and Experimental Physics, Russia',
                    date: 'Jan 23 to Jan 24, 2014',
                },
                {
                    name: 'Ferdinand Kuemmeth',
                    description: 'Associate Professor, Niels Bohr Institute, University of Copenhagen',
                    date: 'May 14, 2014',
                },
                {
                    name: 'Chuan Li',
                    description: 'M. Sc., Laboratoire de Physique des Solides, France',
                    date: 'May 19 to May 21, 2014',
                },
                {
                    name: 'Graham Machin',
                    description: 'Professor, National Physical Laboratory, UK',
                    date: 'Sep 24, 2014',
                },
                {
                    name: 'Charles M. Marcus',
                    description: 'Professor, The Niels Bohr Institute, Condensed Matter Physics',
                    date: 'May 14, 2014',
                },
                {
                    name: 'Alexander Mel’nikov',
                    description: 'Doctor of Science, Institute for physics of microstructures RAS, Russia',
                    date: 'Jan 9 to Jan 30, Oct 25 to Nov 21, 2014',
                },
                {
                    name: 'Shuji Nakamura',
                    description: 'Ph.D., National Institute of Advanced Industrial Science and Technology',
                    date: 'Nov 10, 2014 to Feb 05, 2015',
                },
                {
                    name: 'Karl Petersson',
                    description: 'Ph.D., Niels Bohr Institute, University of Copenhagen',
                    date: 'May 14, 2014',
                },
                {
                    name: 'Hugues Pothier',
                    description: 'Professor, French Alternative Energies and Atomic Energy Commission, France',
                    date: 'Apr 30 to May 2, 2014',
                },
                {
                    name: 'Yasuhiro Utsumi',
                    description: 'Ph.D, Mie University, Japan',
                    date: 'Apr 26 to May 4, 2014',
                },
                {
                    name: 'David van Zanten',
                    description: 'M.Sc.Tech, Institut Neel, France',
                    date: 'Jul 20 to Jul 22, 2014',
                },
                {
                    name: 'Maciej Zgirski',
                    description: 'PhD, Institute of Physics Polish Academy of Sciences',
                    date: 'Jul 14 to Dec 20, 2014',
                },
            ],
        },
        {
            year: 2013,
            list: [
                {
                    name: 'Astghik Adamyan',
                    description: 'Ph.D, Chalmers University of Technology',
                    date: 'Mar 3 to Mar 28 and May 15 to May 30, 2013',
                },
                {
                    name: 'Joachim Ankerhold',
                    description: 'Professor, University of Ulm',
                    date: 'Aug 15 to Sept 15, 2013',
                },
                {
                    name: 'Marco Arzeo',
                    description: 'M. Sc., Chalmers University of Technology',
                    date: 'Nov 4 to Dec 1, 2013',
                },
                {
                    name: 'Anton Averin',
                    description: 'Mr., University of Chicago',
                    date: 'Jun 24 to Aug 25, 2013',
                },
                {
                    name: 'Dmitri Averin',
                    description: 'Professor, Stony Brook University, SUNY',
                    date: 'May 28 to August 25, 2013',
                },
                {
                    name: 'Massimo Borrelli',
                    description: 'M. Sc., Heriot-Watt University',
                    date: 'Nov 4 to Dec 13, 2013',
                },
                {
                    name: 'Michele Campisi',
                    description: 'Ph.D, University of Augsburg',
                    date: 'Sept 23 to Sept 25, 2013',
                },
                {
                    name: 'Anna Ferring',
                    description: 'Ms., Heidelberg University',
                    date: 'Sep 1, 2012, to Jul 31, 2013',
                },
                {
                    name: 'Vera Gramich',
                    description: 'M. Sc., University of Ulm, starting',
                    date: 'May 6, 2013',
                },
                {
                    name: 'Frank Hekking',
                    description: 'Professor, Joseph Fourier University',
                    date: 'Feb 18 to Mar 6, Apr 22 to May 10, Jul 15 to Jul 19, 2013',
                },
                {
                    name: 'Alexey Ioselevich',
                    description: 'Professor, Landau Institute for Theoretical Physics',
                    date: 'Dec 5 to Dec 14, 2013',
                },
                {
                    name: 'Dania Kambly',
                    description: 'M.Sc., University of Geneva',
                    date: 'Mar 5 to Mar 11, 2013',
                },
                {
                    name: 'Jens Koch',
                    description: 'Professor, Northwestern University',
                    date: 'May 15, 2013',
                },
                {
                    name: 'Mario Palma',
                    description: 'M.Sc., Universita’ di Napoli Federico II',
                    date: 'Feb 6, 2013',
                },
                {
                    name: 'Vadim Ponomarenko',
                    description: 'Ph.D, University of Minho',
                    date: 'Aug 15 to Sept 14, 2013',
                },
                {
                    name: 'James Richardson-Bullock',
                    description: 'Ph. D., University of Warwick',
                    date: 'Jul 14-20, 2013',
                },
                {
                    name: 'Takahiro Sagawa',
                    description: 'Professor, University of Tokyo',
                    date: 'Sept 16 to Oct 2, 2013',
                },
                {
                    name: 'Gerd Schön',
                    description: 'Professor, Karlsruhe Institute of Technology',
                    date: 'Mar 27 to Mar 28, 2013',
                },
                {
                    name: 'Mathias Solana',
                    description: 'Mr., University Paris Diderot',
                    date: '2013',
                },
                {
                    name: 'Paolo Solinas',
                    description: 'Ph.D., University Paris Diderot',
                    date: 'Apr 20 to Apr 27, 2013',
                },
                {
                    name: 'Mathieu Taupin',
                    description: 'Ph.D., CEA Grenoble',
                    date: 'Dec 9 to Dec 10, 2013',
                },
                {
                    name: 'Philip Wollfarth',
                    description: 'M.Sc., Karlsruhe Institute of Technology',
                    date: 'Mar 25 to Mar 27, 2013',
                },
                {
                    name: 'Maciej Zgirski',
                    description: 'Ph.D., Institute of Physics Polish Academy of Sciences',
                    date: 'Jul 1 to Jul 5, 2013',
                },
            ],
        },
    ],
};
