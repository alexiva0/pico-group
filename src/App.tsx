import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import cnCreate from 'utils/cnCreate';
import AppContext from 'context/AppContext/AppContext';
import throttle from 'lodash.throttle';
import Main from 'pages/main/Main';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import People from 'pages/people/People';
import Research from 'pages/research/Research';
import Collaboration from 'pages/collaboration/Collaboration';
import NewsPress from 'pages/news-press/NewsPress';
import Publications from 'pages/publications/Publications';
import { menu } from 'content/menu';
import './App.css';

const cn = cnCreate('layout-default');
const App: React.FC = () => {
  const [isScrollTopApear, setScrollTopApear] = useState(false);

  const handlePageScroll = useCallback((): void => {
    setScrollTopApear(window.pageYOffset >= 500);
  }, []);

  const handleSetThrottled = useMemo(() => throttle(handlePageScroll, 20), [handlePageScroll]);

  useEffect(() => {
    window.addEventListener('scroll', handleSetThrottled);
    window.addEventListener('resize', handleSetThrottled);

    return (): void => {
        window.removeEventListener('scroll', handleSetThrottled);
        window.removeEventListener('resize', handleSetThrottled);
    };
  }, [handleSetThrottled]);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AppContext>
      <Router>
        <div className={cn()}>
          <Header />
          <Switch>
            <Route path={menu[4].url}>
              <NewsPress />
            </Route>
            <Route path={menu[3].url}>
              <Publications />
            </Route>
            <Route path={menu[2].url}>
              <Collaboration />
            </Route>
            <Route path={menu[1].url}>
              <People />
            </Route>
            <Route path={menu[0].url}>
              <Research />
            </Route>
            <Route path='/'>
              <Main />
            </Route>
          </Switch>
          <Footer />
        </div>
        <div className={cn('scroll-top', { apear: isScrollTopApear })} onClick={handleScrollTop}>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" className={cn('arrow-up')}>
            <path d="M26 20L15 9L4 20" stroke="#E7E7E7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </Router>
    </AppContext>
  );
};

export default App;
