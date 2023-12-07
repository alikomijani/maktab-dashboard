import React, { lazy } from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import { DashboardLayout, Loadable } from "../components";

const Dashboard = Loadable(lazy(() => import("../Pages/dashboard/Dashboard")));
const Customers = Loadable(
  lazy(() => import("../Pages/dashboard/customers/Customers"))
);
const Account = Loadable(
  lazy(() => import("../Pages/dashboard/account/Account"))
);
const Login = Loadable(lazy(() => import("../Pages/login/Login")));
const Register = Loadable(lazy(() => import("../Pages/register/Register")));

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
        element: <Customers />,
      },
      {
        path: "products",
        element: <div>products</div>,
      },
      {
        path: "account",
        element: <Account />,
      },
    ],
  },
  {
    path: "/",
    element: (
      <>
        <Outlet />
      </>
    ),
    children: [
      {
        index: true,
        element: <h1>habibi welcome to iran</h1>,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
