

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
import Contact from "./assets/Components/Contact";
import About from "./assets/Components/About";
import Error404 from "./assets/Components/Error404";



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
        element: <ListedBooks></ListedBooks>,
        loader: ()=>fetch("/fakeDataOfBooks.json"),
      },
      {
        path: "/PagetoRead",
        element: <PageToRead></PageToRead>,
        loader: ()=>fetch("/fakeDataOfBooks.json"),
        
      },
      {
        path:"/BookDetails/:id",
        element:<BookDetails/>,
        loader: ()=>fetch("/fakeDataOfBooks.json"),


      },
      {
        path: "/About",
        element: <About></About>
      },
      {
        path: "/Contact",
        element: <Contact></Contact>
      },
      {
        
        element: <Error404></Error404>
      },
    ]
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


