import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import LandingPage from './components/LandingPage';
import LogsMainPage from './components/LogsMainPage';
import ReflectionsMainPage from './components/ReflectionsMainPage';
import ReflectionItemPage from './components/ReflectionItemPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        logs: this.props.logs,
        reflections: this.props.reflections
    }
  }

  createLog = e => {
    e.preventDefault()
    console.log('LogForm submitted!')

    let newLog = {
        content: e.target.content.value,
        mood: e.target.mood.value,
        created_at: new Date().toISOString()
    }

    this.setState({
        logs: [
            ...this.state.logs,
            newLog
        ]
    })
  }

  deleteLog = (e, id) => {
    e.preventDefault()
    
    let logs = this.props.logs.filter(log => log.id !== id)
    console.log('DELETE', logs)
    this.setState({ logs })
  }


  render() {
    return (
      <>
      <Route exact path='/' component={LandingPage}/>
      <Route
        path='/logs'
        render={rprops => (
          <LogsMainPage
            {...rprops}
            logs={this.state.logs}
            createLog={this.createLog}
            deleteLog={this.deleteLog}
          />
        )}
      />
      <Route
        exact path='/reflections'
        render={rprops => (
          <ReflectionsMainPage {...rprops} reflections={this.state.reflections} />
        )}
      />
      <Route
        exact path='/reflections/:id'
        render={rprops => (
          <ReflectionItemPage {...rprops} reflections={this.state.reflections} />
        )}
      />
      </>
      );
    }
}

export default App;