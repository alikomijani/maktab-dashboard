import { Box, Divider, List, Paper, Typography } from "@mui/material";
import React from "react";

export function CaptionList({ caption = "", data = [], children, listAction }) {
  return (
    <Box component={Paper}>
      <Box padding={3} paddingTop={4}>
        <Typography variant="h6">{caption}</Typography>
      </Box>
      <Box>
        <List>
          <Divider component="li" />
          {children(data)}
        </List>
      </Box>
      {listAction ? <Box padding={2}>{listAction}</Box> : null}
    </Box>
  );
}
