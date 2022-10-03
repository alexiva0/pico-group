import React from 'react';
import cnCreate from 'utils/cnCreate';
import './Tile.css';

interface ITileProps {
  date: string,
  title: string,
  linkHref: string,
};

const cn = cnCreate('tile');
const Tile: React.FC<ITileProps> = ({ date, title, linkHref }) => (
  <div className={cn()}>
    <a href={linkHref} className={cn('link')}>
      <p className={cn('date')}>{date}</p>
      <p className={cn('title')}>{title}</p>
    </a>
  </div>
);

export default Tile;
