import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { DashboardLayout, Loadable } from "../components";

const Dashboard = Loadable(lazy(() => import("../Pages/dashboard/Dashboard")));

export const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "customers",
        element: <div>customers</div>,
      },
      {
        path: "products",
        element: <div>customers</div>,
      },
    ],
  },
]);
