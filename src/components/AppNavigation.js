import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AppNavigation() {
    return (
        <nav role="navigation" aria-label="Main Navigation" className="app-navigation">
            <header className="navigation-header">
                MindJournal
            </header>
            <ul className="navigation-list">
                <NavLink to='/logs'><li>Logs</li></NavLink>
                <NavLink to='/reflections'><li>Reflections</li></NavLink>
            </ul>
        </nav>
    )
}