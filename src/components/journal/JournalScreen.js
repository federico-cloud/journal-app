import React from 'react'
import { Sidebar } from './Sidebar';
import { Empty } from './Empty';

export const JournalScreen = () => {
  return (
    <div className='journal__main-content'>
        <Sidebar />
        <main>
          {/* <Empty /> */}
        </main>
    </div>
  )
}
