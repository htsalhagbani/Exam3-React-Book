import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import ErrorPage from './Error';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Book from '../components/Book';
import Details from '../components/Details';
import Favourate from '../components/Favourate';
import Signup from '../components/Signup';
import Login from '../components/Login';
import Read from '../components/Read';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Signup/>,
      errorElement:<ErrorPage/>,
    },
    {
        path: "/book",
        element: <Book/>
      },
      {
        path: "/details/:rank",
        element: <Details/>
      },
      {
        path: "/fav",
        element: <Favourate/>
      },
      {
        path: "/read",
        element: <Read/>
      },
      {
        path: "/home",
        element: <Home/>,
        
      },
      {
        path: "/login",
        element: <Login/>
      },
  ]);

export default router