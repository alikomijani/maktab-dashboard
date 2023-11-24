import { List } from "@mui/material";
import React from "react";
import { MenuItems } from "./constants";
import MenuItem from "./MenuItem";
function SidebarList() {
  return (
    <nav aria-label="dashboard menu">
      <List>
        {MenuItems.map((item) => (
          <MenuItem item={item} key={item.id} />
        ))}
      </List>
    </nav>
  );
}
export default SidebarList;
