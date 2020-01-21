import React from 'react';
import ReflectionsListItem from './ReflectionsListItem';

export default class LogsList extends React.Component {
    render() {
        const list = this.props.reflections
            .map((reflection, key) => <ReflectionsListItem {...reflection} key={key} />);
        return (
            <div className='mj-refl-list'>
                {list}
            </div>
        )
    }
}