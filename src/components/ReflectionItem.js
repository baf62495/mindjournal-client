import React from 'react';

export default function ReflectionItem(props) {
    return (
        <div className='mj-refl'>
            <p>{props.title}</p>
            <p>
                {`${props.content.substring(0, 160)}...`}
            </p>
            <p className='last-edited'>Last Edited: {props.last_edited}</p>
        </div>
    )
}