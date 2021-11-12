import React from 'react';
import cnCreate from 'utils/cnCreate';
import SideMenu from 'components/SideMenu/SideMenu';
import Grid from 'components/Grid/Grid';
import GridColumn from 'components/Grid/GridColumn';
import ContentArea from 'components/ContentArea/ContentArea';
import Article from 'pages/research/Article/Article';
import './Research.css';

const sideMenu = [
  {
    name: 'Maxwell’s demon and stochastic thermodynamics',
  },
  {
    name: 'Electronic cooling',
  },
  {
    name: 'Electronic refrigeration',
  },
  {
    name: 'Quantum heat engine',
  },
  {
    name: 'Single-electron turnstile',
  },
  {
    name: 'Temperature and thermometry',
  },
];

const cn = cnCreate('research');
const Research = () => {
  return (
    <div className={cn()}>
      <ContentArea>
        <Grid>
          <GridColumn leftOffsetAll="3">
            <div className={cn('head')}>
              <h1 className={cn('title')}>Research</h1>
              <h3 className={cn('subtitle')}>Maxwell’s demon and stochastic thermodynamics</h3>
            </div>
          </GridColumn>
        </Grid>
        <Grid>
          <GridColumn all="3">
            <SideMenu items={sideMenu} />
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
