import React from 'react';
import SearchInput from './SearchInput';
import FilterOptions from './FilterOptions';

export default function AppSidebar(props) {
    return (
        <aside className={props.isSidebarVisible ? 'app-sidebar' : 'app-sidebar is-invisible'}>
            <SearchInput updateSearchTerm={props.updateSearchTerm} />
            {props.isOnLogs ? (
                <FilterOptions updateFilterOptions={props.updateFilterOptions} filterOptions={props.filterOptions} />
            ) : 
                null
            }
        </aside>
    )
}