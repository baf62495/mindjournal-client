
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import AppHeader from './components/AppHeader';
import AppNavigation from './components/AppNavigation';
import AppSidebar from './components/AppSidebar';
import FilterOptions from './components/FilterOptions';
import SearchInput from './components/SearchInput';

import LogsMainPage from './components/logs/LogsMainPage';
import LogsForm from './components/logs/LogsForm';
import LogsList from './components/logs/LogsList';
import LogsListItem from './components/logs/LogsListItem';

import ReflectionsMainPage from './components/reflections/ReflectionsMainPage';
import ReflectionItemPage from './components/reflections/ReflectionItemPage';
import ReflectionsFormPage from './components/reflections/ReflectionsFormPage';
import ReflectionsList from './components/reflections/ReflectionsList';
import ReflectionsListItem from './components/reflections/ReflectionsListItem';
import ReflectionItemPageFooter from './components/reflections/ReflectionItemPageFooter';
import ReflectionItemPageHeader from './components/reflections/ReflectionItemPageHeader';

describe('App component', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(
            <BrowserRouter>
                <App />
            </BrowserRouter>,
            div
        )
		ReactDOM.unmountComponentAtNode(div)
	})
})

describe('LandingPage component', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(
            <BrowserRouter>
                <App>
                    <LandingPage />
                </App>
            </BrowserRouter>,
            div
        )
		ReactDOM.unmountComponentAtNode(div)
	})
})

describe('LogsMainPage component', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(
            <BrowserRouter>
                <App>
                    <LogsMainPage />
                </App>
            </BrowserRouter>,
            div
        )
		ReactDOM.unmountComponentAtNode(div)
	})
})

describe('LogsForm component', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(
            <BrowserRouter>
                <App>
                    <LogsForm />
                </App>
            </BrowserRouter>,
            div
        )
		ReactDOM.unmountComponentAtNode(div)
	})
})

describe('LogsList component', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(
            <BrowserRouter>
                <App>
                    <LogsList />
                </App>
            </BrowserRouter>,
            div
        )
		ReactDOM.unmountComponentAtNode(div)
	})
})

describe('LogsListItem component', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(
            <BrowserRouter>
                <App>
                    <LogsListItem />
                </App>
            </BrowserRouter>,
            div
        )
		ReactDOM.unmountComponentAtNode(div)
	})
})

describe('ReflectionsMainPage component', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(
            <BrowserRouter>
                <App>
                    <ReflectionsMainPage />
                </App>
            </BrowserRouter>,
            div
        )
		ReactDOM.unmountComponentAtNode(div)
	})
})

describe('ReflectionItemPage component', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(
            <BrowserRouter>
                <App>
                    <ReflectionItemPage />
                </App>
            </BrowserRouter>,
            div
        )
		ReactDOM.unmountComponentAtNode(div)
	})
})

describe('ReflectionsFormPage component', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(
            <BrowserRouter>
                <App>
                    <ReflectionsFormPage />
                </App>
            </BrowserRouter>,
            div
        )
		ReactDOM.unmountComponentAtNode(div)
	})
})

describe('ReflectionsList component', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(
            <BrowserRouter>
                <App>
                    <ReflectionsList />
                </App>
            </BrowserRouter>,
            div
        )
		ReactDOM.unmountComponentAtNode(div)
	})
})

describe('ReflectionsListItem component', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(
            <BrowserRouter>
                <App>
                    <ReflectionsListItem />
                </App>
            </BrowserRouter>,
            div
        )
		ReactDOM.unmountComponentAtNode(div)
	})
})

describe('ReflectionItemPageFooter component', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(
            <BrowserRouter>
                <App>
                    <ReflectionItemPageFooter />
                </App>
            </BrowserRouter>,
            div
        )
		ReactDOM.unmountComponentAtNode(div)
	})
})

describe('ReflectionItemPageHeader component', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(
            <BrowserRouter>
                <App>
                    <ReflectionItemPageHeader />
                </App>
            </BrowserRouter>,
            div
        )
		ReactDOM.unmountComponentAtNode(div)
	})
})