import React from 'react';
import { Link } from 'react-router-dom';

export default function ReflectionListItem(props) {
    return (
        <div className='mj-refl'>
            <Link to={`/reflections/edit/${props.id}`}>{props.title}</Link>
            <p>
                {`${props.content.substring(0, 160)}...`}
            </p>
            <p className='last-edited'>Last Edited: {props.last_edited}</p>
        </div>
    )
}