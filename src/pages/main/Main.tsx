import React from 'react';
import cnCreate from 'utils/cnCreate';
import Banner from 'pages/main/Banner/Banner';
import About from 'pages/main/About/About';
import Partners from 'pages/main/Infrastructure/Infrastructure';
import Facilities from 'pages/main/Facilities/Facilities';
import LatestNews from 'pages/main/LatestNews/LatestNews';
import Gallery from 'pages/main/Gallery/Gallery';
import './Main.css';

const cn = cnCreate('main');
const Main: React.FC = () => {
  return (
    <div className={cn()}>
      <Banner />
      <About />
      <Partners />
      <Facilities />
      <LatestNews />
      <Gallery />
    </div>
  );
};

export default Main;
