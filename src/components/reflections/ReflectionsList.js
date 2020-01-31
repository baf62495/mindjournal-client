import React from 'react';
import ReflectionsListItem from './ReflectionsListItem';

export default class LogsList extends React.Component {
    render() {
        const { searchTerm, reflections } = this.props
        const list = this.props.reflections
            .filter(reflection => reflection.title.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((reflection, key) => <ReflectionsListItem {...reflection} key={key} />);
        if (reflections.length === 0) {
            return (
                <div className='mj-refl-list'>
                    <p><i>Create your first reflection...</i></p>
                </div>
            )
        } else if (reflections.length > 0 && list.length === 0) {
            return (
                <div className='mj-refl-list'>
                    <p><i>Sorry, there are no reflections that match the criteria</i></p>
                </div>
            )
        }
        return (
            <div className='mj-refl-list'>
                {list}
            </div>
        )
    }
}