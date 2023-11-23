import { Box, Toolbar } from "@mui/material";
import React from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
export function DashboardLayout({ children }) {
  return (
    <Box display="flex">
      <DashboardHeader />
      <DashboardSidebar />
      <Box component={"main"} sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
