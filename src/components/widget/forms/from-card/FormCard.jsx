import { Card, CardActions, CardContent, CardHeader } from "@mui/material";
import React from "react";

function FormCard({ title, children, cardAction }) {
  return (
    <Card>
      <CardHeader title={title} />
      <CardContent>{children}</CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        {cardAction}
      </CardActions>
    </Card>
  );
}

export default FormCard;
