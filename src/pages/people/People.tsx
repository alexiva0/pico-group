import React, { useState } from 'react';
import cnCreate from 'utils/cnCreate';
import SideMenu from 'components/SideMenu/SideMenu';
import Grid from 'components/Grid/Grid';
import GridColumn from 'components/Grid/GridColumn';
import ContentArea from 'components/ContentArea/ContentArea';
import GroupMembers from 'pages/people/GroupMembers/GroupMembers';
import { people } from 'content/people/people-data';
import './People.css';

const cn = cnCreate('people');
const People: React.FC = () => {
  const [activeItemId, setActiveItemId] = useState(0);

  const handleItemClick = (index: number) => {
    setActiveItemId(index);
  };

  return (
    <div className={cn()}>
      <ContentArea>
        <Grid>
          <GridColumn leftOffsetAll="3">
            <div className={cn('head')}>
              <h1 className={cn('title')}>People</h1>
              <h3 className={cn('subtitle')}>{people[activeItemId].title}</h3>
            </div>
          </GridColumn>
        </Grid>
        <Grid>
          <GridColumn all="3">
            <SideMenu
              items={people}
              activeItem={activeItemId}
              onItemClick={handleItemClick}
            />
          </GridColumn>
          <GridColumn all="9">
            <div className={cn('inner')}>
              {/* {activeItemId === 0 && <GroupMembers data={people[0]} />} */}
            </div>
          </GridColumn>
        </Grid>
      </ContentArea>
    </div>
  );
};

export default People;
