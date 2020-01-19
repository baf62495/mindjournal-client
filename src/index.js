import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import  { BrowserRouter } from 'react-router-dom';
import './index.css';

const LOGS = [
    {
      id: 1,
      content: 'Having an alright day',
      created_at: '2019-01-03T00:00:00.000Z',
      mood: 'Neutral'
    },
    {
      id: 2,
      content: 'Work did not go so well',
      created_at: '2019-01-03T00:00:00.000Z',
      mood: 'Angry'
    },
    {
      id: 3,
      content: 'Today was a good day',
      created_at: '2019-01-03T00:00:00.000Z',
      mood: 'Very Good'
    }
]

ReactDOM.render(
    <BrowserRouter>
        <App logs={LOGS}/>
    </BrowserRouter>,
    document.getElementById('root')
);