import React, { useState } from 'react';
import cnCreate from 'utils/cnCreate';
import './SideMenu.css';

interface ISIdeMenuItem {
  name: string;
}

export interface ISideMenu {
  items: ISIdeMenuItem[];
}

const cn = cnCreate('side-menu');
const SideMenu: React.FC<ISideMenu> = ({ items }) => {
  const [activeItemId, setActiveItemId] = useState(0);

  const handleItemClick = (index: number) => () => {
    setActiveItemId(index);
  };

  return (
    <div className={cn()}>
      <div className={cn('list')}>
          {items.map(({ name }, index) => (
            <div
              className={cn('item', { active: index === activeItemId })}
              key={name + index}
              onClick={handleItemClick(index)}
            >
              <p className={cn('text')}>{name}</p>
              <svg width="40" height="40" viewBox="0 0 40 40" className={cn('arrow-icon')}>
                <path d="M23.3619 7.84564C22.8625 7.37002 22.0706 7.38877 21.595 7.88877C21.1187 8.38877 21.1387 9.18002 21.6381 9.65627L31.2269 18.7506H6.25C5.56 18.7506 5 19.3106 5 20.0006C5 20.6906 5.56 21.2506 6.25 21.2506H31.1869L21.6381 30.3456C21.1381 30.8219 21.1187 31.6131 21.595 32.1131C21.8406 32.3706 22.17 32.5006 22.5 32.5006C22.81 32.5006 23.12 32.3863 23.3619 32.1556L34.2675 21.7681C34.74 21.2963 35 20.6688 35 20.0006C35 19.3325 34.74 18.705 34.2456 18.2119L23.3619 7.84564Z" />
              </svg>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SideMenu;
