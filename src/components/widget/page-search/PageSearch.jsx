import { Search } from "@mui/icons-material";
import { Box, Button, InputAdornment, Paper, TextField } from "@mui/material";
import React, { useState } from "react";

export function PageSearch({ label, handleSearch }) {
  const [value, setValue] = useState("");
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
        value={value}
        onChange={(e) => setValue(e.target.value)}
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
      <Button variant="contained" onClick={() => handleSearch(value)}>
        Search
      </Button>
    </Box>
  );
}
