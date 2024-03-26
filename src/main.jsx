// // import React from 'react'
// // import ReactDOM from 'react-dom/client'
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import Navbar from './assets/Components/Navbar.jsx';
// import Home from './assets/Components/Home.jsx';
// import MainLayOut from './assets/Components/MainLayOut.jsx';

// const router = createBrowserRouter({
//   path: "/",
//   element: <><h1>jsjsjsj</h1></>
//   // children: [
//   //   {
//   //     path: "/",
//   //     element: <Home />
//   //   }
//   // ]
// });

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );


import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./assets/Components/Home";

import MainLayOut from "./assets/Components/MainLayOut";
import PageToRead from "./assets/Components/PageToRead";
import ListedBooks from "./assets/Components/ListedBooks";
import BookDetails from "./assets/Components/BookDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/ListedBooks",
        element: <ListedBooks></ListedBooks>
      },
      {
        path: "/PagetoRead",
        element: <PageToRead></PageToRead>
      },
      {
        path: "/BookDetails",
        element: <BookDetails></BookDetails>
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


