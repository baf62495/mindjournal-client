import React from 'react';
import ReflectionsListItem from './ReflectionsListItem';

export default class LogsList extends React.Component {
    render() {
        const { searchTerm } = this.props
        const list = this.props.reflections
            .filter(reflection => reflection.title.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((reflection, key) => <ReflectionsListItem {...reflection} key={key} />);
        return (
            <div className='mj-refl-list'>
                {list}
            </div>
        )
    }
}