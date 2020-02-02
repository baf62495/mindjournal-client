import React from 'react';
import ReflectionItemPageHeader from './ReflectionItemPageHeader';

export default function ReflectionItemPage(props) {
  return (
    <>
      <main>
        <ReflectionItemPageHeader history={props.history} />
        <div className='mj-page'>
          <div className='mj-page-content'>
            <div className='mj-refl-form'>
              <div className='wrapper'>
                <form
                  onSubmit={e => {
                    props.createReflection(e);
                    props.history.push('/reflections');
                  }}
                >
                  <div className='mj-refl-form-header'>
                    <input
                      type='text'
                      name='title'
                      id='title'
                      placeholder='Title'
                    ></input>
                    <button type='submit' title='submit'>
                      Save
                    </button>
                  </div>
                  <label htmlFor='content'>
                    <textarea
                      type='text'
                      name='content'
                      id='content'
                      placeholder='Write your reflection here...'
                    ></textarea>
                  </label>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
