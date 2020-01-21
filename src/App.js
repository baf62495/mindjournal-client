import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import LandingPage from './components/LandingPage';
import LogsMainPage from './components/LogsMainPage';
import ReflectionsMainPage from './components/ReflectionsMainPage';
import ReflectionItemPage from './components/ReflectionItemPage';

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
      <Route
        exact path='/reflections'
        render={rprops => (
          <ReflectionsMainPage {...rprops} reflections={this.props.reflections} />
        )}
      />
      <Route
        exact path='/reflections/:id'
        render={rprops => (
          <ReflectionItemPage {...rprops} reflections={this.props.reflections} />
        )}
      />
      </>
      );
    }
}

export default App;