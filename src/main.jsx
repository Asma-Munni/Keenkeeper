import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router-dom';
import RootLayout from './layout/RootLayout.jsx';
import Homepage from './pages/homepage/Homepage.jsx';
import ErrorPage from './pages/errorpage/ErrorPage.jsx';
import FriendDetails from './pages/frienddetails/FriendDetails.jsx';
import TimelineContext from "../src/context/TimelineContext"
import Timeline from './pages/timeline/Timeline.jsx';
import States from './pages/states/States.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
      {
        path:"/",
        element:<Homepage></Homepage>
      },
      
      {
        path:"/friendDetails/:id",
        element: <FriendDetails></FriendDetails>
      },
      {
        path:"/timeline",
        element: <Timeline></Timeline>
      },
      {
        path:"/states",
        element:<States></States>
      }

    ],
    errorElement: <ErrorPage></ErrorPage>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <TimelineContext>
       <RouterProvider router={router} />
   </TimelineContext>
    
  
    
   
    
     
  </StrictMode>,
)
