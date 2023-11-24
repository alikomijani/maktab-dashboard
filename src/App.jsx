import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { SnackAlertWrapper } from "./components";
function App() {
  return (
    <>
      <RouterProvider router={router} />
      <SnackAlertWrapper />
    </>
  );
}

export default App;
