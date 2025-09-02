import { Grid, Stack } from "@mui/material";
// import HeaderComponent from "../components/HeaderComponent";
import { Outlet } from "react-router";
import SideNav from "../components/SideNavComponent";
import HeaderComponent from "../components/HeaderComponent";

export default function Index() {
  return (
    <>
      <Stack direction="column" gap={2}>
        <HeaderComponent />
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
