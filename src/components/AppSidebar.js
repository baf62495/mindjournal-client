import React from 'react';
import SearchInput from './SearchInput';

export default function AppSidebar(props) {
    return (
        <aside className='app-sidebar'>
            <p>This is the AppSidebar component</p>
            <SearchInput updateSearchTerm={props.updateSearchTerm} />
        </aside>
    )
}