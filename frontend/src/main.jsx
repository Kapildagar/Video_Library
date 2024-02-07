import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Login from './Component/Login/Login.jsx';
import Signup from './Component/signup/Signup.jsx';
import Bookmark from './Component/Bookmark/Bookmark.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path:"/bookmark",
    element:<Bookmark/>
  },
  {
     path:"/signup",
     element:<Signup/>
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
