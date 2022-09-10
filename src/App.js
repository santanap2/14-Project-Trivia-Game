import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Pages/Login';
import GamePage from './Pages/GamePage';
import Settings from './Pages/Settings';
import Feedback from './Pages/Feedback';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/game" component={ GamePage } />
        <Route path="/settings" component={ Settings } />
        <Route path="/feedback" component={ Feedback } />
      </Switch>
    </div>
  );
}

/* <img src={ logo } className="App-logo" alt="logo" /> */
