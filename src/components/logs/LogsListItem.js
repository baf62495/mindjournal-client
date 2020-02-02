import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaughBeam,
  faSmile,
  faMeh,
  faFrown,
  faTired,
  faTrash
} from '@fortawesome/free-solid-svg-icons';

import { format } from 'date-fns';

export default function LogItem(props) {
  const icons = {
    'Very Good': faLaughBeam,
    Good: faSmile,
    Neutral: faMeh,
    Angry: faTired,
    Sad: faFrown
  };
  return (
    <div className='mj-card'>
      <header>
        <ul className='mj-card-meta'>
          <li>
            <FontAwesomeIcon icon={icons[props.mood]} />
          </li>
          <li>{props.mood}</li>
          <li>{format(new Date(props.created_at), 'iii d LLL yyyy')}</li>
        </ul>
      </header>
      <p>{props.content}</p>
      <button title='delete' onClick={e => props.deleteLog(e, props.id)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
}
