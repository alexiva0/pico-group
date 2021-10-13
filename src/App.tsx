import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Main from 'pages/main/Main';
import People from 'pages/people/People';
import Research from 'pages/research/Research';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Main</Link>
            </li>
            <li>
              <Link to='/people'>People</Link>
            </li>
            <li>
              <Link to='/research'>Research</Link>
            </li>
          </ul>
        </nav>
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
      </div>
    </Router>
  );
}

export default App;
