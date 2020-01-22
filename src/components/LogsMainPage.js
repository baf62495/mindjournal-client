import React from 'react';

import AppNavigation from './AppNavigation';
import AppSidebar from './AppSidebar';
import AppHeader from './AppHeader';
import LogsList from './LogsList';
import LogsForm from './LogsForm';

export default class LogsMainPage extends React.Component {
    render() {
        return (
            <>
            <AppNavigation />
            <main>
                <AppSidebar />
                <AppHeader title='Logs' />
                <div className='mj-page'>
                    <div className='mj-page-content'>
                        <div className='wrapper'>
                            <header className='mj-page-content-header'>
                                <h1>Your Logs</h1>
                                <p className='description'>Capture your ideas, feelings and thoughts</p>
                            </header>
                            <LogsForm createLog={this.createLog} />
                            <LogsList logs={this.props.logs} deleteLog={this.props.deleteLog} />
                        </div>
                    </div>
                </div>
            </main>
            </>
        )
    }
}