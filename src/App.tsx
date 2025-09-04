import { createTheme } from "@mui/material";
import { ThemeProvider, type Theme } from "@emotion/react";
import { RouterProvider } from "react-router";
import router from "./routes/Routes";

const theme: Theme = createTheme({
  palette: {},
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
