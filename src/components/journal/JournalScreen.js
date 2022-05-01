import React from 'react'
import { Sidebar } from './Sidebar';
import { Empty } from './Empty';
import { NoteScreen } from '../notes/NoteScreen';

export const JournalScreen = () => {
  return (
    <div className='journal__main-content'>
        <Sidebar />
        <main>
          {/* <Empty /> */}
          <NoteScreen />
        </main>
    </div>
  )
}
