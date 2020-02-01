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
                <button
                    className='js-btn-menu'
                    onClick={e => {
                        if (props.isSidebarVisible && window.matchMedia('(max-width: 960px)').matches) {
                            props.toggleSidebar()
                            props.toggleNav()
                            console.log('toggle both')
                        } else {
                            props.toggleNav()
                            console.log('toggle nav')
                        }
                        }}>
                    <FontAwesomeIcon icon={faBars}/>
                </button>
            </div>
            <div className='header-center'>{props.title}</div>
            <div className='header-right'>
                <button
                    className='js-btn-filter'
                    onClick={e => {
                        if (props.isNavCollapsed && window.matchMedia('(max-width: 960px)').matches) {
                            props.toggleSidebar()
                            props.toggleNav()
                            console.log('toggle both')
                        } else {
                            props.toggleSidebar()
                            console.log('toggle nav')
                        }
                    }}>
                    <FontAwesomeIcon icon={faFilter}/>
                </button>
            </div>
        </header>
    )
}