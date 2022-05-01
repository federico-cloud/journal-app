import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  return (
    <div className='notes__main'>
        
        <NotesAppBar />

        <div className='notes__content'>
        
            <input 
                type='text'
                className='notes__title-input'
                placeholder='Some awesome title'
            />

            <textarea
                placeholder='What happened today?'
                className='notes__textarea'
            />            
            <div className='notes__image'>
                <img 
                    src='https://t3.ftcdn.net/jpg/03/15/34/90/360_F_315349043_6ohfFyx37AFusCKZtGQtJR0jqUxhb25Y.jpg'
                    alt='Img'
                />
            </div>

        </div>


    </div>
  )
}
