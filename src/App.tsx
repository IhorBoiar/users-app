import React from "react";
import {createBrowserRouter, createHashRouter, RouterProvider} from "react-router-dom";
import routes from "./routes";
import Layout from "./components/layout/Layout";

function App() {
  const router = createHashRouter([
    {
      element: <Layout />,
      children: routes
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;