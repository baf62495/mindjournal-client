import React from 'react';

export default function LogItem(props) {
    return (
        <div className='mj-card'>
            <p>{props.content}</p>
            <p>{props.mood}</p>
            <p>{props.created_at}</p>
        </div>
    )
}