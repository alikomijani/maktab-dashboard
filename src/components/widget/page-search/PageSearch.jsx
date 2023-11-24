import { Search } from "@mui/icons-material";
import { Box, Button, InputAdornment, Paper, TextField } from "@mui/material";
import React from "react";

export function PageSearch({ label }) {
  return (
    <Box
      paddingY={4}
      paddingX={3}
      component={Paper}
      display="flex"
      gap={1}
      alignContent={"center"}
    >
      <TextField
        name="search"
        label={label}
        sx={{
          width: 600,
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />
      <Button variant="contained">Search</Button>
    </Box>
  );
}
