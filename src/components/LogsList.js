import React from 'react';
import LogsListItem from './LogsListItem';

export default class LogsList extends React.Component {
    render() {
        const list = this.props.logs
            .map((log, key) => <LogsListItem {...log} key={key} deleteLog={this.props.deleteLog} />);
        return (
            <div className='mj-card-list'>
                <div className='mj-card-list-title'>Recent Logs</div>
                {list}
            </div>
        )
    }
}