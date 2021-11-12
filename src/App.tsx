import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import cnCreate from 'utils/cnCreate';
import Main from 'pages/main/Main';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import People from 'pages/people/People';
import Research from 'pages/research/Research';
import './App.css';

const cn = cnCreate('layout-default');
const App = () => {
  return (
    <Router>
      <ParallaxProvider>
        <div className={cn('container')}>
          <Header />
          <Switch>
            <Route path='/people'>
              <People />
            </Route>
            <Route path='/research'>
              <Research />
            </Route>
            <Route path='/'>
              <Main />
            </Route>
          </Switch>
          <Footer />
        </div>
      </ParallaxProvider>
    </Router>
  );
};

export default App;
