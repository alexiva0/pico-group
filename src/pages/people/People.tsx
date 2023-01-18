import React from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import cnCreate from 'utils/cnCreate';
import useAppContext from 'hooks/useAppContext';
import SideMenu from 'components/SideMenu/SideMenu';
import Grid from 'components/Grid/Grid';
import GridColumn from 'components/Grid/GridColumn';
import ContentArea from 'components/ContentArea/ContentArea';
import Person from 'pages/people/Person/Person';
import {
  seniorResearchers,
  postdoctoralResearchers,
  phdStudents,
  formerGroupMembers,
} from 'content/people/people';
import { menu } from 'content/menu';
import './People.css';

const cn = cnCreate('people');
const People: React.FC = () => {
  const { isMobileWide } = useAppContext();
  const { path } = useRouteMatch();
  const { submenu } = menu[1];

  const { people: seniors } = seniorResearchers;
  const { people: postdoctoral } = postdoctoralResearchers;
  const { people: phd } = phdStudents;

  const text = 'Low Temperature Laboratory, Department of\u00A0Applied Physics, <br /> Aalto University School of\u00A0Science, P.O.\u00A0Box\u00A013500, <br /> 00076 AALTO, Finland';

  const generalAddress = () => (
    <div className={cn('general-address')}>
      <div className={cn('container')}>
        <p className={cn('text')}>General address:</p>
        <p dangerouslySetInnerHTML={{__html: text}} />
      </div>
    </div>
  );

  return (
    <div className={cn()}>
      <ContentArea>
        <Grid>
          <GridColumn leftOffsetDesktop="3">
            <h1 className={cn('title')}>Team</h1>
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
                  <Route path={`${path}${submenu[0].url}`}>
                    <h2 className={cn('subtitle')}>{submenu[0].title}</h2>
                    {generalAddress()}
                    {seniors.map((person, i) => (
                      <Person data={person} key={i + person.name} />
                    ))}
                  </Route>
                  <Route path={`${path}${submenu[1].url}`}>
                    <h2 className={cn('subtitle')}>{submenu[1].title}</h2>
                    {generalAddress()}
                    {postdoctoral.map((person, i) => (
                      <Person data={person} key={i + person.name} />
                    ))}
                  </Route>
                  <Route path={`${path}${submenu[2].url}`}>
                    <h2 className={cn('subtitle')}>{submenu[2].title}</h2>
                    {generalAddress()}
                    {phd.map((person, i) => (
                      <Person data={person} key={i + person.name} />
                    ))}
                  </Route>
                  <Route path={`${path}${submenu[3].url}`}>
                    <h2 className={cn('subtitle')}>{submenu[3].title}</h2>
                    {formerGroupMembers.map(({ name }, i) => (
                      <p className={cn('former-group-name')} key={i + name}>· {name}</p>
                    ))}
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
