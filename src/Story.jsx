import React, { useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
function Story() {
const[stories,setStories]=useState([]);
const navigate=useNavigate();
let tot=0;
 useEffect(()=>{
     fetch("http://localhost:3000/story")
        .then(response=> {return response.json()})
        .then((data)=>setStories(data))
        .catch(error=>console.log(error))
        
   },[]);

  return (
    <div className='story d-flex ms-5'><div className='d-none'>{tot=stories.length}</div>
         {stories.length>0?(
          stories.map((story)=>(
            <div key={story.id} onClick={()=>{navigate(`/story/${story.id}/${tot}`)}}>
            <div className='gradient-border m-2 '> <img src={story.userAvatar} alt="dp" className='story-dp rounded-circle ' /></div>
            <p className='text-truncate' style={{width:"70px"}}>{story.username}</p></div>
          ))
         ):(<h2>Loding</h2>)}
    </div>
  )
}

export default Story