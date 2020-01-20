import React from 'react';

export default function LogsForm(props) {
    return (
        <div className='mj-card-form'>
            <form onSubmit={e => props.createLog(e)}>
                <label htmlFor='content'>
                    <textarea type='text' name='content' id='content' placeholder='What is positive or exciting about your day?' maxLength='200'></textarea>
                </label>
                <label htmlFor='mood'>Mood:</label>
                <select name='mood' defaultValue='neutral'>
                    <option value='Sad'>Sad</option>
                    <option value='Angry'>Angry</option>
                    <option value='Neutral'>Neutral</option>
                    <option value='Good'>Good</option>
                    <option value='Very Good'>Very Good</option>
                </select>
                <button type='submit' title='submit'>Save</button>
            </form>
        </div>
    )
}