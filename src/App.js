import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Pages/Login';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Login } />
      </Switch>
    </div>
  );
}

/* <img src={ logo } className="App-logo" alt="logo" /> */
