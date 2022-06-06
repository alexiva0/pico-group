
import React from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import cnCreate from 'utils/cnCreate';
import useAppContext from 'hooks/useAppContext';
import Grid from 'components/Grid/Grid';
import GridColumn from 'components/Grid/GridColumn';
import ContentArea from 'components/ContentArea/ContentArea';
import SideMenu from 'components/SideMenu/SideMenu';
import Article from './News/NewsArticle/NewsArticle';
import Press from './Press/Press';
import News from './News/News';
import { menu } from 'content/menu';
import './NewsPress.css';

const cn = cnCreate('news-press');
const NewsPress: React.FC = () => {
  const { isMobileWide } = useAppContext();
  const { path } = useRouteMatch();
  const { submenu } = menu[4];

  return (
    <div className={cn()}>
      <ContentArea>
        <Grid>
          <GridColumn leftOffsetDesktop="3">
            <h1 className={cn('title')}>News & PR</h1>
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
              <div className={cn('wrap')}>
                <div className={cn('inner')}>
                  <Route path={`${path}`} exact>
                    <Redirect to={`${path}${submenu[0].url}`} />
                  </Route>

                  <Route path={`${path}${submenu[0].url}`} exact>
                    <h3 className={cn('subtitle')}>{submenu[0].title}</h3>
                    <News />
                  </Route>

                  <Route path={`${path}${submenu[1].url}`}>
                    <h3 className={cn('subtitle')}>{submenu[1].title}</h3>
                    <Press />
                  </Route>

                  <Route path={`${path}/news/:id`} children={<Article />} />
                </div>
              </div>
            </Switch>
          </GridColumn>
        </Grid>
      </ContentArea>
    </div>
  );
};

export default NewsPress;
