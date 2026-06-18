import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Profile from './profile.jsx'
import './index.css'
import App from './App.jsx'
import ViewStoy from './ViewStoy.jsx'
import Feed from './Feed.jsx'
import Suggestion from './Suggestion.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
const router=createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>,
    children:[
      {
     index:true,
     element:<div className='d-flex'>
               <div className='w-70'><Feed/></div>
              <div className='w-40'><Suggestion/></div>
              
              </div>      },
    {
      path:'/story/:id/:tot',
      element:<ViewStoy/>
    },{
      path:"/profile",
      element:<Profile/>
    }]}
  ]
)
createRoot(document.getElementById('root')).render(
  <div className='display-flex'> 
    <RouterProvider router={router}></RouterProvider>
  </div>
  
)
