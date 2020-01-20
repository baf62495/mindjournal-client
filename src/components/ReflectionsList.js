import React from 'react';
import ReflectionItem from './ReflectionItem';

export default class LogsList extends React.Component {
    render() {
        const list = this.props.reflections
            .map((reflection, key) => <ReflectionItem {...reflection} key={key} />);
        return (
            <div className='mj-refl-list'>
                {list}
            </div>
        )
    }
}