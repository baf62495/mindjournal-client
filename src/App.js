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
        reflections: this.props.reflections,
        searchTerm: '',
        filterOptions: 'All',
        isNavCollapsed: false
    }
  }

  createLog = e => {
    e.preventDefault()
    console.log('Log created')

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
    console.log('Reflection created')

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

  updateSearchTerm = term => {
    console.log('searching for:', term)
    this.setState({
      searchTerm: term
    })
  }

  updateFilterOptions = option => {
    console.log('filtering by:', option)
    this.setState({
      filterOptions: option
    })
  }

  toggleNav = () => {
    this.setState({
      isNavCollapsed: !this.state.isNavCollapsed
    })
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
            searchTerm={this.state.searchTerm}
            filterOptions={this.state.filterOptions}
            isNavCollapsed={this.state.isNavCollapsed}
            updateSearchTerm={this.updateSearchTerm}
            updateFilterOptions={this.updateFilterOptions}
            toggleNav={this.toggleNav}
          />
        )}
      />
      <Route
        exact path='/reflections'
        render={rprops => (
          <ReflectionsMainPage
            {...rprops}
            reflections={this.state.reflections}
            searchTerm={this.state.searchTerm}
            isNavCollapsed={this.state.isNavCollapsed}
            updateSearchTerm={this.updateSearchTerm}
            toggleNav={this.toggleNav}
          />
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