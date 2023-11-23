import { createBrowserRouter } from "react-router-dom";
import { DashboardLayout } from "../components";

export const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <div>Home</div>,
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
