import React from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import cnCreate from 'utils/cnCreate';
import useAppContext from 'hooks/useAppContext';
import Grid from 'components/Grid/Grid';
import GridColumn from 'components/Grid/GridColumn';
import ContentArea from 'components/ContentArea/ContentArea';
import ChipsPanel from 'components/ChipsPanel/ChipsPanel';
import SideMenu from 'components/SideMenu/SideMenu';
import Publication from './Publication/Publication';
import PhdThesis from './PhdThesis/PhdThesis';
import MobileHeader from 'components/MobileHeader/MobileHeader';
import {
  publicationsData,
  phdThesis,
  IPhdThesis,
  IPublicationsList
} from 'content/publications';
import { menu } from 'content/menu';
import './Publications.css';

const cn = cnCreate('publications');
const Publications: React.FC = () => {
  const { isMobileWide } = useAppContext();
  const { path } = useRouteMatch();
  const { title, submenu } = menu[3];

  const renderPublications = (year: number, publications: IPublicationsList[], i: number) => (
    <div key={i + year} className={cn('year')}>
      <h3 className={cn('content-title')}>{year}</h3>
      {publications.map(({ title, ...rest }, i) => (
        <Publication data={{ title, ...rest }} key={title + i} />
      ))}
    </div>
  );

  const renderThesis = (year: number, thesis: IPhdThesis[], i: number) => (
    <div key={i + year} className={cn('year')}>
      <h3 className={cn('content-title')}>{year}</h3>
      {thesis.map(({ title, ...rest }, i) => (
        <PhdThesis data={{ title, ...rest }} key={title + i} />
      ))}
    </div>
  );

  const publicationsChipsData = publicationsData.map(({ year, publications }, i) => ({
    title: year,
    content: renderPublications(year, publications, i)
  }));

  const publicationsChipsDataWithAllYears = [{
    title: 'All years',
    content: publicationsData.map(({ year, publications }, i) => renderPublications(year, publications, i))
  }, ...publicationsChipsData];

  const thesisChipsData = phdThesis.map(({ year, thesis }, i) => ({
    title: year,
    content: renderThesis(year, thesis, i)
  }));

  const thesisChipsDataAllYears = [{
    title: 'All years',
    content: phdThesis.map(({ year, thesis }, i) => renderThesis(year, thesis, i))
  }, ...thesisChipsData];

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
              <div className={cn('wrap')}>
                <div className={cn('inner')}>
                  <Route path={`${path}`} exact>
                    <Redirect to={`${path}${submenu[0].url}`} />
                  </Route>

                  <Route path={`${path}${submenu[0].url}`}>
                    <h2 className={cn('subtitle')}>{submenu[0].title}</h2>
                    <ChipsPanel data={publicationsChipsDataWithAllYears} />
                  </Route>

                  <Route path={`${path}${submenu[1].url}`}>
                    <h2 className={cn('subtitle')}>{submenu[1].title}</h2>
                    <ChipsPanel data={thesisChipsDataAllYears} />
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

export default Publications;
