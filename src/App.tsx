import { createTheme } from "@mui/material";
import { ThemeProvider, type Theme } from "@emotion/react";
import { grey } from "@mui/material/colors";
import { RouterProvider } from "react-router";
import router from "./Routes/Routes";

// const { palette } = createTheme();

const theme: Theme = createTheme({
  palette: {
    // primary: {
    //   myCutomColor: palette.augmentColor({ color: { main: "#aeaeae" } }),
    // },
    jash: grey,
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
