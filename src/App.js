import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import LandingPage from './components/LandingPage';
import LogsMainPage from './components/LogsMainPage';
import ReflectionsMainPage from './components/ReflectionsMainPage';

class App extends React.Component {
  render() {
    return (
      <>
      <Route exact path='/' component={LandingPage}/>
      <Route
        path='/logs'
        render={rprops => (
          <LogsMainPage {...rprops} logs={this.props.logs} />
        )}
      />
      <Route path='/reflections' component={ReflectionsMainPage}/>
      </>
      );
    }
}

export default App;