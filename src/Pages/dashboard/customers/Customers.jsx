import { Box } from "@mui/material";
import React from "react";
import { DataTable, PageActions, PageSearch } from "../../../components";

function Customers() {
  return (
    <Box>
      <Box mt={8}>
        <PageActions
          caption={"Customers"}
          actions={[
            {
              id: 1,
              label: "export",
              variant: "text",
              onClick: () => alert("export"),
            },
            {
              id: 2,
              label: "import",
              variant: "text",
              onClick: () => alert("import"),
            },
            {
              id: 3,
              label: "Add Customer",
              variant: "Contained",
              onClick: () => alert("add customer"),
            },
          ]}
        />
      </Box>
      <Box marginY={4}>
        <PageSearch label={"Customers search"} />
      </Box>
      <DataTable caption={"Latest Orders"} columns={columns} rows={data} />
    </Box>
  );
}

export default Customers;
const columns = [
  {
    id: 1,
    renderCol: (row) => row.name,
    label: "NAME",
  },
  {
    id: 1,
    renderCol: (row) => row.email,
    label: "EMAIL",
  },
  {
    id: 1,
    renderCol: (row) => row.location,
    label: "LOCATION",
  },
  {
    id: 1,
    renderCol: (row) => row.phone,
    label: "PHONE",
  },
  {
    id: 1,
    renderCol: (row) => row.join_date,
    label: "REGISTRATION DATE",
  },
];
const data = [
  {
    id: 1,
    name: "Ekaterina Tankova",
    avatar: "Ekaterina Tankova",
    email: "ekaterina.tankova@devias.io",
    location: "Parkersburg, West Virginia, USA",
    phone: "304-428-3097",
    join_date: "12/04/2019",
  },
];
