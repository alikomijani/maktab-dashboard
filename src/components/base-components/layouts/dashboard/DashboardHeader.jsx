import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  InputAdornment,
  List,
  ListItemIcon,
  MenuItem,
  Paper,
  TextField,
  Toolbar,
} from "@mui/material";
import React, { useState } from "react";
import PeopleIcon from "@mui/icons-material/People";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { drawerWidth } from "./constants";
import SearchIcon from "@mui/icons-material/Search";
import { Logout, PersonAdd, Settings } from "@mui/icons-material";
import { Hover, HoverButton, HoverContent } from "../../hover/Hover";
function DashboardHeader() {
  const [showHover, setShowHover] = useState(false);
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        backgroundColor: (theme) => theme.palette.background.paper,
      }}
    >
      <Toolbar
        sx={{
          gap: 1,
        }}
      >
        <Box flexGrow={1}>
          <TextField
            fullWidth
            size="small"
            name="search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box display="flex" gap={1}>
          <IconButton>
            <PeopleIcon />
          </IconButton>
          <Hover>
            <HoverButton>
              <IconButton>
                <NotificationsActiveIcon />
              </IconButton>
            </HoverButton>
            <HoverContent>
              <List component={Paper}>
                <MenuItem>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Add another account
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </List>
            </HoverContent>
          </Hover>
          <Avatar sx={{ width: 40, height: 40 }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default DashboardHeader;
