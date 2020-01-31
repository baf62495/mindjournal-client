import React from 'react';
import LogsListItem from './LogsListItem';

export default class LogsList extends React.Component {
    render() {
        const { searchTerm, filterOptions, logs } = this.props
        const list = this.props.logs
            .filter(log => log.content.toLowerCase().includes(searchTerm.toLowerCase())
                && (filterOptions === 'All' || log.mood === filterOptions))
            .map((log, key) => <LogsListItem {...log} key={key} deleteLog={this.props.deleteLog} />);

        if (logs.length === 0) {
            return (
                <div className='mj-card-list'>
                    <p><i>Create your first log...</i></p>
                </div>
            )
        } else if (logs.length > 0 && list.length === 0) {
            return (
                <div className='mj-card-list'>
                    <div className='mj-card-list-title'>Recent Logs</div>
                    <p><i>Sorry, there are no logs that match the criteria</i></p>
                </div>
            )
        }
        return (
            <div className='mj-card-list'>
                <div className='mj-card-list-title'>Recent Logs</div>
                {list}
            </div>
        )
    }
}