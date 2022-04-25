import React from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
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
  const { path } = useRouteMatch();

  return (
    <div className={cn()}>
      <ContentArea>
        <Grid>
          <GridColumn leftOffsetAll="3">
            <h1 className={cn('title')}>Research</h1>
          </GridColumn>
        </Grid>
        <Grid>
          <GridColumn all="3">
            <SideMenu
              items={researches}
            />
          </GridColumn>
          <GridColumn all="9">
            <Switch>
              <div className={cn('inner')}>
                <Route path={`${path}`} exact>
                    <Redirect to={`${path}/maxwell’s-demon-and-stochastic-thermodynamics`} />
                  </Route>
                <Route path={`${path}/maxwell’s-demon-and-stochastic-thermodynamics`}>
                  <h3 className={cn('subtitle')}>{researches[0].title}</h3>
                  <Article />
                </Route>
              </div>
            </Switch>
          </GridColumn>
        </Grid>
      </ContentArea>
    </div>
  );
};

export default Research;
