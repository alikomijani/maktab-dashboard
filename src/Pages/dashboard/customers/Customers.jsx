import { Box } from "@mui/material";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { DataTable, PageActions, PageSearch } from "../../../components";
import { columns } from "./constants";
import { SnackAlertContext } from "../../../context/SnackAlertProvider.context";
import { getCustomers } from "../../../api/customers";

function Customers() {
  const [customers, setCustomers] = useState([]);

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
  useEffect(() => {
    getCustomers().then((users) => setCustomers(users));
  }, []);
  return (
    <Box>
      <Box mt={8}>
        <PageActions caption={"Customers"} actions={pageActions} />
      </Box>
      <Box marginY={4}>
        <PageSearch label={"Customers search"} />
      </Box>
      <DataTable caption={"Latest Orders"} columns={columns} rows={customers} />
    </Box>
  );
}

export default Customers;
