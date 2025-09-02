import { Box, Grid } from "@mui/material";
import HeaderComponent from "../components/HeaderComponent";
import { Outlet } from "react-router";

export default function Index() {
  return (
    <>
      <Box>
        <HeaderComponent />
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 2 }}></Grid>
          <Grid size={{ xs: 12, md: 10 }}>
            <Outlet />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
