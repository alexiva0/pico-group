import React from 'react';
import cnCreate from 'utils/cnCreate';
import useAppContext from 'hooks/useAppContext';
import Picture from './i/Banner.jpg';
import ContentArea from 'components/ContentArea/ContentArea';
import Button from 'components/Button/Button';
import './Banner.css';

const cn = cnCreate('banner');
const Banner: React.FC = () => {
  const { isMobile } = useAppContext();

  const headerHeight = isMobile ? 50 : 70;
  const pageHeight = window.innerHeight - headerHeight;

  const handleArrowClick = () => {
    window.scrollTo({
      top: window.innerHeight - headerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className={cn()} style={{ backgroundImage: `url('${Picture}')`, height: `${pageHeight}px` }}>
      <ContentArea className={cn('inner')}>
        <div className={cn('content')}>
          <h1 className={cn('title')}>Quantum phenomena and{'\u00A0'}devices</h1>
          <p className={cn('paragraph')}>We are one of the eleven strong research groups focusing on{'\u00A0'}experiments on single quanta in solid state and device physics, theory of open quantum systems, and engineering capability to{'\u00A0'}implement quantum technology.</p>
          <Button href="/research">Our research</Button>
        </div>
      </ContentArea>
      <div className={cn('arrow-down')} onClick={handleArrowClick}>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" className={cn('icon')}>
          <path d="M4 11L15 22L26 11" stroke="#E7E7E7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

export default Banner;
