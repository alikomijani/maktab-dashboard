import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { MenuItems } from "./constants";

function SidebarList() {
  return (
    <nav aria-label="dashboard menu">
      <List>
        {MenuItems.map(({ Icon, ...item }) => (
          <ListItem
            disablePadding
            key={item.id}
            sx={{
              borderRadius: "4px",
              "& .MuiButtonBase-root": {
                borderRadius: "4px",
              },
              "& .MuiButtonBase-root:hover": {
                background: "#555555",
              },
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <Icon
                  sx={{
                    color: (theme) => theme.palette.neutral[400],
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                sx={{
                  color: (theme) => theme.palette.neutral[300],
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </nav>
  );
}
export default SidebarList;
