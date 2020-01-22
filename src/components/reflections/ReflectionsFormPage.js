import React from 'react';
import ReflectionItemPageHeader from './ReflectionItemPageHeader';
import ReflectionItemPageFooter from './ReflectionItemPageFooter';

export default function ReflectionItemPage(props) {
    return (
        <>
        <main>
            <ReflectionItemPageHeader history={props.history} />
            <div className='mj-page'>
                <div className='mj-page-content'>
                    <div className='wrapper'>
                        <form onSubmit={e => {props.createReflection(e); props.history.push("/reflections")}}>
                            <label htmlFor='title'>
                                <input type='text' name='title' id='title' placeholder='Title'></input>
                            </label>
                            <label htmlFor='content'>
                                <textarea type='text' name='content' id='content' placeholder='Write your reflection here...'></textarea>
                            </label>
                            <button type='submit' title='submit'>Done</button>
                        </form>
                    </div>
                </div>
            </div>
            <ReflectionItemPageFooter />
        </main>
        </>
    )
}