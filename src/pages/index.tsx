import { Grid, Stack } from "@mui/material";
// import HeaderComponent from "../components/HeaderComponent";
import { Outlet } from "react-router";
import SideNav from "../components/SideNav";
import Navbar from "../components/navbar/Navbar";

export default function Index() {
  return (
    <>
      {/* <HeaderComponent /> */}
      <Stack direction="column" gap={2}>
        <Navbar />
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 2 }}>
            <SideNav />
          </Grid>
          <Grid size={{ xs: 12, md: 10 }}>
            <Outlet />
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}
