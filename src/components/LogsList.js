import React from 'react';
import LogItem from './LogItem';

export default class LogsList extends React.Component {
    render() {
        const list = this.props.logs
            .map((log, key) => <LogItem {...log} key={key} />);
        return (
            <div className='mj-card-list'>
                <div className='mj-card-list-title'>Recent Logs</div>
                {list}
            </div>
        )
    }
}