import React from 'react';

export default function FilterOptions(props) {
    const { filterOptions } = props
    return (
        <div>
        <h2>Filter By</h2>
        <div className='filter-options'>
            <h3>Mood</h3>
            <div className='option'>
                <label htmlFor='filter-all'>
                    <input
                        type='checkbox'
                        value='All'
                        id='filter-all'
                        name='filter'
                        checked={filterOptions === 'All'}
                        onChange={e => props.updateFilterOptions(e.target.value)}
                    />
                    All
                </label>
            </div>
            <div className='option'>
                <label htmlFor='filter-vgood'>
                    <input
                        type='checkbox'
                        value='Very Good'
                        id='filter-vgood'
                        name='filter'
                        checked={filterOptions === 'Very Good'}
                        onChange={e => props.updateFilterOptions(e.target.value)}
                    />
                    Very Good
                </label>
            </div>
            <div className='option'>  
                <label htmlFor='filter-good'>
                    <input
                        type='checkbox'
                        value='Good'
                        id='filter-good'
                        name='filter'
                        checked={filterOptions === 'Good'}
                        onChange={e => props.updateFilterOptions(e.target.value)}
                    />
                    Good
                </label>
            </div>
            <div className='option'>  
                <label htmlFor='filter-neutral'>
                    <input
                        type='checkbox'
                        value='Neutral'
                        id='filter-neutral'
                        name='filter'
                        checked={filterOptions === 'Neutral'}
                        onChange={e => props.updateFilterOptions(e.target.value)}
                    />
                    Neutral
                </label>
            </div>
            <div className='option'>  
                <label htmlFor='filter-angry'>
                    <input
                        type='checkbox'
                        value='Angry'
                        id='filter-angry'
                        name='filter'
                        checked={filterOptions === 'Angry'}
                        onChange={e => props.updateFilterOptions(e.target.value)}
                    />
                    Angry
                </label>
            </div>
            <div className='option'>  
                <label htmlFor='filter-sad'>
                    <input
                        type='checkbox'
                        value='Sad'
                        id='filter-sad'
                        name='filter'
                        checked={filterOptions === 'Sad'}
                        onChange={e => props.updateFilterOptions(e.target.value)}
                    />
                    Sad
                </label>
            </div>
      </div>
      </div>
    )
}