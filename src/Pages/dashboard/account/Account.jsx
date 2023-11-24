import { Box } from "@mui/material";
import React from "react";
import { UpdateProfileForm } from "../../../components";

function Account() {
  return (
    <Box>
      <UpdateProfileForm
        onSubmit={(values) => {
          console.log(values);
        }}
      />
    </Box>
  );
}

export default Account;
