

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
        path:"/BookDetails/:id",
        element:<BookDetails/>,
        loader: ()=>fetch("public/fakeDataOfBooks.json"),


      }
      
    ]
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


