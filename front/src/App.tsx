import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
/** @jsxImportSource @emotion/react */

import MainLogo from "./common/logo";
import LangingPage from "./home/components/landing";
import { Button, ThemeProvider } from "@mui/material";
import theme from "./common/theme";
function App() {
  return (
    <ThemeProvider theme={theme}>      
      <LangingPage></LangingPage>
    </ThemeProvider>
  );
}

export default App;
