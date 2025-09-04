import { createTheme } from "@mui/material";
import { ThemeProvider, type Theme } from "@emotion/react";
import { RouterProvider } from "react-router";
import router from "./routes/Routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const theme: Theme = createTheme({
  palette: {},
});

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
