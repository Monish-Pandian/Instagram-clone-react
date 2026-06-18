import React, { useEffect, useState } from 'react'

function SwithchApperence() {
   const [theme,setTheme]=useState("light")
   useEffect(()=>{
    const savedTheme=localStorage.getItem("theme");
    if(savedTheme){
        setTheme(savedTheme);
        document.body.className=savedTheme
    }
   },[])
   const handdleswitch=()=>{
    const newtheme=theme ==="light"?"dark":"light";
    setTheme(newtheme)
    document.body.className=newtheme;
    localStorage.setItem("theme",newtheme)
}
  return (
    <a onClick={(handdleswitch)}>Switch Apperence</a> 
  )
}

export default SwithchApperence