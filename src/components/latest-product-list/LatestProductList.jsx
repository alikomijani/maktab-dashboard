import React from "react";
import { CaptionList } from "../caption-list";
import { Box, Button } from "@mui/material";
import { ArrowRight } from "@mui/icons-material";

export function LatestProductList() {
  return (
    <CaptionList
      listAction={
        <Box display="flex" justifyContent="flex-end">
          <Button variant="text" color="primary" endIcon={<ArrowRight />}>
            View all
          </Button>
        </Box>
      }
      caption="Latest Products"
      listItems={[
        {
          id: 1,
          title: "Dropbox",
          subtitle: "Updated 2 hours ago",
          avatar: "",
        },
        {
          id: 2,
          title: "Medium Corporation",
          subtitle: "Updated 2 hours ago",
          avatar: "",
        },
        {
          id: 3,
          title: "Slack",
          subtitle: "Updated 2 hours ago",
          avatar: "",
        },
        {
          id: 4,
          title: "Lyft",
          subtitle: "Updated 2 hours ago",
          avatar: "",
        },
        {
          id: 5,
          title: "GitHub",
          subtitle: "Updated 2 hours ago",
          avatar: "",
        },
      ]}
    />
  );
}
