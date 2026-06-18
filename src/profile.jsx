import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
function profile() {
    const [profile,setProfile]=useState(null);
    const[followers,setFollowers]=useState([]);
    const[unfollow,setUnfollow]=useState(0)
    useEffect(()=>{
    axios.get("http://localhost:3000/profile")
    .then(data=>{setProfile(data.data);console.log(data.data)})
     .catch(err=>console.log(err))
     axios.get("http://localhost:3000/Followers")
    .then(data=>{setFollowers(data.data);console.log(data.data)})
     .catch(err=>console.log(err))


},[])
function handleonChange(e){
     setProfile(prev=>({
        ...prev,[e.target.name]:e.target.value
     }))
}
const handleupdate=async()=>{
    axios.put("http://localhost:3000/profile",profile)
    .then(console.log("updated"))
    .catch(err=>console.log(err))
   
}
const handleunfollowed=async(id)=>{
   axios.delete(`http://localhost:3000/Followers/${id}`)
   .then(alert("unfollowed")).then(setUnfollow(!unfollow))
   .catch(err=>console.log(err))
} 
const handleunfollow=async(id,username,userAvatar)=>{
   axios.post("http://localhost:3000/suggestion",{"id":id,"username":username,"userAvatar":userAvatar})
   .then(()=>handleunfollowed(id)).catch(err=>console.log(err))
}
  return (
    <div className='m-5'>
        {profile?(
     <div >
       <div className='d-flex'>
        <img  className="p_pic rounded-circle border border-3" style={{width:"100px",height:"100px"}}src={profile.userAvatar} alt="" />
        <h5 className='m-4 fs-4'>{profile.username}</h5>
        <div className='btn-group'>       
          <button className="btn btn-secondary dropdown-toggle no-caret mt-4" style={{width:"50px",height:"40px"}}type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Edit</button>
         <ul className='dropdown-menu large mt-1'>
        <li ><input type="text" className="form-control my-2 dropdown-item" value={profile.username} onChange={handleonChange} name='username' /></li>
       <li><input type="text"  className="form-control my-2"  name='profile_pic' onChange={handleonChange} value={profile.userAvatar}/></li>
        <li><button className="btn btn-primary " onClick={handleupdate}>Update</button></li>
        </ul>
        </div>
        </div>
       
     </div>
    ):(<p>loading</p>)}
    <hr />
    <h4 className='my-3'>Followers</h4>
    <hr style={{width:"120px"}}/>
    {followers.length>0?(
         followers.map(follower=>(
            <div className="suggestion d-flex my-2" key={follower.id}>
                 <img className='dp rounded-circle' src={follower.userAvatar} alt="" />
                <p className='ms-2'>{follower.username}</p>
               <p className='me w-75 ms-auto'><a href="" className='text-primary text-decoration-none ms-5' onClick={()=>(handleunfollow(follower.id,follower.username,follower.userAvatar))}>unfollow</a></p> 
             </div>
         ))
        ):(<p>hi</p>)
    }
    </div>

  )
}
export default profile