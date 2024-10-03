import { useState } from 'react'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import Login from './component/pages/Login';
import Write from './component/pages/Write';
import Single from './component/pages/Single';
import Register from './component/pages/Register';
import Home from './component/pages/Home';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import './style.scss'
function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/post/:id",
          element: <Single />,
        },
        {
          path: "/write",
          element: <Write />,
        },
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },


    {
      path: "/Login",
      element: <Login />,
    },
  ]);
  return (
    <>
      <div className="app"><div className="container">
        <RouterProvider router={router} />
      </div></div>

    </>
  )
}



export default App
