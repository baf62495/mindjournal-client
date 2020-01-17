import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import LandingPage from './components/LandingPage';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Switch>
        <Route exact path='/' render={rprops => (
          <LandingPage {...rprops} />
        )} />
        </Switch>
      </div>
    );
  }
}

export default App;