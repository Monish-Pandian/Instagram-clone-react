import React, { useEffect, useState } from 'react'

function Posts() {
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
     fetch("http://localhost:3000/posts")
        .then(response=> {return response.json()})
        .then((data)=>setPosts(data))
        .catch(error=>console.log(error))
        
   },[]);
  return (
    <div className='d-flex justify-content-center'>
        {posts.length>0?(
            <div>
                {posts.map((post)=>
                  <div key={post.id} className='my-3'>
                    <div className='d-flex mt-2'>
                        <img className="dp rounded-circle me-2"src={post.userAvatar} alt="Profile pic" />
                        <h5>{post.username}</h5>
                        <i className="bi bi-three-dots fs-5 ms-auto"></i>
                    </div>
                    <img className="post card mt-2"src={post.imageUrl} alt="Post" />
                    <div className='d-flex flex-row gap-4 mt-2'>
                        <b className="bi bi-heart fs-4"></b>
                        <b className="bi bi-chat fs-4 "></b>
                        <i className="bi bi-send fs-4"></i>
                        <i className="bi bi-bookmark fs-4 ms-auto"></i>
                    </div>
                    <div>
                        <b>{post.likes}Likes</b>
                    </div>
                    <div>
                        {post.caption}
                    </div><hr/>
                  </div>
                )}
            </div>
        ):(<div>Loading</div>)}
    </div>
  )
}

export default Posts