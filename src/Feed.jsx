import React from 'react'
import Story from './Story'
import Posts from './Posts'
function Feed() {
  return (
    <div >
      
    <div className='story mt-3'><Story/></div>
   
    <div className='mt-5'><Posts/></div>
    </div>
  )
}

export default Feed