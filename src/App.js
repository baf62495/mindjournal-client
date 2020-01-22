import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import uuid from 'react-uuid';

import LandingPage from './components/LandingPage';
import LogsMainPage from './components/logs/LogsMainPage';
import ReflectionsMainPage from './components/reflections/ReflectionsMainPage';
import ReflectionItemPage from './components/reflections/ReflectionItemPage';
import ReflectionsFormPage from './components/reflections/ReflectionsFormPage';

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
  
  createReflection = e => {
    e.preventDefault()

    const newReflection = {
      id: uuid(),
      title: e.target.title.value,
      content: e.target.content.value,
      last_edited: new Date().toISOString()
    }

    this.setState({
      reflections: [
        ...this.state.reflections,
        newReflection
      ]
    })
    console.log(newReflection)
  }

  deleteLog = (e, id) => {
    e.preventDefault()
    
    let logs = this.state.logs.filter(log => log.id !== id)
    console.log('log deleted', logs)
    this.setState({ logs })
  }

  deleteReflection = (e, id) => {
    e.preventDefault()
    
    let reflections = this.state.reflections.filter(r => r.id !== id)
    console.log('reflection deleted', reflections)
    this.setState({ reflections })
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
        path='/reflections/edit/:id'
        render={rprops => (
          <ReflectionItemPage {...rprops} reflections={this.state.reflections} deleteReflection={this.deleteReflection} />
        )}
      />
      <Route
        exact path='/reflections/add'
        render={rprops => (
          <ReflectionsFormPage {...rprops} createReflection={this.createReflection} />
        )}
      />
      </>
      );
    }
}

export default App;