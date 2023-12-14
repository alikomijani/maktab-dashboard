import React from "react";
import { Box, Button } from "@mui/material";
import { ArrowRight } from "@mui/icons-material";
import { CaptionList, WithLoading } from "../../base-components";

function LatestUsersList({ data = [] }) {
  return (
    <CaptionList
      listAction={
        <Box display="flex" justifyContent="flex-end">
          <Button variant="text" color="primary" endIcon={<ArrowRight />}>
            View all
          </Button>
        </Box>
      }
      caption="Latest Users"
      data={data}
    >
      {(rows) => rows.map((item) => <UserRow user={item} key={item.id} />)}
    </CaptionList>
  );
}

export const WithLoadingLatestUsersList = WithLoading(
  LatestUsersList,
  LoadingUserList,
  getUsersList
);

function getUsersList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          fullName: "Ali komijani",
          lastLLogin: "1 hours ago",
          avatar: "",
        },
        {
          id: 2,
          fullName: "Hassan Ebrahinmi",
          lastLLogin: "2 hours ago",
          avatar: "",
        },
      ]);
    }, 2000);
  });
}
function LoadingUserList() {
  return <div>loading</div>;
}
function UserRow({ user }) {
  return <div>{user.fullName}</div>;
}
