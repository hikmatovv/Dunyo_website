import React from "react";
import { Navigate } from "react-router-dom";
import Users from "../views/Users/List";
import Home from "../components/Homenews";
import Sport from "../components/Sport/Sport";
import Mahalliy from "../components/Mahalliy";
// import Dunyo  from '../components/Dunyo'
import Madaniyat from "../components/Madaniyat";
import Lyfstyle from "../components/Lyfstyle/Lyfstyle";
// import Mahalliy from '../components/Mahalliy'
import Kolumnistlar from '../components/Kommunistlar'

export const routes = [
  {
    // element: <Home />,
    children: [
      { index: true, element: <Home /> },
      { path: "/mahalliy", element: <Mahalliy /> },
      // { path: '/dunyo', element: <Dunyo /> },
      // { path: '/pul', element: <Pul /> },
      { path: "/madaniyat", element: <Madaniyat /> },
      { path: "/lifestyle", element: <Lyfstyle /> },
      { path: "/sport", element: <Sport /> },
      // { path: '/multimedia', element: <Multimedia /> },
      { path: '/kolumnistlar', element: <Kolumnistlar /> },

      { path: "*", element: <Navigate to="/" /> },
    ],
  },
];
