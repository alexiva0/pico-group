import React from 'react';
import cnCreate from 'utils/cnCreate';
import Logo from './i/penguin-smooth.png';
import ContentArea from 'components/ContentArea/ContentArea';
import './Header.css';

const menu = [
  {
    title: 'Research',
    url: './research',
  },
  {
    title: 'People',
    url: './people',
  },
  {
    title: 'Collaboration',
    url: './collaboration',
  },
  {
    title: 'Press',
    url: './press',
  },
  {
    title: 'Publications',
    url: './publication',
  },
  {
    title: 'News',
    url: './news',
  },
];

const cn = cnCreate('header');
const Header = () => {
  return (
    <div className={cn()}>
      <ContentArea>
        <div className={cn('inner')}>
          <a href="/" className={cn('logo')}>
              <div className={cn('logo-image-wrap')}>
                <img src={Logo} className={cn('logo-image')} alt="PICO" />
              </div>
              <p className={cn('logo-text')}>PICO</p>
          </a>
          <div className={cn('list')}>
            {menu.map(({ title, url }, index) => (
              <a
                className={cn('link', { active: index === 0 })}
                key={title + index}
                href={url}
              >
                <div className={cn('item')}>
                  {title}
                </div>
              </a>
            ))}
          </div>
        </div>
      </ContentArea>
    </div>
  );
};

export default Header;
