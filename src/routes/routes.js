import React from 'react';
import { Navigate } from 'react-router-dom';
import Users from '../views/Users/List';
import Home from '../containers/Home';
import Mahalliy from '../components/Mahalliy'
import Madaniyat from '../components/Madaniyat'
import Kolumnistlar from '../components/Kommunistlar'

export const routes = [
  {
    // element: <Home />,
    children: [
      { index: true, element: <Home /> },
      { path: '/users', element: <Users /> },
      { path: '/mahalliy', element: <Mahalliy /> },
      // { path: '/dunyo', element: <Dunyo/> },
      // { path: '/pul', element: <Pul /> },
      { path: '/madaniyat', element: <Madaniyat /> },
      // { path: '/lifestyle', element: <LifeStyle /> },
      // { path: '/sport', element: <Sport/> },
      // { path: '/multimedia', element: <Multimedia /> },
      { path: '/kolumnistlar', element: <Kolumnistlar /> },
      { path: '*', element: <Navigate to='/' /> },
    ],
  },
];
