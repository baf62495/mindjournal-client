import React from 'react';

import AppNavigation from '../AppNavigation';
import AppSidebar from '../AppSidebar';
import AppHeader from '../AppHeader';
import ReflectionsList from './ReflectionsList';

export default class ReflectionsMainPage extends React.Component {
    render() {
        return (
            <>
            <AppNavigation isNavCollapsed={this.props.isNavCollapsed} />
            <main>
                <AppSidebar
                    searchTerm={this.props.searchTerm}
                    updateSearchTerm={this.props.updateSearchTerm}
                    isSidebarVisible={this.props.isSidebarVisible}
                />
                <AppHeader title='Reflections' toggleNav={this.props.toggleNav} toggleSidebar={this.props.toggleSidebar} />
                <div className='mj-page'>
                    <div className='mj-page-content'>
                        <div className="wrapper">
                            <header className='mj-page-content-header'>
                                <div>
                                    <h1>Your Reflections</h1>
                                    <p className='description'>Capture your ideas, feelings and thoughts</p>
                                </div>
                                <button onClick={e => this.props.history.push('/reflections/add')}>+ Add Reflection</button>
                            </header>
                            <ReflectionsList reflections={this.props.reflections} searchTerm={this.props.searchTerm} updateSearchTerm={this.props.updateSearchTerm} />
                        </div>
                    </div>
                </div>
            </main>
            </>
        )
    }
}