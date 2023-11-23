import React from "react";
import { drawerWidth } from "./constants";
import { Drawer, Toolbar } from "@mui/material";

function DashboardSidebar() {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
    </Drawer>
  );
}

export default DashboardSidebar;
