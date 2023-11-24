import { Box } from "@mui/material";
import React, { useContext, useMemo } from "react";
import { DataTable, PageActions, PageSearch } from "../../../components";
import { columns, data } from "./constants";
import { SnackAlertContext } from "../../../context/SnackAlertProvider.context";

function Customers() {
  const { showAlert } = useContext(SnackAlertContext);
  const pageActions = useMemo(
    () => [
      {
        id: 1,
        label: "export",
        variant: "text",
        onClick: () =>
          showAlert({
            severity: "info",
            title: "success",
            message: "Export process successfully finished ",
          }),
      },
      {
        id: 2,
        label: "import",
        variant: "text",
        onClick: () =>
          showAlert({
            severity: "warning",
            title: "success",
            message: "Import process successfully finished ",
          }),
      },
      {
        id: 3,
        label: "Add Customer",
        variant: "contained",
        onClick: () =>
          showAlert({
            severity: "error",
            title: "success",
            message: "Add Customer process successfully finished ",
          }),
      },
    ],
    [showAlert]
  );
  return (
    <Box>
      <Box mt={8}>
        <PageActions caption={"Customers"} actions={pageActions} />
      </Box>
      <Box marginY={4}>
        <PageSearch label={"Customers search"} />
      </Box>
      <DataTable caption={"Latest Orders"} columns={columns} rows={data} />
    </Box>
  );
}

export default Customers;
