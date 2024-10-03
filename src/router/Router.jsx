import React from 'react';
import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Login from '../pages/Login';
import AddStudent from '../pages/AddStudent';
import ManageStudent from '../pages/ManageStudent';
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login></Login>,      
    },
    {
        path:"/add",
        element:<AddStudent></AddStudent>
    },
    {
        path:"/manageStudent",
        element:<ManageStudent></ManageStudent>
    }
  ]);

export default router;