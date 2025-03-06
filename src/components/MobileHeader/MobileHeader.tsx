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
      <div className={cn('title-container')}>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" className={cn('icon', { rorated: isCollapseOpened })}>
            <path d="M4 11L15 22L26 11" stroke="#E7E7E7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <h1 className={cn('title')} onClick={handleMobileMenuClick}>{title}</h1>
      </div>
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
