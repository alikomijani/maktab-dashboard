import React from "react";
import { DataTable } from "../../base-components";
import { Chip } from "@mui/material";

const StatusMapColor = {
  0: { color: "warning", label: "PENDING" },
  1: { color: "success", label: "Delivered" },
  2: { color: "error", label: "Refunded" },
  3: { color: "info", label: "Under review" },
};

export function LatestOrdersTable() {
  return (
    <DataTable
      caption={"Latest Orders"}
      columns={[
        { id: 1, label: "Order ref", renderCol: (row) => row.orderRef },
        { id: 2, label: "Customer", renderCol: (row) => row.customer },
        { id: 3, label: "Date", renderCol: (row) => row.date },
        {
          id: 4,
          label: "Status",
          renderCol: (row) => (
            <Chip
              sx={{
                fontSize: 12,
                fontWeight: 600,
                textTransform: "uppercase",
              }}
              label={StatusMapColor[row.status].label}
              color={StatusMapColor[row.status].color}
            />
          ),
        },
      ]}
      rows={[
        {
          id: 1,
          orderRef: "CDD1049",
          customer: "Ekaterina Tankova",
          date: "12/04/2019",
          status: 3,
        },
        {
          id: 2,
          orderRef: "CDD1048",
          customer: "Cao Yu",
          date: "12/04/2019",
          status: 1,
        },
        {
          id: 3,
          orderRef: "CDD1047",
          customer: "Alexa Richardson",
          date: "12/04/2019",
          status: 2,
        },
      ]}
    />
  );
}
