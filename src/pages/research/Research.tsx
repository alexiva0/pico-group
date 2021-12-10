import React, { useState } from 'react';
import cnCreate from 'utils/cnCreate';
import SideMenu from 'components/SideMenu/SideMenu';
import Grid from 'components/Grid/Grid';
import GridColumn from 'components/Grid/GridColumn';
import ContentArea from 'components/ContentArea/ContentArea';
import Article from 'pages/research/Article/Article';
import { researches } from 'content/researches';
import './Research.css';

const cn = cnCreate('research');
const Research: React.FC = () => {
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
              <h1 className={cn('title')}>Research</h1>
              <h3 className={cn('subtitle')}>{researches[activeItemId].title}</h3>
            </div>
          </GridColumn>
        </Grid>
        <Grid>
          <GridColumn all="3">
            <SideMenu
              items={researches}
              activeItem={activeItemId}
              onItemClick={handleItemClick}
            />
          </GridColumn>
          <GridColumn all="9">
            <div className={cn('inner')}>
              <Article />
            </div>
          </GridColumn>
        </Grid>
      </ContentArea>
    </div>
  );
};

export default Research;
