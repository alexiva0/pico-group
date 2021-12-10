import Thumbnail1 from './i/Thumbnails/Thumbnail_4.jpg';
import Thumbnail2 from './i/Thumbnails/Thumbnail_5.jpg';
import Thumbnail3 from './i/Thumbnails/Thumbnail_6.jpg';
import Thumbnail4 from './i/Thumbnails/Thumbnail_7.jpg';
import Thumbnail5 from './i/Thumbnails/Thumbnail_8.jpg';
import Thumbnail6 from './i/Thumbnails/Thumbnail_9.jpg';
import Thumbnail7 from './i/Thumbnails/Thumbnail_10.jpg';
import Thumbnail8 from './i/Thumbnails/Thumbnail_11.jpg';
import Thumbnail9 from './i/Thumbnails/Thumbnail_12.jpg';
import Thumbnail10 from './i/Thumbnails/Thumbnail_111.jpg';
import Thumbnail11 from './i/Thumbnails/Thumbnail_222.jpg';
import Thumbnail12 from './i/Thumbnails/Thumbnail_333.jpg';
import Thumbnail13 from './i/Thumbnails/Thumbnail_444.jpg';
import Thumbnail14 from './i/Thumbnails/Thumbnail_555.jpg';
import Thumbnail15 from './i/Thumbnails/Thumbnail_666.jpg';
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
    thumbnail: string,
    alt: string,
    description: string,
  }

export const gallery: IPhoto[] = [
    {
      original: Img1,
      thumbnail: Thumbnail1,
      alt: 'Anna and Ville work on a cryostat.',
      description: 'Anna and Ville work on a cryostat.',
    },
    {
      original: Img2,
      thumbnail: Thumbnail2,
      alt: 'Timothe works on proper thermalization of cables.',
      description: 'Timothe works on proper thermalization of cables.',
    },
    {
      original: Img3,
      thumbnail: Thumbnail3,
      alt: 'Ville checks the wires before measurements.',
      description: 'Ville checks the wires before measurements.',
    },
    {
      original: Img4,
      thumbnail: Thumbnail4,
      alt: 'Timothe and Simone work on PICO’s dry cryostat, aptly named PICO Dry.',
      description: 'Timothe and Simone work on PICO’s dry cryostat, aptly named PICO Dry.',
    },
    {
      original: Img5,
      thumbnail: Thumbnail5,
      alt: 'Anna and Ville working on our second PDR called PICO II.',
      description: 'Anna and Ville working on our second PDR called PICO II.',
    },
    {
      original: Img6,
      thumbnail: Thumbnail6,
      alt: 'The RF capabilities of PICO II are visible in the foreground as Anna looks at the connectors.',
      description: 'The RF capabilities of PICO II are visible in the foreground as Anna looks at the connectors.',
    },
    {
      original: Img7,
      thumbnail: Thumbnail7,
      alt: 'Ville and Timothe work on a sample stage',
      description: 'Ville and Timothe work on a sample stage',
    },
    {
      original: Img8,
      thumbnail: Thumbnail8,
      alt: 'Matthias explains an amusing feature of the data to the rest of the group.',
      description: 'Matthias explains an amusing feature of the data to the rest of the group.',
    },
    {
      original: Img9,
      thumbnail: Thumbnail9,
      alt: 'Physics in a room.',
      description: 'Physics in a room.',
    },
    {
      original: Img10,
      thumbnail: Thumbnail10,
      alt: 'Pico-group outside Micronova in December 2010.',
      description: 'Pico-group outside Micronova in December 2010. From left: Jukka Pekola, Thomas Aref, Olli-Pentti Saira, Matthias Meschke, Simone Gasparinetti, Joonas Peltonen (former member), Juha Muhonen (former member), Ville Maisi (MIKES), Mikko Möttönen (former member), and Timothé Faivre. Missing from the picture: Youngsoo Yoon (former member) and Jonne Koski.',
    },
    {
      original: Img11,
      thumbnail: Thumbnail11,
      alt: 'Pico-group in Sibeliuspuisto (Sibelius park) in August 2011.',
      description: 'Pico-group in Sibeliuspuisto (Sibelius park) in August 2011. From left: Antti Peltonen (technical staff), Hung Nyugen, Simone Gasparinetti, Helena Knowles (former member), Matthias Meschke, Mikko Möttönen (former member), Anna Feshchenko, Olli-Pentti Saira, Ville Maisi (MIKES), Jukka Pekola, Thomas Aref, Timothé Faivre, Juha Muhonen (former member), Youngsoo Yoon (former member) and Jonne Koski.',
    },
    {
      original: Img12,
      thumbnail: Thumbnail12,
      alt: 'Pico-group in the lab (June 2012).',
      description: 'Pico-group in the lab (June 2012). From left: Hung Nguyen (former member), Simone Gasparinetti (former member), Matthias Meschke, Anna Feshchenko, Ville Maisi (former member), Jukka Pekola, Thomas Aref (former member), Olli-Pentti Saira, Klaara Viisanen and Timothé Faivre. Not shown: Jonne Koski.',
    },
    {
      original: Img13,
      thumbnail: Thumbnail13,
      alt: 'Pico-group, June 2016',
      description: 'Pico-group, June 2016. From the left: Minna Günes, Robab Najafi Jabdaraghi, Klaara Viisanen, Shilpi Singh, Jesse Muhojoki, Anna Feshchenko, Elsa Mannila, Mattijs Mientki, Jukka Pekola, Ville Maisi, Joonas Peltonen, Bivas Dutta, Matthias Meschke, Libin Wang, Antti Jokiluoma, Alberto Ronzani, Dmitri Golubev, Jorden Senior.',
    },
    {
      original: Img14,
      thumbnail: Thumbnail14,
      alt: 'Pico-group (February 2017).',
      description: 'Pico-group (February 2017). In front (from left): Libin Wang, ChiiDong Chen, Ville Maisi, Shilpi Singh, Anna Feshchenko, Jukka Pekola. In the middle (from left): Antti Moisio (half visible), Alberto Ronzani, Bayan Karimi, Leila Najafi. Behind (from left): Jorden Senior, Joonas Peltonen, Jesse Muhojoki, Elsa Mannila, Matthias Meschke, Dmitri Golubev. Not in the picture: Klaara Viisanen, Randy Chang.',
    },
    {
      original: Img15,
      thumbnail: Thumbnail15,
      alt: 'Pico-group in March 2020.',
      description: 'Pico-group in March 2020. From the left: Rishabh Upadhyay, George Thomas, Olivier Maillet, Florian Blanchet, Dmitry Golubev, Marco Marin Suarez, Joonas Peltonen, Bayan Karimi, Jukka Pekola, Yu-Cheng Chang, Elsa Mannila, Azat Gubaydullin, Elena Egorova, Diego Subero, Danial Majidi.',
    },
  ];
