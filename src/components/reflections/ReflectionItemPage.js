import React from 'react';
import ReflectionItemPageHeader from './ReflectionItemPageHeader';
import ReflectionItemPageFooter from './ReflectionItemPageFooter';

export default function ReflectionItemPage(props) {
    const reflection = props.reflections.find(r =>
        parseInt(r.id) === parseInt(props.match.params.id)
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
            <ReflectionItemPageFooter history={props.history} deleteReflection={props.deleteReflection} id={reflection.id} />
        </main>
        </>
    )
}