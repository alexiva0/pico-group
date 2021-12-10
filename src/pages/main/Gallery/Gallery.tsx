import React, { useMemo, useState } from 'react';
import cnCreate from 'utils/cnCreate';
import Carousel from 'react-image-gallery';
import ContentArea from 'components/ContentArea/ContentArea';
import Popup from 'components/Popup/Popup';
import { gallery, IPhoto } from 'content/gallery/gallery-data';
import './Gallery.css';

const cn = cnCreate('gallery');
const Gallery: React.FC = () => {
  const [isCarouselOpened, setIsCarouselOpened] = useState(false);
  const [photoId, setPhotoId] = useState(gallery[0].thumbnail);

  const sortedData = useMemo(() => {
    return gallery.reduce((acc, currentItem, index) => {
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
    return gallery.findIndex((elem) => {
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
            <Carousel items={gallery} startIndex={getPhotoIndex()} />
          </ContentArea>
        </Popup>
      )}
    </div>
  );
};

export default Gallery;
