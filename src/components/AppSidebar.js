import React from 'react';
import SearchInput from './SearchInput';

export default function AppSidebar(props) {
    return (
        <aside className='app-sidebar'>
            <SearchInput updateSearchTerm={props.updateSearchTerm} />
        </aside>
    )
}