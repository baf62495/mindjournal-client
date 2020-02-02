import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

export default function ReflectionListItem(props) {
  return (
    <div className='mj-refl'>
      <Link to={`/reflections/edit/${props.id}`} className='title'>
        {props.title}
      </Link>
      <p>{`${props.content.substring(0, 160)}...`}</p>
      <p className='last-edited'>
        Last Edited: {format(new Date(props.last_edited), 'iii d LLL yyyy')}
      </p>
    </div>
  );
}
