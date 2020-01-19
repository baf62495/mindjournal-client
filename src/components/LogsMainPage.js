import React from 'react';

import AppNavigation from './AppNavigation';
import AppSidebar from './AppSidebar';
import AppHeader from './AppHeader';

export default function LogsMainPage() {
    return (
        <>
        <AppNavigation />
        <main>
            <AppSidebar />
            <AppHeader title='Logs' />
            <div className='mj-page'>
                <div className='mj-page-content'>
                    <div className="wrapper">
                        <p>This is the LogsMainPage component</p>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}