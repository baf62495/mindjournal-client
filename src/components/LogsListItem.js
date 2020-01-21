import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLaughBeam,
    faSmile,
    faMeh,
    faFrown,
    faTired,
    faEllipsisH
} from '@fortawesome/free-solid-svg-icons';

export default function LogItem(props) {
    const icons = {
        'Very Good': faLaughBeam,
        'Good': faSmile,
        'Neutral': faMeh,
        'Angry': faTired,
        'Sad': faFrown
    }
    return (
        <div className='mj-card'>
            <header>
                <ul className='mj-card-meta'>
                    <li><FontAwesomeIcon icon={icons[props.mood]} /></li>
                    <li>{props.created_at}</li>
                    <li>{props.mood}</li>
                </ul>
            </header>
            <p>{props.content}</p>
            <button title='delete' onClick={e => props.deleteLog(e, props.id)}>Delete</button>
        </div>
    )
}