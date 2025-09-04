import {
  AppBar,
  Avatar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  AppsRounded,
  HelpOutlined,
  Notifications,
  SettingsOutlined,
} from "@mui/icons-material";
import React from "react";
import { navbarData } from "../../data/TempData";
import CreatePopUpView from "../../pages/createPopUp/CreatePopUpView";
import CustomMenuButtonComponent from "../Button/CustomMenuButtonComponent";
import CustomizedSearchComponent from "../TextField/CustomizedSearchComponent";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function HeaderComponent() {
  const [openFirst, setOpenFirst] = React.useState(false);

  const handleClickOpenFirst = () => {
    setOpenFirst(true);
  };
  const handleCloseFirst = () => {
    setOpenFirst(false);
  };
  return (
    <>
      <AppBar
        sx={{
          bgcolor: "rgb(255,255,255)",
          color: "rgb(23, 43, 77)",
          boxShadow: "0px 1px 2px rgba(0,0,0,0.1)",
        }}
        style={{
          position: "sticky",
        }}
      >
        <Toolbar sx={{ minHeight: 50, px: 3 }}>
          <Stack direction="row" gap={1} alignItems="center" flex={1}>
            <IconButton edge="start" sx={{ color: "rgb(23, 43, 77)" }}>
              <AppsRounded />
            </IconButton>
            <Icon icon="mdi:jira" width="24" height="24" color="#1976d2" />
            <Typography variant="h5">Jira</Typography>
            {navbarData.map((data, index) => (
              <CustomMenuButtonComponent
                key={index}
                title={data}
                hoverEffect={true}
                backgroundColorProps="white"
                colorProps="black"
              />
            ))}

            <Button variant="contained" onClick={handleClickOpenFirst}>
              Create
            </Button>
          </Stack>
          <CreatePopUpView handleClose={handleCloseFirst} open={openFirst} />

          <Stack direction="row" gap={1} alignItems="center">
            <CustomizedSearchComponent
              iconSide="start"
              border="1px solid rgba(0,0,0,0.15)"
              borderRadius="6px"
              placeholder="search"
            />
            <IconButton>
              <Notifications
                sx={{ color: "rgb(23, 43, 77)", transform: "rotate(30deg)" }}
              />
            </IconButton>
            <IconButton>
              <HelpOutlined sx={{ color: "rgb(23, 43, 77)" }} />
            </IconButton>
            <IconButton>
              <SettingsOutlined sx={{ color: "rgb(23, 43, 77)" }} />
            </IconButton>

            <Avatar alt="Abhi" src="..." sx={{ width: 32, height: 32 }} />
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}
