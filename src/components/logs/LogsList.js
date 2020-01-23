import React from 'react';
import LogsListItem from './LogsListItem';

export default class LogsList extends React.Component {
    render() {
        const { searchTerm, filterOptions } = this.props
        const list = this.props.logs
            .filter(log => log.content.toLowerCase().includes(searchTerm.toLowerCase())
                && (filterOptions === 'All' || log.mood === filterOptions))
            .map((log, key) => <LogsListItem {...log} key={key} deleteLog={this.props.deleteLog} />);

        if (list.length === 0) {
            return (
                <div className='mj-card-list'>
                    <div className='mj-card-list-title'>Recent Logs</div>
                    <p><i>Sorry, there are no logs matching this criteria.</i></p>
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