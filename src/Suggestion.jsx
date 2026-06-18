import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';
function Suggestion() {
   const[profile,setProfile]=useState(null);
   const[Suggestion,setSuggestion]=useState([])
   const[followed,setfollwed]=useState(0)
   useEffect(()=>{
       fetch("http://localhost:3000/profile")
          .then(response=> {return response.json()})
          .then((data)=>setProfile(data))
          .catch(error=>console.log(error))
         fetch("http://localhost:3000/suggestion")
          .then(response=> {return response.json()})
          .then((data)=>setSuggestion(data))
          .catch(error=>console.log(error))
          
     },[followed]);
     const handlefollowed=async(id)=>{
       axios.delete(`http://localhost:3000/suggestion/${id}`)
       .then(setfollwed(!followed)).catch(err=>console.log(err)
       )
     }
     const handlefollow=async(id,username,userAvatar)=>{
       axios.post('http://localhost:3000/Followers',{"id":id,"userAvatar":userAvatar,"username":username})
       .then(alert("followed")).then(()=>handlefollowed(id)).catch(err=>console.log(err)
       )
     }
  return (
    <div>
      <div className='suggestion w-75 m-5'>
      {profile?
      <div className='d-flex'>
          <img className="dp rounded-circle me-2"src={profile.userAvatar} alt="Profile pic" />
          <h5>{profile.username}</h5>
          <p className='ms-auto small text-primary'>Switch</p>
      </div>
      :<p>Loading</p>}
      <div className='d-flex mt-3'>
        <p>Suggested for you</p>
        <b className='ms-auto small'>See All</b>
      </div>
      {Suggestion.length>0?(
            <div>
                {Suggestion.map((suggestion)=>
                  <div key={suggestion.id} className='my-1'>
                    <div className='d-flex mt-3'>
                        <img className="dp rounded-circle me-2"src={suggestion.userAvatar} alt="Profile pic" />
                        <h6 className='ms-1'>{suggestion.username}</h6>
                        <a className='text-primary ms-auto text-decoration-none small' onClick={()=>{handlefollow(suggestion.id,suggestion.username,suggestion.userAvatar)}}>Follow</a>
                    </div>
                   
                    <div>
                        {suggestion.caption}
                    </div>
                  </div>
                )}
            </div>
        ):(<div>Loading</div>)}
    </div>
    </div>
  )
}

export default Suggestion