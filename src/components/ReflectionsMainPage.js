import React from 'react';

import AppNavigation from './AppNavigation';
import AppSidebar from './AppSidebar';
import AppHeader from './AppHeader';
import ReflectionsList from './ReflectionsList';

export default class ReflectionsMainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reflections: this.props.reflections
        }
    }

    render() {
        return (
            <>
            <AppNavigation />
            <main>
                <AppSidebar />
                <AppHeader title='Reflections' />
                <div className='mj-page'>
                    <div className='mj-page-content'>
                        <div className="wrapper">
                            <header className='mj-page-content-header'>
                                <h1>Your Reflections</h1>
                                <p className='description'>Capture your ideas, feelings and thoughts</p>
                                <ReflectionsList reflections={this.state.reflections} />
                            </header>
                        </div>
                    </div>
                </div>
            </main>
            </>
        )
    }
}