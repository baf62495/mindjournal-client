import React from 'react';

export default function FilterOptions(props) {
  const { filterOptions } = props;
  return (
    <div className='filter-options'>
      <h3 className='filter-options-title'>Filter Your Logs</h3>
      <div className='option'>
        <input
          type='checkbox'
          value='All'
          id='filter-all'
          name='filter'
          checked={filterOptions === 'All'}
          onChange={e => props.updateFilterOptions(e.target.value)}
        />
        <label htmlFor='filter-all'>All</label>
      </div>
      <div className='option'>
        <input
          type='checkbox'
          value='Very Good'
          id='filter-vgood'
          name='filter'
          checked={filterOptions === 'Very Good'}
          onChange={e => props.updateFilterOptions(e.target.value)}
        />
        <label htmlFor='filter-vgood'>Very Good</label>
      </div>
      <div className='option'>
        <input
          type='checkbox'
          value='Good'
          id='filter-good'
          name='filter'
          checked={filterOptions === 'Good'}
          onChange={e => props.updateFilterOptions(e.target.value)}
        />
        <label htmlFor='filter-good'>Good</label>
      </div>
      <div className='option'>
        <input
          type='checkbox'
          value='Neutral'
          id='filter-neutral'
          name='filter'
          checked={filterOptions === 'Neutral'}
          onChange={e => props.updateFilterOptions(e.target.value)}
        />
        <label htmlFor='filter-neutral'>Neutral</label>
      </div>
      <div className='option'>
        <input
          type='checkbox'
          value='Angry'
          id='filter-angry'
          name='filter'
          checked={filterOptions === 'Angry'}
          onChange={e => props.updateFilterOptions(e.target.value)}
        />
        <label htmlFor='filter-angry'>Angry</label>
      </div>
      <div className='option'>
        <input
          type='checkbox'
          value='Sad'
          id='filter-sad'
          name='filter'
          checked={filterOptions === 'Sad'}
          onChange={e => props.updateFilterOptions(e.target.value)}
        />
        <label htmlFor='filter-sad'>Sad</label>
      </div>
    </div>
  );
}
