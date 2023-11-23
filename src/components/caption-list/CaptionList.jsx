import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export function CaptionList({ caption = "", listItems = [], listAction }) {
  return (
    <Box component={Paper}>
      <Box padding={3} paddingTop={4}>
        <Typography variant="h6">{caption}</Typography>
      </Box>
      <Box>
        <List>
          <Divider component="li" />
          {listItems.map((item) => (
            <React.Fragment key={item.id}>
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
          ))}
        </List>
      </Box>
      {listAction ? <Box padding={2}>{listAction}</Box> : null}
    </Box>
  );
}
