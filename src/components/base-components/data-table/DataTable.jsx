import { Box, Card, Table, Typography } from "@mui/material";
import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

export function DataTable({ caption, columns = [], rows = [] }) {
  return (
    <Card sx={{ width: "100%" }}>
      <Box padding={3} paddingTop={4}>
        <Typography variant="h6">{caption}</Typography>
      </Box>
      <Table>
        <TableHead columns={columns} />
        <TableBody rows={rows} columns={columns} />
      </Table>
    </Card>
  );
}
