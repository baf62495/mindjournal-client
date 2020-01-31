import React from 'react';

export default function LandingPage(props) {
    return (
        <main className='landing-page'>
            <header className='app-header'>
                <div className='header-left'>
                    <div className='main-logo'>MindJournal</div>
                </div>
            </header>
            <div className='mj-page'>
                <div className='landing-hero text-center'>
                    <h1>All-in-one Journal for Individuals</h1>
                    <p className='size-l'>One stop shop for all your journaling needs</p>
                    <button onClick={e => props.history.push('/logs')}>Start Journaling</button>
                </div>
            </div>
        </main>
    )
}