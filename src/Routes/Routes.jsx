import React from "react";
import { createBrowserRouter } from "react-router";
import Layouts from "../Layouts/Layouts";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import ListedBooks from "../Pages/ListedBooks";
import PagesToRead from "../Pages/PagesToRead";
import axios from "axios";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layouts,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        loader: async () => {
          const response = await axios("/booksData.json");
          return response.data;
        },
      },
      {
        path: "/listed-books",
        Component: ListedBooks,
      },
      {
        path: "/pages-to-read",
        Component: PagesToRead,
      },
    ],
  },
]);
