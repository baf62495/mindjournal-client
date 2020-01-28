import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import uuid from 'react-uuid';
import config from './config';

import LandingPage from './components/LandingPage';
import LogsMainPage from './components/logs/LogsMainPage';
import ReflectionsMainPage from './components/reflections/ReflectionsMainPage';
import ReflectionItemPage from './components/reflections/ReflectionItemPage';
import ReflectionsFormPage from './components/reflections/ReflectionsFormPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        logs: [],
        reflections: [],
        searchTerm: '',
        filterOptions: 'All',
        isNavCollapsed: false,
        isSidebarVisible: false
    }
  }

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_BASE_URL}/logs`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${config.API_KEY}`
        }
      }),
      fetch(`${config.API_BASE_URL}/reflections`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${config.API_KEY}`
        }
      })
    ])
      .then(([logsRes, reflectionsRes]) => {
        if (!logsRes.ok)
          return logsRes.json().then(e => Promise.reject(e))
        if (!reflectionsRes.ok)
          return reflectionsRes.json().then(e => Promise.reject(e))
        return Promise.all([
          logsRes.json(),
          reflectionsRes.json()
        ])
      })
      .then(([logs, reflections]) => {
        this.setState({ logs, reflections })
      })
      .catch(error => {
        console.error({ error })
      })
  }

  createLog = e => {
    e.preventDefault()
    console.log('Log created')

    let newLog = {
      content: e.target.content.value,
      mood: e.target.mood.value,
      created_at: new Date(),
      user_id: 1
    }

    fetch(`${config.API_BASE_URL}/logs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`
      },
      body: JSON.stringify(newLog)
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(e => Promise.reject(e))
        }
        return res.json()
      })
      .then(log => {
        this.setState({
          logs: [
            ...this.state.logs,
            log
          ]
        })
      })
  }
  
  createReflection = e => {
    e.preventDefault()
    console.log('Reflection created')

    const newReflection = {
      id: uuid(),
      title: e.target.title.value,
      content: e.target.content.value,
      last_edited: new Date(),
      user_id: 1
    }

    fetch(`${config.API_BASE_URL}/reflections`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`
      },
      body: JSON.stringify(newReflection)
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(e => Promise.reject(e))
        }
        return res.json()
      })
      .then(reflection => {
        this.setState({
          reflections: [
            ...this.state.reflections,
            reflection
          ]
        })
      })
  }

  deleteLog = (e, id) => {
    e.preventDefault()

    let logs = this.state.logs.filter(log => log.id !== id)
    console.log('log deleted', logs)

    fetch(`${config.API_BASE_URL}/logs/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(e => Promise.reject(e))
        }
        return res
      })
      .then(() => {
        this.setState({ logs })
      })
  }

  deleteReflection = (e, id) => {
    e.preventDefault()
    
    let reflections = this.state.reflections.filter(r => r.id !== id)
    console.log('reflection deleted', reflections)
    
    fetch(`${config.API_BASE_URL}/reflections/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(e => Promise.reject(e))
        }
        return res
      })
      .then(() => {
        this.setState({ reflections })
      })
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

  toggleSidebar = () => {
    this.setState({
      isSidebarVisible: !this.state.isSidebarVisible
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
            isSidebarVisible={this.state.isSidebarVisible}
            updateSearchTerm={this.updateSearchTerm}
            updateFilterOptions={this.updateFilterOptions}
            toggleNav={this.toggleNav}
            toggleSidebar={this.toggleSidebar}
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
            isSidebarVisible={this.state.isSidebarVisible}
            updateSearchTerm={this.updateSearchTerm}
            toggleNav={this.toggleNav}
            toggleSidebar={this.toggleSidebar}
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