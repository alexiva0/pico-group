import React from 'react';
import cnCreate from 'utils/cnCreate';
import SideMenu from 'components/SideMenu/SideMenu';
import './People.css';

const sideMenu = [
  {
    name: 'Group members',
  },
  {
    name: 'Administration',
  },
  {
    name: 'Former group members',
  },
  {
    name: 'Guestbook',
  },
];

const cn = cnCreate('people');
const People = () => (
  <div className={cn()}>
    <SideMenu items={sideMenu} />
  </div>
);

export default People;
