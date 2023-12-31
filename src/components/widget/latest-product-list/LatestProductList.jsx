import React from "react";
import { Box, Button } from "@mui/material";
import { ArrowRight } from "@mui/icons-material";
import { CaptionList, WithLoading } from "../../base-components";
import { ProductRow } from "./ProductRow";
import { LoadingProductList } from "./LoadingProductList";

function LatestProductList({ data = [] }) {
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
      data={data}
    >
      {(rows) => rows.map((item) => <ProductRow item={item} key={item.id} />)}
    </CaptionList>
  );
}

export const WithLoadingLatestProductList = WithLoading(
  LatestProductList,
  LoadingProductList,
  getProductList
);

function getProductList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
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
      ]);
    }, 2000);
  });
}
