import { Box, Button, Typography } from "@mui/material";
import React from "react";

export function PageActions({ caption, actions = [] }) {
  return (
    <Box display="flex" justifyContent="space-between">
      <Box>
        <Typography variant="h4">{caption}</Typography>
      </Box>
      <Box display="flex" gap={1}>
        {actions.map((action) => (
          <Button
            onClick={action.onClick}
            key={action.id}
            variant={action.variant}
            color="primary"
          >
            {action.label}
          </Button>
        ))}
      </Box>
    </Box>
  );
}
