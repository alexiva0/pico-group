import React from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import cnCreate from 'utils/cnCreate';
import SideMenu from 'components/SideMenu/SideMenu';
import Grid from 'components/Grid/Grid';
import GridColumn from 'components/Grid/GridColumn';
import ContentArea from 'components/ContentArea/ContentArea';
import GroupMembers from 'pages/people/GroupMembers/GroupMembers';
import { sideMenuItems, groupPeople } from 'content/people/people-data';
import './People.css';

const cn = cnCreate('people');
const People: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <div className={cn()}>
      <ContentArea>
      <Grid>
          <GridColumn leftOffsetAll="3">
            <h1 className={cn('title')}>People</h1>
          </GridColumn>
        </Grid>
        <Grid>
          <GridColumn all="3">
            <SideMenu
              items={sideMenuItems}
            />
          </GridColumn>
          <GridColumn all="9">
            <Switch>
              <div className={cn('wrap')}>
                <div className={cn('inner')}>
                  <Route path={`${path}`} exact>
                    <Redirect to={`${path}/group-members`} />
                  </Route>
                  <Route path={`${path}/group-members`}>
                    <h3 className={cn('subtitle')}>{sideMenuItems[0].title}</h3>
                    <GroupMembers data={groupPeople} />
                  </Route>
                  <Route path={`${path}/administration`}>
                    <h3 className={cn('subtitle')}>{sideMenuItems[1].title}</h3>
                    Administration
                  </Route>
                  <Route path={`${path}/former-group-members`}>
                  <h3 className={cn('subtitle')}>{sideMenuItems[2].title}</h3>
                    Former members
                  </Route>
                  <Route path={`${path}/guestbook`}>
                    <h3 className={cn('subtitle')}>{sideMenuItems[3].title}</h3>
                    Guests
                  </Route>
                </div>
              </div>
            </Switch>
          </GridColumn>
        </Grid>
      </ContentArea>
    </div>
  );
};

export default People;
