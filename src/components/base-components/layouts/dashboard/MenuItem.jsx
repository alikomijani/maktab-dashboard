import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { useNavigate, useMatch } from "react-router-dom";
// TODO: move styling to new theme
function MenuItem({ item }) {
  const Icon = item.Icon;
  const match = useMatch(item.to);
  const navigate = useNavigate();
  console.log({ match, href: item.to });
  return (
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
      <ListItemButton
        selected={!!match}
        sx={{
          "&.Mui-selected": {
            backgroundColor: "rgba(255, 255, 255, 0.08)",
          },
        }}
        onClick={() => {
          navigate(item.to);
        }}
      >
        <ListItemIcon>
          <Icon
            sx={{
              color: (theme) =>
                !!match
                  ? theme.palette.secondary.main
                  : theme.palette.neutral[400],
            }}
          />
        </ListItemIcon>
        <ListItemText
          primary={item.label}
          sx={{
            color: (theme) =>
              !!match
                ? theme.palette.secondary.main
                : theme.palette.neutral[400],
          }}
        />
      </ListItemButton>
    </ListItem>
  );
}

export default MenuItem;
