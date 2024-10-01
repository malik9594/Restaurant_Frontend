import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import Login from './component/pages/Login';
import Write from './component/pages/Write';
import Single from './component/pages/Single';
import Register from './component/Register';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
    {
      path: "/write",
      element: <Write/>,
    },
    {
      path: "/single",
      element: <Single/>,
    },
    {
      path: "/Login",
      element: <Login/>,
    },
  ]);
  return (
    <>
<RouterProvider router={router} />
    </>
  )
}

export default App
