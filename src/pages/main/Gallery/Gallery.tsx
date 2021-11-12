import React, { useMemo, useState } from 'react';
import cnCreate from 'utils/cnCreate';
import Carousel from 'react-image-gallery';
import ContentArea from 'components/ContentArea/ContentArea';
import Popup from 'components/Popup/Popup';
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
import './Gallery.css';

interface IPhoto {
  original: string,
  thumbnail: string,
  // original: 'src/pages/main/Gallery/i/Photo_4.jpeg',
  alt: string,
  footnote: string,
}

const data: IPhoto[] = [
  {
    original: Img1,
    thumbnail: Thumbnail1,
    // original: 'src/pages/main/Gallery/i/Photo_4.jpeg',
    alt: 'Anna and Ville work on a cryostat.',
    footnote: 'Anna and Ville work on a cryostat.',
  },
  {
    original: Img2,
    thumbnail: Thumbnail2,
    // original: './i/Photo_5.jpeg',
    alt: 'Timothe works on proper thermalization of cables.',
    footnote: 'Timothe works on proper thermalization of cables.',
  },
  {
    original: Img3,
    thumbnail: Thumbnail3,
    // original: './i/Photo_6.jpeg',
    alt: 'Ville checks the wires before measurements.',
    footnote: 'Ville checks the wires before measurements.',
  },
  {
    original: Img4,
    thumbnail: Thumbnail4,
    // original: './i/Photo_7',
    alt: 'Timothe and Simone work on PICO’s dry cryostat, aptly named PICO Dry.',
    footnote: 'Timothe and Simone work on PICO’s dry cryostat, aptly named PICO Dry.',
  },
  {
    original: Img5,
    thumbnail: Thumbnail5,
    // thumbnail: './i/Thumbnails/Thumbnail_8.jpg',
    alt: 'Anna and Ville working on our second PDR called PICO II.',
    footnote: 'Anna and Ville working on our second PDR called PICO II.',
  },
  {
    original: Img6,
    thumbnail: Thumbnail6,
    // thumbnail: './i/Thumbnails/Thumbnail_9.jpg',
    alt: 'The RF capabilities of PICO II are visible in the foreground as Anna looks at the connectors.',
    footnote: 'The RF capabilities of PICO II are visible in the foreground as Anna looks at the connectors.',
  },
  {
    original: Img7,
    thumbnail: Thumbnail7,
    // thumbnail: './i/Thumbnails/Thumbnail_10.jpg',
    alt: 'Ville and Timothe work on a sample stage',
    footnote: 'Ville and Timothe work on a sample stage',
  },
  {
    original: Img8,
    thumbnail: Thumbnail8,
    // thumbnail: './i/Thumbnails/Thumbnail_11.jpg',
    alt: 'Matthias explains an amusing feature of the data to the rest of the group.',
    footnote: 'Matthias explains an amusing feature of the data to the rest of the group.',
  },
  {
    original: Img9,
    thumbnail: Thumbnail9,
    // thumbnail: './i/Thumbnails/Thumbnail_12.jpg',
    alt: 'Physics in a room.',
    footnote: 'Physics in a room.',
  },
  {
    original: Img10,
    thumbnail: Thumbnail10,
    // thumbnail: './i/Thumbnails/Thumbnail_111.jpg',
    alt: 'Pico-group outside Micronova in December 2010.',
    footnote: 'Pico-group outside Micronova in December 2010. From left: Jukka Pekola, Thomas Aref, Olli-Pentti Saira, Matthias Meschke, Simone Gasparinetti, Joonas Peltonen (former member), Juha Muhonen (former member), Ville Maisi (MIKES), Mikko Möttönen (former member), and Timothé Faivre. Missing from the picture: Youngsoo Yoon (former member) and Jonne Koski.',
  },
  {
    original: Img11,
    thumbnail: Thumbnail11,
    // thumbnail: './i/Thumbnails/Thumbnail_222.jpg',
    alt: 'Pico-group in Sibeliuspuisto (Sibelius park) in August 2011.',
    footnote: 'Pico-group in Sibeliuspuisto (Sibelius park) in August 2011. From left: Antti Peltonen (technical staff), Hung Nyugen, Simone Gasparinetti, Helena Knowles (former member), Matthias Meschke, Mikko Möttönen (former member), Anna Feshchenko, Olli-Pentti Saira, Ville Maisi (MIKES), Jukka Pekola, Thomas Aref, Timothé Faivre, Juha Muhonen (former member), Youngsoo Yoon (former member) and Jonne Koski.',
  },
  {
    original: Img12,
    thumbnail: Thumbnail12,
    // thumbnail: './i/Thumbnails/Thumbnail_333.jpg',
    alt: 'Pico-group in the lab (June 2012).',
    footnote: 'Pico-group in the lab (June 2012). From left: Hung Nguyen (former member), Simone Gasparinetti (former member), Matthias Meschke, Anna Feshchenko, Ville Maisi (former member), Jukka Pekola, Thomas Aref (former member), Olli-Pentti Saira, Klaara Viisanen and Timothé Faivre. Not shown: Jonne Koski.',
  },
  {
    original: Img13,
    thumbnail: Thumbnail13,
    // thumbnail: './i/Thumbnails/Thumbnail_444.jpg',
    alt: 'Pico-group, June 2016',
    footnote: 'Pico-group, June 2016. From the left: Minna Günes, Robab Najafi Jabdaraghi, Klaara Viisanen, Shilpi Singh, Jesse Muhojoki, Anna Feshchenko, Elsa Mannila, Mattijs Mientki, Jukka Pekola, Ville Maisi, Joonas Peltonen, Bivas Dutta, Matthias Meschke, Libin Wang, Antti Jokiluoma, Alberto Ronzani, Dmitri Golubev, Jorden Senior.',
  },
  {
    original: Img14,
    thumbnail: Thumbnail14,
    // thumbnail: './i/Thumbnails/Thumbnail_555.jpg',
    alt: 'Pico-group (February 2017).',
    footnote: 'Pico-group (February 2017). In front (from left): Libin Wang, ChiiDong Chen, Ville Maisi, Shilpi Singh, Anna Feshchenko, Jukka Pekola. In the middle (from left): Antti Moisio (half visible), Alberto Ronzani, Bayan Karimi, Leila Najafi. Behind (from left): Jorden Senior, Joonas Peltonen, Jesse Muhojoki, Elsa Mannila, Matthias Meschke, Dmitri Golubev. Not in the picture: Klaara Viisanen, Randy Chang.',
  },
  {
    original: Img15,
    thumbnail: Thumbnail15,
    // thumbnail: './i/Thumbnails/Thumbnail_666.jpg',
    alt: 'Pico-group in March 2020.',
    footnote: 'Pico-group in March 2020. From the left: Rishabh Upadhyay, George Thomas, Olivier Maillet, Florian Blanchet, Dmitry Golubev, Marco Marin Suarez, Joonas Peltonen, Bayan Karimi, Jukka Pekola, Yu-Cheng Chang, Elsa Mannila, Azat Gubaydullin, Elena Egorova, Diego Subero, Danial Majidi.',
  },
];

const cn = cnCreate('gallery');
const Gallery = () => {
  const [isCarouselOpened, setIsCarouselOpened] = useState(false);
  const [photoId, setPhotoId] = useState(data[0].thumbnail);

  const sortedData = useMemo(() => {
    return data.reduce((acc, currentItem, index) => {
      acc[index%5].push(currentItem);

      return acc;
    }, [[], [], [], [], []] as IPhoto[][]);
  }, []);

  const handlePhotoClick = (thumbnail: string) => () => {
    setIsCarouselOpened(true);
    setPhotoId(thumbnail);
  };

  const handlePopupClose = (): void => {
    setIsCarouselOpened(false);
  };

  const getPhotoIndex = (): number => {
    return data.findIndex((elem) => {
      return elem.thumbnail === photoId;
    });
  };

  return (
    <div className={cn()}>
      <ContentArea>
        <div className={cn('inner')}>
          <h2 className={cn('title')}>
            Our gallery
          </h2>
          <div className={cn('container')}>
              {sortedData.map((arr, index) => (
                <div className={cn('column')} key={index}>
                  {arr.map(({ thumbnail, alt }, subIndex) => (
                    <div className={cn('image-box')} key={thumbnail + subIndex} onClick={handlePhotoClick(thumbnail)}>
                      <img src={thumbnail} alt={alt} className={cn('image')} />
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </div>
      </ContentArea>
      {isCarouselOpened && (
        <Popup isOpened={isCarouselOpened} onClose={handlePopupClose}>
          <ContentArea>
            <Carousel items={data} startIndex={getPhotoIndex()} />
          </ContentArea>
        </Popup>
      )}
    </div>
  );
};

export default Gallery;
