import React from 'react'
import Instagram_text from "./assets/Instagram_text.png"
import { useNavigate } from 'react-router-dom'
import More from './More'
function SideBar() {
  const navigate=useNavigate()
  return (<>
    <div className='m-3 position-fixed '>
    <div className='d-flex flex-column gap-4'>
        <img className='logo-text' src={Instagram_text} alt="" />
        <div onClick={()=>{navigate('/')}} ><i className="bi bi-house-door-fill m-2"></i> Home</div>
        <div><i className="bi bi-search m-2"></i>Search</div>
        <div ><i className="bi bi-compass m-2"></i> Explore</div>
        <div><i className="bi bi-play-circle-fill m-2"></i> Reels</div>
        <div><i className="bi bi-chat-dots-fill m-2"></i> Message</div>
        <div> <i className="bi bi-heart m-2"></i>Notification</div>
        <div><i className="bi bi-plus-circle m-2"></i> Create</div>
        <div onClick={()=>{navigate('/profile')}} ><i className="bi bi-person-circle m-2" ></i> Profile</div>
    </div>
    <div className='position-fixed bottom-0 d-flex flex-column gap-3 mb-3 ho'>
        <div><i  className="bi bi-threads m-2"></i> Threads</div>
        <div > <More/></div>
    </div>
    </div>
    </>
  )
}

export default SideBar