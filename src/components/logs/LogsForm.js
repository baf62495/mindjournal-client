import React from 'react';

export default function LogsForm(props) {
    return (
        <div className='mj-card-form'>
            <form onSubmit={e => {props.createLog(e); document.getElementById('logs-content').value = ''}}>
                <textarea type='text' name='content' id='logs-content' placeholder='What is positive or exciting about your day?' maxLength='200'></textarea>
                <div className='mj-card-form-footer'>
                    <div>
                        <label htmlFor='mood'>Mood:</label>
                        <select name='mood' defaultValue='Neutral'>
                            <option value='Sad'>Sad</option>
                            <option value='Angry'>Angry</option>
                            <option value='Neutral'>Neutral</option>
                            <option value='Good'>Good</option>
                            <option value='Very Good'>Very Good</option>
                        </select>
                    </div>
                    <button type='submit' title='submit'>Save</button>
                </div>
            </form>
        </div>
    )
}