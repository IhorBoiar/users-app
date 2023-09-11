import React from "react";
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import Layout from "./components/layout/Layout";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: routes
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;