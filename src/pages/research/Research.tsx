import React from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import cnCreate from 'utils/cnCreate';
import useAppContext from 'hooks/useAppContext';
import SideMenu from 'components/SideMenu/SideMenu';
import Grid from 'components/Grid/Grid';
import GridColumn from 'components/Grid/GridColumn';
import ContentArea from 'components/ContentArea/ContentArea';
import MobileHeader from 'components/MobileHeader/MobileHeader';
import Article1 from 'pages/research/Articles/Article1/Article1';
import Article2 from 'pages/research/Articles/Article2/Article2';
import Article3 from 'pages/research/Articles/Article3/Article3';
import Article4 from 'pages/research/Articles/Article4/Article4';
import Article5 from 'pages/research/Articles/Article5/Article5';
import Article6 from 'pages/research/Articles/Article6/Article6';
import { menu } from 'content/menu';
import './Research.css';

const cn = cnCreate('research');
const Research: React.FC = () => {
  const { isMobileWide } = useAppContext();
  const { path } = useRouteMatch();
  const { title, submenu } = menu[0];

  return (
    <div className={cn()}>
      <ContentArea>
        <Grid>
          <GridColumn leftOffsetDesktop="3">
            <MobileHeader
              menu={submenu}
              path={path}
              title={title}
            />
          </GridColumn>
        </Grid>
        <Grid>
          {isMobileWide ? <></> : (
            <GridColumn desktop="3">
              <SideMenu
                path={path}
                menu={submenu}
              />
            </GridColumn>
          )}
          <GridColumn desktop="9" all="12">
            <Switch>
              <div className={cn('inner')}>
                <Route path={`${path}`} exact>
                  <Redirect to={`${path}${submenu[0].url}`} />
                </Route>
                <Route path={`${path}${submenu[0].url}`}>
                  <h2 className={cn('subtitle')}>{submenu[0].title}</h2>
                  <Article1 />
                </Route>
                <Route path={`${path}${submenu[1].url}`}>
                  <h2 className={cn('subtitle')}>{submenu[1].title}</h2>
                  <Article2 />
                </Route>
                <Route path={`${path}${submenu[2].url}`}>
                  <h2 className={cn('subtitle')}>{submenu[2].title}</h2>
                  <Article3 />
                </Route>
                <Route path={`${path}${submenu[3].url}`}>
                  <h2 className={cn('subtitle')}>{submenu[3].title}</h2>
                  <Article4 />
                </Route>
                <Route path={`${path}${submenu[4].url}`}>
                  <h2 className={cn('subtitle')}>{submenu[4].title}</h2>
                  <Article5 />
                </Route>
                <Route path={`${path}${submenu[5].url}`}>
                  <h2 className={cn('subtitle')}>{submenu[5].title}</h2>
                  <Article6 />
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
