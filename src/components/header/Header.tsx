import React from 'react';
import { NavLink } from 'react-router-dom';
import cnCreate from 'utils/cnCreate';
import Logo from './i/penguin-smooth.png';
import ContentArea from 'components/ContentArea/ContentArea';
import './Header.css';

const menu = [
  {
    title: 'Research',
    url: '/research',
  },
  {
    title: 'People',
    url: '/people',
  },
  {
    title: 'Collaboration',
    url: '/collaboration',
  },
  {
    title: 'Press',
    url: '/press',
  },
  {
    title: 'Publications',
    url: '/publication',
  },
  {
    title: 'News',
    url: '/news',
  },
];

const cn = cnCreate('header');
const Header: React.FC = () => {
  return (
    <div className={cn()}>
      <ContentArea>
        <div className={cn('inner')}>
          <NavLink to="/" className={cn('logo')}>
              <div className={cn('logo-image-wrap')}>
                <img src={Logo} className={cn('logo-image')} alt="PICO" />
              </div>
              <p className={cn('logo-text')}>PICO</p>
          </NavLink >
          <div className={cn('list')}>
            {menu.map(({ title, url }, index) => (
              <NavLink
                className={cn('link')}
                activeClassName={cn('link', { active: true })}
                key={title + index}
                to={url}
              >
                <div className={cn('item')}>
                  {title}
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </ContentArea>
    </div>
  );
};

export default Header;
