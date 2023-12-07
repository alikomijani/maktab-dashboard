import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { SnackAlertProvider, ReactQueryProvider } from "./providers/";
import { store } from "./store";
import { Provider } from "react-redux";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactQueryProvider>
        <ThemeProvider theme={theme}>
          <SnackAlertProvider>
            <CssBaseline />
            <App />
          </SnackAlertProvider>
        </ThemeProvider>
      </ReactQueryProvider>
    </Provider>
  </React.StrictMode>
);
