import { Box, Toolbar } from "@mui/material";
import React from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import { Outlet } from "react-router-dom";
import { WithGuard } from "../../../widget/with-guard/WithGuard";
function DashboardLayout2() {
  return (
    <Box display="flex">
      <DashboardHeader />
      <DashboardSidebar />
      <Box
        component={"main"}
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: (theme) => theme.palette.background.default,
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

export const DashboardLayout = WithGuard(DashboardLayout2);
