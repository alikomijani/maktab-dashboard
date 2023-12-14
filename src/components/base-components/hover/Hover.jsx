import { Box, Paper } from "@mui/material";
import React, { createContext, useContext, useState } from "react";

const HoverContext = createContext({
  show: false,
  setShow: (show) => {},
});

export function Hover({ children }) {
  const [show, setShow] = useState(false);
  return (
    <Box
      style={{
        position: "relative",
      }}
      onMouseLeave={() => setShow(false)}
    >
      <HoverContext.Provider
        value={{
          show,
          setShow,
        }}
      >
        {children}
      </HoverContext.Provider>
    </Box>
  );
}

export function HoverContent({ children }) {
  const { show } = useContext(HoverContext);
  return (
    <Box
      sx={{
        position: "absolute",
        visibility: show ? "visible" : "hidden",
      }}
    >
      {children}
    </Box>
  );
}

export function HoverButton({ children }) {
  const { setShow } = useContext(HoverContext);
  return <Box onMouseEnter={() => setShow(true)}> {children}</Box>;
}
