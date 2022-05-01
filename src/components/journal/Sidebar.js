import React from 'react'

export const Sidebar = () => {
  return (
    <>
        <aside className='journal__sidebar'>
            <div className='journal__sidebar-nav'>
                <h3 className='mt-5'>
                <i className='far fa-moon'/>
                    <span> Federico</span>
                </h3>
                <button className='btn'>
                    Logout
                </button>
            </div>
            <div className='journal__new-entry'>
                <i className='far fa-calendar-plus fa-4x'/>
                <p className='mt-5'>New entry</p>
            </div>
        </aside>
    </>
  )
}
