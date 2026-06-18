import React from 'react'
import SideBar from './SideBar'
import Suggestion from './Suggestion'
import Feed from './Feed'

import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className='container-fluid  d-flex vh-10'>
      <div className='w-20'><SideBar/></div>
      <div className='vr' style={{height:"auto"}}></div>
      <div className='w-80 ms-5'><Outlet /></div>
     {/* <div className='w-30'><Suggestion/></div> */}
    </div>
  )
}

export default App