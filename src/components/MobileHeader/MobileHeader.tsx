import React, { useState } from 'react';
import cnCreate from 'utils/cnCreate';
import useAppContext from 'hooks/useAppContext';
import SideMenu from 'components/SideMenu/SideMenu';
import Collapse from 'components/Collapse/Collapse';
import { ICommonMenu } from 'content/menu';
import './MobileHeader.css';

export interface IMobileHeaderProps {
  menu: ICommonMenu[];
  path: string;
  title: string;
  onClick?: () => void;
}

const cn = cnCreate('mobile-header');
const MobileHeader: React.FC<IMobileHeaderProps> = ({ menu, path, title }) => {
  const { isMobileWide } = useAppContext();

  const [isCollapseOpened, setCollapseOpened] = useState(false);

  const handleMobileMenuClick = () => {
    setCollapseOpened(!isCollapseOpened);
  };

  const handleMenuItemClick = () => () => {
    setCollapseOpened(false);
  };

  return (
    <div className={cn()}>
      <h1 className={cn('title')} onClick={handleMobileMenuClick}>{title}</h1>
      {isMobileWide && (
        <Collapse isOpened={isCollapseOpened}>
          <div className={cn('menu-list')}>
            <SideMenu
              path={path}
              menu={menu}
              onClick={handleMenuItemClick()}
            />
          </div>
        </Collapse>
      )}
    </div>
  );
};

export default MobileHeader;
