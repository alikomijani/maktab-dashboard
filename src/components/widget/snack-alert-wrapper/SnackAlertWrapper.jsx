import React, { useContext } from "react";
import { SnackbarAlert } from "../../base-components";
import { SnackAlertContext } from "../../../providers/SnackAlertProvider";

export function SnackAlertWrapper() {
  const { handleClose, value } = useContext(SnackAlertContext);
  console.log(value);
  return (
    <SnackbarAlert
      handleClose={handleClose}
      open={value.open}
      title={value.title}
      message={value.message}
      autoHideDuration={value.autoHideDuration}
      severity={value.severity}
    />
  );
}
