import React from 'react';
import ReflectionItemPageHeader from './ReflectionItemPageHeader';

export default function ReflectionItemPage(props) {
    const reflection = props.reflections.find(r =>
        r.id === parseInt(props.match.params.id)
    )

    return (
        <>
        <main>
            <ReflectionItemPageHeader history={props.history} />
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