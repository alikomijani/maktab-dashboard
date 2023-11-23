import React from "react";
import { drawerWidth } from "./constants";
import { Box, Drawer, Typography } from "@mui/material";
import { LogoIcon } from "../../../assets/svg";
import SidebarList from "./SidebarList";

function DashboardSidebar() {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: (theme) => theme.palette.neutral[900],
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box p={3}>
        <LogoIcon />
      </Box>
      <Box
        sx={{
          marginX: 2,
          marginY: 3,
          paddingX: 3,
          paddingY: 1.5,
          backgroundColor: "rgba(255, 255, 255, 0.04)",
        }}
      >
        <Typography color="white" variant="subtitle1">
          Acme Inc
        </Typography>
        <Typography color="neutral.400" variant="body2">
          Your tier: Premium
        </Typography>
      </Box>
      <Box paddingX={2}>
        <SidebarList />
      </Box>
    </Drawer>
  );
}

export default DashboardSidebar;
