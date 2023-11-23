import { Avatar, Box, Grid, LinearProgress, Typography } from "@mui/material";
import React from "react";
import {
  DataCard,
  LatestOrdersTable,
  LatestProductList,
} from "../../components";
import People from "@mui/icons-material/People";

function Dashboard() {
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <DataCard
            label={"BUDGET"}
            value={"$24k"}
            avatar={
              <Avatar
                sx={{
                  bgcolor: (theme) => theme.palette.error.main,
                  width: 64,
                  height: 64,
                }}
              />
            }
            subtitle={
              <Typography variant="caption" color="text.secondary">
                Since last month
              </Typography>
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <DataCard
            label={"TOTAL CUSTOMERS"}
            value={"1,6k"}
            avatar={
              <Avatar
                sx={{
                  bgcolor: (theme) => theme.palette.success.main,
                  width: 64,
                  height: 64,
                }}
              >
                <People />
              </Avatar>
            }
            subtitle={
              <Typography variant="caption" color="text.secondary">
                Since last month
              </Typography>
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <DataCard
            label={"TASKS PROGRESS"}
            value={"75.5%"}
            avatar={
              <Avatar
                sx={{
                  bgcolor: (theme) => theme.palette.warning.main,
                  width: 64,
                  height: 64,
                }}
              />
            }
            subtitle={
              <LinearProgress variant="buffer" value={75} color="primary" />
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <DataCard
            label={"BUDGET"}
            value={"$24k"}
            avatar={<Avatar />}
            subtitle={
              <Typography variant="caption" color="text.secondary">
                Since last month
              </Typography>
            }
          />
        </Grid>
      </Grid>
      <Grid container spacing={4} mt={4}>
        <Grid item xs={12} md={4} lg={3}>
          <LatestProductList />
        </Grid>
        <Grid item xs={12} md={8} lg={9}>
          <LatestOrdersTable />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
