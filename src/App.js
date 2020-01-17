import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <main className='App'>
        <nav className="landing-nav">
          <div className="title">MindJournal</div>
        </nav>
        <div className="landing-container">
          <h1>All-in-one Journal for Individuals</h1>
          <p>Enjoy a healthy, mindful, and balanced life</p>
          <button>Enter</button>
        </div>
      </main>
    );
  }
}

export default App;