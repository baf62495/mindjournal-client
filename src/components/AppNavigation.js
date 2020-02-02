import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faMarker } from '@fortawesome/free-solid-svg-icons';

export default function AppNavigation(props) {
  return (
    <nav
      role='navigation'
      aria-label='Main Navigation'
      className={
        props.isNavCollapsed ? 'app-navigation' : 'app-navigation is-collapsed'
      }
    >
      <header className='navigation-header'>
        <Link to='/'>MindJournal</Link>
      </header>
      <ul className='navigation-list'>
        <NavLink to='/logs'>
          <li>
            <FontAwesomeIcon icon={faListUl} />
            Logs
          </li>
        </NavLink>
        <NavLink to='/reflections'>
          <li>
            <FontAwesomeIcon icon={faMarker} />
            Reflections
          </li>
        </NavLink>
      </ul>
    </nav>
  );
}
