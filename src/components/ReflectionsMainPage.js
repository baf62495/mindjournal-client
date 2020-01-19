import React from 'react';

import AppNavigation from './AppNavigation';
import AppSidebar from './AppSidebar';
import AppHeader from './AppHeader';

export default function ReflectionsMainPage() {
    return (
        <>
        <AppNavigation />
        <main>
            <AppSidebar />
            <AppHeader title='Reflections' />
            <div className='mj-page'>
                <div className='mj-page-content'>
                    <div className="wrapper">
                        <p>This is the ReflectionsMainPage component</p>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}