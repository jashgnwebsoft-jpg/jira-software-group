import { useState } from "react";
import {
  styled,
  useTheme,
  type Theme,
  type CSSObject,
  alpha,
} from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, {
  type AppBarProps as MuiAppBarProps,
} from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import GridViewIcon from "@mui/icons-material/GridView";

import CustomListItem from "./CustomListItem";

import Groups2Icon from "@mui/icons-material/Groups2";
import TuneIcon from "@mui/icons-material/Tune";

import { Icon } from "@iconify/react";
import {
  // Link,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Stack,
} from "@mui/material";
import { ChevronRight, ChevronLeft } from "@mui/icons-material";
import SubListItemWithMenuOptions from "./SubListItemWithMenuOptions";
import {
  menuSublistItems,
  projectSubList,
  recentsSubList,
  starredSubList,
} from "../data/sidebarLists";
import { Link } from "react-router";
const drawerWidth = 280;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })<AppBarProps>(({ theme }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(["width", "margin"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   variants: [
//     {
//       props: ({ open }) => open,
//       style: {
//         scrollbarWidth: "none",
//         marginLeft: drawerWidth,
//         width: `calc(100% - ${drawerWidth}px)`,
//         transition: theme.transitions.create(["width", "margin"], {
//           easing: theme.transitions.easing.sharp,
//           duration: theme.transitions.duration.enteringScreen,
//         }),
//       },
//     },
//   ],
// }));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: 350,
  maxWidth: "none",
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  "& .css-1lwhjos-MuiPaper-root-MuiDrawer-paper": {
    position: "fixed",
    top: "65px",
  },

  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

export default function SideNav() {
  // const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [menuSelected, setMenuSelected] = useState(0);
  const [subSelected, setSubSelected] = useState(-1);

  const handleSetSubSelected = (index: number) => {
    setSubSelected(index);
  };
  const handleSelectedMenuChanged = (index: number) => {
    setMenuSelected(index);
  };
  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer variant="permanent" open={open}>
        {/* <DrawerHeader>
          <Stack
            direction="row"
            alignItems={"center"}
            gap={1}
            justifyContent="flex-start"
          >
             <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 2,
              },
              open && { display: "none" },
            ]}
          >
            <MenuIcon />
          </IconButton>
            <GridViewIcon fontSize="small" />
            <img height={20} width={20} src="/src/assets/jira-logo.png" />

            <Typography variant="h5" component="h2">
              Jira
            </Typography>
          </Stack>

          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </DrawerHeader> */}
        <Divider />
        <List>
          <Link
            onClick={() => handleSelectedMenuChanged(1)}
            style={{ color: "#00070aff", textDecoration: "none" }}
            to={"/jira/goal"}
          >
            <CustomListItem
              text={"Your Work"}
              isSubList={false}
              open={open}
              listItems={null}
              iconData={
                <Icon icon="clarity:email-line" width="25" height="25" />
              }
              isSelected={menuSelected == 1 ? true : false}
            />
          </Link>

          <Link
            onClick={() => handleSelectedMenuChanged(2)}
            style={{ color: "#00070aff", textDecoration: "none" }}
            to={"#"}
          >
            <CustomListItem
              text={"Recents"}
              isSubList={true}
              open={open}
              listItems={recentsSubList}
              iconData={
                <Icon icon="mingcute:time-line" width="25" height="25" />
              }
              isSelected={menuSelected == 2 ? true : false}
            />
          </Link>
          <Link
            onClick={() => handleSelectedMenuChanged(3)}
            style={{ color: "#00070aff", textDecoration: "none" }}
            to={"#"}
          >
            <CustomListItem
              text={"Starred"}
              isSubList={true}
              open={open}
              listItems={starredSubList}
              iconData={<Icon icon="mynaui:star" width="25" height="25" />}
              isSelected={menuSelected == 3 ? true : false}
            />
          </Link>
          <Link
            onClick={() => handleSelectedMenuChanged(4)}
            style={{ color: "#00070aff", textDecoration: "none" }}
            to={"#"}
          >
            <CustomListItem
              text={"Apps"}
              isSubList={false}
              open={open}
              listItems={null}
              iconData={
                <Icon icon="uil:create-dashboard" width="25" height="25" />
              }
              isSelected={menuSelected == 4 ? true : false}
            />
          </Link>
          <Link
            to="/jira/goal"
            onClick={() => handleSelectedMenuChanged(5)}
            style={{ color: "#00070aff", textDecoration: "none" }}
          >
            <CustomListItem
              text={"Goals"}
              isSubList={false}
              open={open}
              listItems={null}
              iconData={<Icon icon="fa:circle-o" width="25" height="25" />}
              isSelected={menuSelected == 5 ? true : false}
            />
          </Link>
          <Link
            onClick={() => handleSelectedMenuChanged(6)}
            style={{ color: "#00070aff", textDecoration: "none" }}
            to={"#"}
          >
            <CustomListItem
              text={"Plans"}
              isSubList={false}
              open={open}
              listItems={null}
              iconData={<Icon icon="carbon:branch" width="25" height="25" />}
              isSelected={menuSelected == 6 ? true : false}
            />
          </Link>
          <Link
            onClick={() => handleSelectedMenuChanged(7)}
            style={{ color: "#00070aff", textDecoration: "none" }}
            to={"#"}
          >
            <CustomListItem
              text={"Projects"}
              isSubList={false}
              open={open}
              listItems={projectSubList}
              iconData={<Icon icon="uit:rocket" width="25" height="25" />}
              isSelected={menuSelected == 7 ? true : false}
            />
          </Link>
          <Typography sx={{ px: 5, fontSize: 15 }}> Starred</Typography>
          <List sx={{ px: 2 }}>
            <ListItem
              disablePadding
              sx={{
                backgroundColor: alpha(
                  subSelected == 0 ? "#72cff8" : "#ffffffff",
                  0.3
                ),
                borderRadius: 3,
                borderColor: "primary",
                borderLeft: subSelected == 0 ? "3px solid blue" : "",
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 40,
                  px: 1,
                }}
                onClick={() => {
                  handleSetSubSelected(0);
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 20,
                    px: 1,
                  }}
                >
                  <Icon icon="openmoji:mobile-message" width="25" height="25" />
                </ListItemIcon>
                <Typography sx={{ fontSize: 15 }}>Mobile App</Typography>
              </ListItemButton>

              <SubListItemWithMenuOptions listItems={menuSublistItems} />
            </ListItem>

            <ListItem
              disablePadding
              sx={{
                backgroundColor: alpha(
                  subSelected == 1 ? "#72cff8" : "#ffffffff",
                  0.3
                ),
                borderRadius: 3,
                borderColor: "primary",
                borderLeft: subSelected == 1 ? "3px solid blue" : "",
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 40,
                  px: 1,
                }}
                onClick={() => {
                  handleSetSubSelected(1);
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 20,
                    px: 1,
                  }}
                >
                  <Icon icon="twemoji:compass" width="25" height="25" />
                </ListItemIcon>
                <Typography sx={{ fontSize: 15 }}>
                  Online Store Updates
                </Typography>
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{
                backgroundColor: alpha(
                  subSelected == 2 ? "#72cff8" : "#ffffffff",
                  0.3
                ),
                borderRadius: 3,
                borderColor: "primary",
                borderLeft: subSelected == 2 ? "3px solid blue" : "",
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 40,
                  px: 1,
                }}
                onClick={() => {
                  handleSetSubSelected(2);
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 20,
                    px: 1,
                  }}
                >
                  <Icon
                    icon="streamline-kameleon-color:tease-smiley"
                    width="25"
                    height="25"
                  />
                </ListItemIcon>
                <Typography sx={{ fontSize: 15 }}>Support</Typography>
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{
                backgroundColor: alpha(
                  subSelected == 3 ? "#72cff8" : "#ffffffff",
                  0.3
                ),
                borderRadius: 3,
                borderColor: "primary",
                borderLeft: subSelected == 3 ? "3px solid blue" : "",
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 40,
                  px: 1,
                }}
                onClick={() => {
                  handleSetSubSelected(3);
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 20,
                    px: 1,
                  }}
                >
                  <Icon icon="twemoji:compass" width="25" height="25" />
                </ListItemIcon>
                <Typography sx={{ fontSize: 15 }}>View All Projects</Typography>
              </ListItemButton>
            </ListItem>
          </List>
          <Link
            onClick={() => handleSelectedMenuChanged(8)}
            style={{ color: "#00070aff", textDecoration: "none" }}
            to={"#"}
          >
            <CustomListItem
              text={"Filters"}
              isSubList={false}
              open={open}
              listItems={null}
              iconData={
                <Icon icon="fluent:filter-12-regular" width="25" height="25" />
              }
              isSelected={menuSelected == 8 ? true : false}
            />
          </Link>
          <Link
            onClick={() => handleSelectedMenuChanged(9)}
            style={{ color: "#00070aff", textDecoration: "none" }}
            to={"#"}
          >
            <CustomListItem
              text={"Dashboard"}
              isSubList={false}
              open={open}
              listItems={null}
              iconData={
                <Icon
                  icon="material-symbols:dashboard-2-outline"
                  width="25"
                  height="25"
                />
              }
              isSelected={menuSelected == 9 ? true : false}
            />
          </Link>
          <Link
            onClick={() => handleSelectedMenuChanged(10)}
            style={{ color: "#00070aff", textDecoration: "none" }}
            to={"#"}
          >
            <CustomListItem
              text={"Teams"}
              isSubList={false}
              open={open}
              listItems={null}
              iconData={<Groups2Icon />}
              isSelected={menuSelected == 10 ? true : false}
            />
          </Link>
          <Link
            onClick={() => handleSelectedMenuChanged(11)}
            style={{ color: "#00070aff", textDecoration: "none" }}
            to={"#"}
          >
            <CustomListItem
              text={"Customize sidebar"}
              isSubList={false}
              open={open}
              listItems={null}
              iconData={<TuneIcon />}
              isSelected={menuSelected == 11 ? true : false}
            />
          </Link>
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}
