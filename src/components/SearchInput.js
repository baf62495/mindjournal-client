import React from 'react';

export default class SearchInput extends React.Component {
  render() {
    return (
      <div className='app-sidebar-search'>
        <input
          className='search-input'
          placeholder='Search'
          value={this.props.searchTerm}
          onChange={e => this.props.updateSearchTerm(e.target.value)}
        />
      </div>
    );
  }
}
