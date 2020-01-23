import React from 'react';
import SearchInput from './SearchInput';
import FilterOptions from './FilterOptions';

export default function AppSidebar(props) {
    if (props.isOnLogs) {
        return (
            <aside className={props.isSidebarVisible ? 'app-sidebar' : 'app-sidebar is-invisible'}>
                <SearchInput updateSearchTerm={props.updateSearchTerm} />
                <FilterOptions updateFilterOptions={props.updateFilterOptions} filterOptions={props.filterOptions} />
            </aside>
        )
    }
    return (
        <aside className={props.isSidebarVisible ? 'app-sidebar' : 'app-sidebar is-invisible'}>
            <SearchInput updateSearchTerm={props.updateSearchTerm} />
        </aside>
    )
}