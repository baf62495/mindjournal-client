import React from 'react';

import AppNavigation from '../AppNavigation';
import AppSidebar from '../AppSidebar';
import AppHeader from '../AppHeader';
import LogsList from './LogsList';
import LogsForm from './LogsForm';

export default class LogsMainPage extends React.Component {
    render() {
        return (
            <>
            <AppNavigation isNavCollapsed={this.props.isNavCollapsed} />
            <main>
                <AppSidebar
                    searchTerm={this.props.searchTerm}
                    filterOptions={this.props.filterOptions}
                    updateSearchTerm={this.props.updateSearchTerm}
                    updateFilterOptions={this.props.updateFilterOptions}
                    isSidebarVisible={this.props.isSidebarVisible}
                    isOnLogs={true}
                />
                <AppHeader title='Logs' toggleNav={this.props.toggleNav} toggleSidebar={this.props.toggleSidebar} />
                <div className='mj-page'>
                    <div className='mj-page-content'>
                        <div className='wrapper'>
                            <header className='mj-page-content-header'>
                                <div>
                                    <h1>Your Logs</h1>
                                    <p className='description'>Capture your ideas, feelings and thoughts</p>
                                </div>
                            </header>
                            <LogsForm createLog={this.props.createLog} />
                            <LogsList
                                logs={this.props.logs}
                                deleteLog={this.props.deleteLog}
                                filterOptions={this.props.filterOptions}
                                searchTerm={this.props.searchTerm} />
                        </div>
                    </div>
                </div>
            </main>
            </>
        )
    }
}