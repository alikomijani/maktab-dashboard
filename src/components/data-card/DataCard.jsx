import React from "react";
import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";

export function DataCard({ label, value, avatar, subtitle }) {
  return (
    <Card>
      <CardContent
        sx={{
          height: 140,
        }}
      >
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Typography
              variant="overline"
              color="text.secondary"
              sx={{
                textTransform: "uppercase",
              }}
            >
              {label}
            </Typography>
            <Typography variant="h4">{value}</Typography>
          </Box>
          {avatar ? <Box>{avatar}</Box> : null}
        </Box>
        {subtitle ? <Box mt={2}>{subtitle}</Box> : null}
      </CardContent>
    </Card>
  );
}
