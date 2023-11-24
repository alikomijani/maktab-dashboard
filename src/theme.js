import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: 24,
          paddingTop: 32,
        },
        title: {
          fontSize: 18,
          fontWeight: 600,
        },
        subheader: {
          fontSize: 14,
          fontWeight: 400,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "32px 24px",
        },
      },
    },
    MuiCardActions: { styleOverrides: { root: { padding: 16 } } },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          borderRadius: "8px",
          fontSize: "14px",
          textTransform: "none",
        },
      },
    },
  },
  typography: {
    h1: {
      fontSize: "56px",
      fontWeight: 700,
      lineHeight: "137.5%",
    },
    h2: {
      fontSize: "48px",
      fontWeight: 700,
      lineHeight: "137.5%",
    },
    h3: {
      fontSize: "36px",
      fontWeight: 700,
      lineHeight: "137.5%",
    },
    h4: {
      fontSize: "32px",
      fontWeight: 700,
      lineHeight: "137.5%",
    },
    h5: {
      fontSize: "24px",
      fontWeight: 500,
      lineHeight: "137.5%",
    },
    h6: {
      fontSize: "18px",
      fontWeight: 500,
      lineHeight: "137.5%",
    },
    subtitle1: {
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "175%",
    },
    subtitle2: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "157%",
    },
    body1: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "157%",
    },
    body2: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "157%",
    },
    caption: {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "166%",
    },
    overline: {
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: "250%",
      textTransform: "uppercase",
      letterSpacing: "0.5px",
    },
  },
  palette: {
    primary: {
      main: "#5048E5",
    },
    secondary: {
      main: "#10B981",
    },
    background: {
      default: "#F3F4F6",
      paper: "#FFFFFF",
    },
    neutral: {
      100: "#F3F4F6",
      300: "#D1D5DB",
      400: "#9CA3AF",
      900: "#111827",
    },
  },
});

export default theme;
