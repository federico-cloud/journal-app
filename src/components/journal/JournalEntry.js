import React from 'react'

export const JournalEntry = () => {
  return (
    <div className='journal__entry'>
        <div className='journal__entry-picture'>
            <img
                className='journal__entry-picture'
                src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
                alt='Journal entry'
            />
        </div>
        <div className='journal__entry-body'>
            <p className='journal__entry-title'>
                Nuevo día
            </p>
            <p className='journal__entry-content'>
                lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </div>
        <div className='journal__entry-date-box'>
            <span>Monday</span>
            <h5>22</h5>
        </div>
    </div>
  )
}
