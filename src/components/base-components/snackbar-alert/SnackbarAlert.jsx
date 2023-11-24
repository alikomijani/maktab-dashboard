import { Alert, AlertTitle, Snackbar } from "@mui/material";
import React from "react";

export function SnackbarAlert({
  open,
  handleClose,
  autoHideDuration = 5000,
  severity = "info",
  title,
  message,
}) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        <AlertTitle>{title}</AlertTitle>
        {message}
      </Alert>
    </Snackbar>
  );
}
