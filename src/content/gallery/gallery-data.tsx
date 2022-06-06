import Img1 from './i/Photo_4.jpeg';
import Img2 from './i/Photo_5.jpeg';
import Img3 from './i/Photo_6.jpeg';
import Img4 from './i/Photo_7.jpeg';
import Img5 from './i/Photo_8.jpeg';
import Img6 from './i/Photo_9.jpeg';
import Img7 from './i/Photo_10.jpeg';
import Img8 from './i/Photo_11.jpeg';
import Img9 from './i/Photo_12.jpeg';
import Img10 from './i/Photo_111.jpeg';
import Img11 from './i/Photo_222.jpeg';
import Img12 from './i/Photo_333.jpeg';
import Img13 from './i/Photo_444.jpeg';
import Img14 from './i/Photo_555.jpeg';
import Img15 from './i/Photo_666.jpeg';

export interface IPhoto {
    original: string,
    description: string,
  }

export const gallery: IPhoto[] = [
    {
      original: Img1,
      description: 'Anna and Ville work on a cryostat.',
    },
    {
      original: Img2,
      description: 'Timothe works on proper thermalization of cables.',
    },
    {
      original: Img3,
      description: 'Ville checks the wires before measurements.',
    },
    {
      original: Img4,
      description: 'Timothe and Simone work on PICO’s dry cryostat, aptly named PICO Dry.',
    },
    {
      original: Img5,
      description: 'Anna and Ville working on our second PDR called PICO II.',
    },
    {
      original: Img6,
      description: 'The RF capabilities of PICO II are visible in the foreground as Anna looks at the connectors.',
    },
    {
      original: Img7,
      description: 'Ville and Timothe work on a sample stage',
    },
    {
      original: Img8,
      description: 'Matthias explains an amusing feature of the data to the rest of the group.',
    },
    {
      original: Img9,
      description: 'Physics in a room.',
    },
    {
      original: Img10,
      description: 'Pico-group outside Micronova in December 2010. From left: Jukka Pekola, Thomas Aref, Olli-Pentti Saira, Matthias Meschke, Simone Gasparinetti, Joonas Peltonen (former member), Juha Muhonen (former member), Ville Maisi (MIKES), Mikko Möttönen (former member), and Timothé Faivre. Missing from the picture: Youngsoo Yoon (former member) and Jonne Koski.',
    },
    {
      original: Img11,
      description: 'Pico-group in Sibeliuspuisto (Sibelius park) in August 2011. From left: Antti Peltonen (technical staff), Hung Nyugen, Simone Gasparinetti, Helena Knowles (former member), Matthias Meschke, Mikko Möttönen (former member), Anna Feshchenko, Olli-Pentti Saira, Ville Maisi (MIKES), Jukka Pekola, Thomas Aref, Timothé Faivre, Juha Muhonen (former member), Youngsoo Yoon (former member) and Jonne Koski.',
    },
    {
      original: Img12,
      description: 'Pico-group in the lab (June 2012). From left: Hung Nguyen (former member), Simone Gasparinetti (former member), Matthias Meschke, Anna Feshchenko, Ville Maisi (former member), Jukka Pekola, Thomas Aref (former member), Olli-Pentti Saira, Klaara Viisanen and Timothé Faivre. Not shown: Jonne Koski.',
    },
    {
      original: Img13,
      description: 'Pico-group, June 2016. From the left: Minna Günes, Robab Najafi Jabdaraghi, Klaara Viisanen, Shilpi Singh, Jesse Muhojoki, Anna Feshchenko, Elsa Mannila, Mattijs Mientki, Jukka Pekola, Ville Maisi, Joonas Peltonen, Bivas Dutta, Matthias Meschke, Libin Wang, Antti Jokiluoma, Alberto Ronzani, Dmitri Golubev, Jorden Senior.',
    },
    {
      original: Img14,
      description: 'Pico-group (February 2017). In front (from left): Libin Wang, ChiiDong Chen, Ville Maisi, Shilpi Singh, Anna Feshchenko, Jukka Pekola. In the middle (from left): Antti Moisio (half visible), Alberto Ronzani, Bayan Karimi, Leila Najafi. Behind (from left): Jorden Senior, Joonas Peltonen, Jesse Muhojoki, Elsa Mannila, Matthias Meschke, Dmitri Golubev. Not in the picture: Klaara Viisanen, Randy Chang.',
    },
    {
      original: Img15,
      description: 'Pico-group in March 2020. From the left: Rishabh Upadhyay, George Thomas, Olivier Maillet, Florian Blanchet, Dmitry Golubev, Marco Marin Suarez, Joonas Peltonen, Bayan Karimi, Jukka Pekola, Yu-Cheng Chang, Elsa Mannila, Azat Gubaydullin, Elena Egorova, Diego Subero, Danial Majidi.',
    },
  ];
