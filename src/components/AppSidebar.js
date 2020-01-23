import React from 'react';
import SearchInput from './SearchInput';
import FilterOptions from './FilterOptions';

export default function AppSidebar(props) {
    if (props.onLogs) {
        return (
            <aside className='app-sidebar'>
                <SearchInput updateSearchTerm={props.updateSearchTerm} />
                <FilterOptions updateFilterOptions={props.updateFilterOptions} filterOptions={props.filterOptions} />
            </aside>
        )
    }
    return (
        <aside className='app-sidebar'>
            <SearchInput updateSearchTerm={props.updateSearchTerm} />
        </aside>
    )
}