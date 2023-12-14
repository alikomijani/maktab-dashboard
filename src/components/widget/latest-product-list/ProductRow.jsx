import React from "react";
import {
  Avatar,
  Divider,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export const ProductRow = ({ item }) => {
  return (
    <React.Fragment>
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
            <MoreVertIcon />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar src={item.avatar} />
        </ListItemAvatar>
        <ListItemText primary={item.title} secondary={item.subtitle} />
      </ListItem>
      <Divider component="li" />
    </React.Fragment>
  );
};
