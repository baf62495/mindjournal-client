import React from 'react';

export default function AppHeader(props) {
    return (
        <header className='app-header'>
            <div className="header-left">
                <button className="js-btn-menu">Menu</button>
            </div>
            <div className="header-center">{props.title}</div>
            <div className="header-right">
                <button className="js-btn-filter">Filter</button>
            </div>
        </header>
    )
}