import { Grid, Stack } from "@mui/material";
import { Outlet } from "react-router";
import SideNav from "../components/Drawer/SideNavComponent";
import HeaderComponent from "../components/Header/HeaderComponent";

export default function Index() {
  return (
    <>
      <Stack direction="column" gap={2}>
        <HeaderComponent />
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 2 }}>
            <SideNav />
          </Grid>
          <Grid size={{ xs: 12, md: 10 }} mb={2}>
            <Outlet />
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}
