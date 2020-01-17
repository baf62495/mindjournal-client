import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import LandingPage from './components/LandingPage';
import LogsMainPage from './components/LogsMainPage';
import ReflectionsMainPage from './components/ReflectionsMainPage';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Route exact path='/' component={LandingPage}/>
        <Route path='/logs' component={LogsMainPage}/>
        <Route path='/reflections' component={ReflectionsMainPage}/>
      </div>
    );
  }
}

export default App;