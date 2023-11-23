import { Box, Toolbar } from "@mui/material";
import React from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import { Outlet } from "react-router-dom";
export function DashboardLayout() {
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
