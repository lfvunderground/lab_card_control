import React from "react";
import ReactDOM from "react-dom";
import "./styles/global-styles.css";
import { Home } from "./templates/Home";
import { ThemeProvider } from "@mui/styles";
import { theme } from "./theme/default";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root"),
);
