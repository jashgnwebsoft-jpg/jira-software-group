import {
  AppBar,
  Avatar,
  Button,
  Divider,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Paper,
  Stack,
  styled,
  Toolbar,
  Typography,
  type MenuProps,
} from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  AppsRounded,
  Flag,
  HelpOutlined,
  Notifications,
  Search,
  SettingsOutlined,
} from "@mui/icons-material";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import { JiraIcon } from "@atlaskit/logo";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 400,
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "6px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        marginRight: theme.spacing(1.5),
        ...theme.applyStyles("dark", {}),
      },
    },
  },
}));

function NavbarComponents(name: string) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          fontFamily: '"Charlie Text", sans-serif',
          textTransform: "none",
          fontSize: "18px",
          fontWeight: 500,
          bgcolor: open ? "rgb(173, 200, 255)" : "white",
          color: open ? "rgb(0, 42, 251)" : "black",
          "&:hover": {
            bgcolor: "rgb(173, 200, 255)",
            color: "rgb(0, 42, 251)",
          },
        }}
      >
        {name}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        slotProps={{
          list: {
            "aria-labelledby": "demo-customized-button",
          },
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={handleClose}
          disableRipple
          disabled
          sx={{
            opacity: 1,
            cursor: "default",
            py: 1,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Charlie Text",
              fontSize: "14px",
              fontWeight: "bold",
              "&": {
                color: "#000 !important",
              },
              textTransform: "uppercase",
            }}
          >
            Recent
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Flag
              sx={{
                color: "error.main",
                bgcolor: "#ffab00",
                width: "28px",
                height: "28px",
              }}
            />
            <Stack direction="column">
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                Mario's World (MW)
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Software Projects
              </Typography>
            </Stack>
          </Stack>
        </MenuItem>

        <MenuItem onClick={handleClose} disableRipple>
          <Stack direction="row" alignItems="center" spacing={2}>
            <TripOriginIcon
              sx={{
                fontSize: 24,
                color: "#ff6d00",
                bgcolor: "#00b0ff",
                width: "28px",
                height: "28px",
              }}
            />
            <Stack direction="column">
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                Onboarding (ON)
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Software Projects
              </Typography>
            </Stack>
          </Stack>
        </MenuItem>

        <MenuItem onClick={handleClose} disableRipple>
          <Stack direction="row" alignItems="center" spacing={2}>
            <LocalCafeIcon
              sx={{
                fontSize: 24,
                color: "#ff9800",
                bgcolor: "#0091ea",
                width: "28px",
                height: "28px",
              }}
            />
            <Stack direction="column">
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                Space Cafe (SC)
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Software Projects
              </Typography>
            </Stack>
          </Stack>
        </MenuItem>

        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <Typography>View All Project</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <Typography>Create Project</Typography>
        </MenuItem>
      </StyledMenu>
    </>
  );
}

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
            {NavbarComponents("Your work")}
            {NavbarComponents("Projects")}
            {NavbarComponents("Filters")}
            {NavbarComponents("Dashboards")}
            {NavbarComponents("People")}
            {NavbarComponents("Plans")}
            {NavbarComponents("Apps")}
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
