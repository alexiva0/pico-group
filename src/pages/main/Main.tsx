import React from 'react';
import cnCreate from 'utils/cnCreate';
import Intro from 'pages/main/Intro/Intro';
import Facilities from 'pages/main/Facilities/Facilities';
import LatestNews from 'pages/main/LatestNews/LatestNews';
import Gallery from 'pages/main/Gallery/Gallery';
import './Main.css';

const cn = cnCreate('main');
const Main: React.FC = () => {
  return (
    <div className={cn()}>
      <Intro />
      <Facilities />
      <LatestNews />
      <Gallery />
    </div>
  );
};

export default Main;
