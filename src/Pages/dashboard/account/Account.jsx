import { Box } from "@mui/material";
import React from "react";
import { UpdateProfileForm } from "../../../components";
import { WithGuard } from "../../../components/widget/with-guard/WithGuard";

function Account() {
  return (
    <Box>
      <UpdateProfileForm />
    </Box>
  );
}

export default WithGuard(Account);
