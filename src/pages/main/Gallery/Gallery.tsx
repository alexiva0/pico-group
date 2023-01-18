import React from 'react';
import cnCreate from 'utils/cnCreate';
// import useAppContext from 'hooks/useAppContext';
import ContentArea from 'components/ContentArea/ContentArea';
import Carousel from 'components/Carousel/Carousel';
import ImageBox from 'components/ImageBox/ImageBox';
import { gallery } from 'content/gallery/gallery-data';
import './Gallery.css';

const cn = cnCreate('gallery');
const Gallery: React.FC = () => {
  // const { isMobileWide } = useAppContext();
  // const paginationOptions = isMobileWide ? false : { clickable: true };

  return (
    <div className={cn()}>
      <ContentArea>
        <div className={cn('inner')}>
          <h2 className={cn('title')}>
            Our gallery
          </h2>
          <Carousel>
              {gallery.map(({ original, description }, i) => (
                <div className={cn('slide')} key={i + description}>
                  <ImageBox
                    classes={{image: cn('image')}}
                    image={original}
                    footnoteText={description}
                    isFootnoteCollapsed
                  />
                </div>
              ))}
           </Carousel>
        </div>
      </ContentArea>
    </div>
  );
};

export default Gallery;
