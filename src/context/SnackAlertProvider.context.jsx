import React, { createContext, useState } from "react";

export const SnackAlertContext = createContext({
  value: {
    open: false,
    autoHideDuration: 5000,
    severity: "info",
    title: "",
    message: "",
  },
  handleClose: () => {},
  showAlert: ({
    title,
    message,
    severity = "info",
    autoHideDuration = 5000,
  }) => {},
}); // you can optionally pass it a default value // it returns a "provider" object

function SnackAlertProvider({ children }) {
  const [value, setValue] = useState({
    open: false,
    autoHideDuration: 5000,
    severity: "info",
    title: "",
    message: "",
  });
  const handleClose = () => {
    setValue({ ...value, open: false });
  };
  const showAlert = ({
    title,
    message,
    severity = "info",
    autoHideDuration = 5000,
  }) => {
    setValue({
      ...value,
      open: true,
      autoHideDuration,
      severity,
      title: title,
      message: message,
    });
  };
  return (
    <SnackAlertContext.Provider value={{ value, handleClose, showAlert }}>
      {children}
    </SnackAlertContext.Provider>
  );
}

export default SnackAlertProvider;
