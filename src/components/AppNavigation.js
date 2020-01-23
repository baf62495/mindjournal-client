import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AppNavigation(props) {
    return (
        <nav role="navigation" aria-label="Main Navigation" className={props.isNavCollapsed ? 'app-navigation': 'app-navigation is-collapsed'}>
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