import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function ReflectionItemPageHeader(props) {
    return (
        <header className='app-header'>
            <div className='header-left'>
                <button className='js-btn-back' onClick={e => props.history.push('/reflections')}><FontAwesomeIcon icon={faArrowLeft}/></button>
            </div>
            {console.log(props.history)}
        </header>
    )
}