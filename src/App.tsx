import { createTheme } from "@mui/material";
import { ThemeProvider, type Theme } from "@emotion/react";
import { RouterProvider } from "react-router";
import router from "./Routes/Routes";

// const { palette } = createTheme();

const theme: Theme = createTheme({
  palette: {
    // primary: {
    //   myCutomColor: palette.augmentColor({ color: { main: "#aeaeae" } }),
    // },
  },
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
