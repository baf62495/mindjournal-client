import React from 'react';

export default function LandingPage(props) {
    return (
        <main className='landing-page text-center'>
            <nav className='landing-nav'>
                <div className='title'>MindJournal</div>
            </nav>
            <div className='landing-container'>
                <h1>All-in-one Journal for Individuals</h1>
                <p>Enjoy a healthy, mindful, and balanced life</p>
                <button onClick={e => props.history.push('/logs')}>Enter</button>
            </div>
        </main>
    )
}