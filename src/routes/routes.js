import React from 'react';
import { Navigate } from 'react-router-dom';
import Users from '../views/Users/List';
import Home from '../containers/Home';
import Lyfstyle from '../components/Lyfstyle';
import Sport from '../components/Sport/Sport';

export const routes = [
  {
    // element: <Home />,
    children: [
      { index: true, element: <Home /> },
      { index: true, element: <Lyfstyle /> },
      { index: true, element: <Sport /> },
      { path: '/users', element: <Users /> },
      { path: '*', element: <Navigate to='/' /> },
    ],
  },
];
