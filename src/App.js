import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import LandingPage from './components/LandingPage';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Route exact path='/' component={LandingPage} />
      </div>
    );
  }
}

export default App;