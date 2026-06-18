import React from 'react'
import SwitchApperence from './SwithchApperence'
function More() {
  return (
    <div className='dropup-center dropup '>
      <p className="dropdown-toggle  no-caret" data-bs-toggle="dropdown" aria-expanded="false"><i className='bi bi-list m-2'></i>More</p>
      <ul className='dropdown-menu'>
        <li className="dropdown-item  mt-2"><i className="bi bi-gear-wide m-2"></i>Settings</li>
        <li className="dropdown-item mt-2"><i className="bi bi-activity m-2"></i>Your Activity</li>
        <li className="dropdown-item mt-2"><i className="bi bi-bookmark m-2"></i>Saved</li>
        <li className="dropdown-item mt-2"><i className="bi bi-moon m-2"></i><SwitchApperence/></li>
        <li className="dropdown-item mt-2"><i className="bi bi-exclamation-square m-2"></i>Report a problem</li>
        <li><hr className="dropdown-divider"/></li>
        <li className="dropdown-item ms-2">Switch accounts</li>
        <li><hr className="dropdown-divider"/></li>
        <li className="dropdown-item ms-2">Log out</li>
      </ul> 
    
    </div>
    
  )
}

export default More