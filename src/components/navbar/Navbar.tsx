import {
  AppBar,
  Avatar,
  Button,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  AppsRounded,
  HelpOutlined,
  Notifications,
  Search,
  SettingsOutlined,
} from "@mui/icons-material";
import { JiraIcon } from "@atlaskit/logo";
import CustomMenuButtonComponent from "../CustomMenuButtonComponent";
import { navbarData } from "../../data/TempData";

export default function Navbar() {
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
            <JiraIcon appearance="brand" size="small" />
            <Typography variant="h5">Jira</Typography>
            {navbarData.map((data) => (
              <CustomMenuButtonComponent
                title={data}
                hoverEffect={true}
                backgroundColorProps="white"
                colorProps="black"
              />
            ))}

            <Button variant="contained">Create</Button>
          </Stack>

          <Stack direction="row" gap={1} alignItems="center">
            <Paper
              sx={{
                display: "flex",
                alignItems: "center",
                px: 1,
                py: 0.3,
                border: "1px solid rgba(0,0,0,0.15)",
                borderRadius: "6px",
                bgcolor: "rgb(250,250,250)",
              }}
              elevation={0}
            >
              <Search sx={{ color: "rgba(0,0,0,0.6)" }} />
              <InputBase placeholder="Search" sx={{ ml: 1, fontSize: 14 }} />
            </Paper>

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
