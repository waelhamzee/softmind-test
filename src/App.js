import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FormPage from "./pages/FormPage";
import DashboardPage from "./pages/DashboardPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <FormPage />,
    },
    {
      path: "/dashboard",
      element: <DashboardPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
