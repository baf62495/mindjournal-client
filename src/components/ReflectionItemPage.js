import React from 'react';
import AppHeader from './AppHeader';

export default function ReflectionItemPage(props) {
    const reflection = props.reflections.find(r =>
        r.id === parseInt(props.match.params.id)
    )

    return (
        <>
        <main>
            <div className='mj-page'>
                <div className='mj-page-content'>
                    <div className='wrapper'>
                        <h1>{reflection.title}</h1>
                        <p>{reflection.content}</p>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}