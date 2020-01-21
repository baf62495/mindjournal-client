import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faFilter
} from '@fortawesome/free-solid-svg-icons';

export default function AppHeader(props) {
    return (
        <header className='app-header'>
            <div className='header-left'>
                <button className='js-btn-menu'><FontAwesomeIcon icon={faBars}/></button>
            </div>
            <div className='header-center'>{props.title}</div>
            <div className='header-right'>
                <button className='js-btn-filter'><FontAwesomeIcon icon={faFilter}/></button>
            </div>
        </header>
    )
}