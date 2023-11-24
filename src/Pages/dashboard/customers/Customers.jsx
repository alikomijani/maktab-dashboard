import { Box } from "@mui/material";
import React, { useContext, useEffect, useMemo, useState } from "react";
import {
  DataTable,
  PageActions,
  PageSearch,
  UpdateProfileForm,
} from "../../../components";
import { columns } from "./constants";
import { SnackAlertContext } from "../../../providers";
import { useCustomers } from "../../../api";

function Customers() {
  const [params, setParams] = useState({});
  const {
    isLoading: isLoadingData,
    error: errorLoadingData,
    data: customers,
  } = useCustomers({ params });
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
  useEffect(() => {}, []);
  return (
    <Box>
      <Box mt={8}>
        <PageActions caption={"Customers"} actions={pageActions} />
      </Box>
      <Box display="flex" marginY={4} gap={3}>
        <Box>
          <UpdateProfileForm />
        </Box>
        <Box>
          <PageSearch
            label={"Customers search"}
            handleSearch={(search) =>
              setParams({ username: search ? search : undefined })
            }
          />
        </Box>
      </Box>
      <DataTable caption={"Latest Orders"} columns={columns} rows={customers} />
    </Box>
  );
}

export default Customers;
