import React from 'react';
import cnCreate from 'utils/cnCreate';
import './Tile.css';

interface Props {
  date: string,
  title: string,
  linkHref: string,
};

const cn = cnCreate('tile');
const Tile: React.FC<Props> = ({ date, title, linkHref }) => (
  <div className={cn()}>
    <a href={linkHref} className={cn('link')}>
      <p className={cn('date')}>{date}</p>
      <h3 className={cn('title')}>{title}</h3>
    </a>
  </div>
);

export default Tile;
