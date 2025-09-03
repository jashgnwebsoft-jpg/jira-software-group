import {
  Add,
  Bolt,
  Close,
  Done,
  ErrorOutline,
  KeyboardArrowRight,
  KeyboardArrowUp,
  MoreHoriz,
  Settings,
  SettingsOverscan,
  Visibility,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  Divider,
  Grid,
  IconButton,
  InputBase,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import CustomMenuButtonComponent from "../../components/CustomMenuButtonComponent";
import { childIssueData, subtaskData } from "../../data/TempData";

export default function SubtaskView() {
  return (
    <>
      <Box border="1px solid grey" borderRadius={2} p={4}>
        <Breadcrumbs maxItems={2} aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="#">
            Projects
          </Link>
          <Link underline="hover" color="inherit" href="#">
            Catalog
          </Link>
          <Link underline="hover" color="inherit" href="#">
            Accessories
          </Link>
          <Link underline="hover" color="inherit" href="#">
            New Collection
          </Link>
          <Stack direction={"row"} gap={1}>
            <Bolt color="secondary" />
            <Typography sx={{ color: "text.primary" }}>IDT-119</Typography>
          </Stack>
        </Breadcrumbs>
        <Stack
          my={2}
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", md: "center" }}
        >
          <Typography variant="h4">Launch new Idea Thread website</Typography>
          <Stack direction={"row"} gap={{ xs: 0, md: 1 }}>
            <CustomMenuButtonComponent
              title="To Do"
              backgroundColorProps="#aeaeae"
              colorProps="#2171b5"
              fontWeightProps={600}
            />
            <IconButton
              aria-label="Add"
              sx={(theme) => ({
                p: 1,
                m: 0,
                color: theme.palette.grey[900],
                border: 2,
                borderRadius: 2,
                borderColor: theme.palette.grey[300],
              })}
            >
              <SettingsOverscan />
            </IconButton>
            <IconButton
              aria-label="Add"
              sx={(theme) => ({
                p: 1,
                m: 0,
                color: theme.palette.grey[900],
                border: 2,
                borderRadius: 2,
                borderColor: theme.palette.grey[300],
              })}
            >
              <Visibility />
            </IconButton>
            <IconButton
              aria-label="Add"
              sx={(theme) => ({
                p: 1,
                m: 0,
                color: theme.palette.grey[900],
                border: 2,
                borderRadius: 2,
                borderColor: theme.palette.grey[300],
              })}
            >
              <MoreHoriz />
            </IconButton>
          </Stack>
        </Stack>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 9 }}>
            <Stack direction={"row"} gap={2}>
              <Button
                variant="outlined"
                startIcon={<Add />}
                sx={{ borderColor: "#aeaeae", color: "black" }}
              >
                Add
              </Button>
              <Button
                variant="outlined"
                startIcon={<Settings />}
                sx={{ borderColor: "#aeaeae", color: "black" }}
              >
                Apps
              </Button>
            </Stack>
            <Typography py={2}>
              To support the launch of our new product line, We need a brand new
              website to sell 10 new shirt designs, highlight the designer, and
              showcase the charity these tshirts support
            </Typography>
            <Stack
              my={1}
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography variant="h6">Child Issues</Typography>
              <Stack direction={"row"} gap={1}>
                <IconButton
                  aria-label="Add"
                  sx={(theme) => ({
                    p: 1,
                    m: 0,
                    color: theme.palette.grey[900],
                    border: 2,
                    borderRadius: 2,
                    borderColor: theme.palette.grey[300],
                  })}
                >
                  <Add />
                </IconButton>
                <IconButton
                  aria-label="Add"
                  sx={(theme) => ({
                    p: 1,
                    m: 0,
                    color: theme.palette.grey[900],
                    border: 2,
                    borderRadius: 2,
                    borderColor: theme.palette.grey[300],
                  })}
                >
                  <MoreHoriz />
                </IconButton>
              </Stack>
            </Stack>
            <Box
              padding={2}
              sx={{
                border: "3px solid transparent",
                borderImage:
                  "linear-gradient(153deg,rgba(67, 183, 230, 1) 0%, rgba(132, 87, 199, 1) 50%, rgba(237, 221, 83, 1) 100%)",
                borderImageSlice: 1,
              }}
            >
              <Button disabled size="small" variant="contained">
                Suggested child issues
              </Button>
              <Divider sx={{ pb: 2 }} />
              {childIssueData.map((t: string, index: number) => (
                <React.Fragment key={index}>
                  <Stack
                    direction={{ xs: "column", md: "row" }}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Stack direction={"row"} gap={1} py={1}>
                      <IconButton>
                        <Done />
                      </IconButton>
                      <Typography variant="body1" py={1}>
                        {t}
                      </Typography>
                    </Stack>
                    <Stack direction={"row"} gap={2}>
                      <CustomMenuButtonComponent
                        title="To Do"
                        backgroundColorProps="#aeaeae"
                        colorProps="black"
                        fontWeightProps={800}
                      />
                      <Avatar variant="circular" />
                      <IconButton>
                        <Close />
                      </IconButton>
                    </Stack>
                  </Stack>
                  <Divider />
                </React.Fragment>
              ))}
              <Box
                sx={{
                  mt: 2,
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Ask All to refine suggestions."
                  inputProps={{
                    "aria-label": "Ask All to refine suggestions.",
                  }}
                />
                <Button disabled variant="text">
                  Discard
                </Button>
                <Button variant="contained">Accept All</Button>
              </Box>
              <Divider sx={{ pt: 2 }} />
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Button disabled variant="text" startIcon={<ErrorOutline />}>
                  Content quality may very
                </Button>
                <Button disabled variant="text" endIcon={<SettingsOverscan />}>
                  Powered by Admmision Intelligent
                </Button>
              </Stack>
            </Box>
            <Stack
              my={2}
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography variant="h6">Releted resources</Typography>
              <Stack direction={"row"} gap={1}>
                <IconButton
                  aria-label="Add"
                  sx={(theme) => ({
                    p: 1,
                    m: 0,
                    color: theme.palette.grey[900],
                    border: 2,
                    borderRadius: 2,
                    borderColor: theme.palette.grey[300],
                  })}
                >
                  <KeyboardArrowUp />
                </IconButton>
                <IconButton
                  aria-label="More"
                  sx={(theme) => ({
                    p: 1,
                    m: 0,
                    color: theme.palette.grey[900],
                    border: 2,
                    borderRadius: 2,
                    borderColor: theme.palette.grey[300],
                  })}
                >
                  <MoreHoriz />
                </IconButton>
              </Stack>
            </Stack>
            <Grid container spacing={2}>
              {subtaskData.map((data, index) => (
                <Grid size={{ xs: 12, md: 4 }} key={index}>
                  <Box border="2px solid grey" borderRadius={2} p={2}>
                    <Stack
                      direction={"row"}
                      gap={2}
                      alignItems="flex-start"
                      justifyContent="flext-start"
                    >
                      <Settings color="secondary" sx={{ pt: 0.5 }} />
                      <Stack>
                        <Typography variant="h6" component="h6">
                          {data.title}
                        </Typography>
                        <Typography variant="subtitle1">
                          {data.lastUpdate}
                        </Typography>
                        <Typography variant="subtitle1">
                          {data.linked}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <Box border="2px solid grey" borderRadius={2} p={2}>
              <Typography variant="h6" pb={2}>
                Details
              </Typography>
              <Grid container spacing={2}>
                <Grid size={{ xs: 6 }}>
                  <Typography variant="body1">Assignee</Typography>
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <Stack
                    direction="row"
                    gap={1}
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <Avatar variant="circular" />
                    <Typography variant="body1">Unassigned</Typography>
                  </Stack>
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <Typography variant="body1">Report</Typography>
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <Stack
                    direction="row"
                    gap={1}
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <Avatar
                      alt="Himanshu Pansuriya"
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                    <Typography variant="body1">Jash Tank</Typography>
                  </Stack>
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <Typography variant="body1">Priority</Typography>
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <Stack
                    direction="row"
                    gap={1}
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <IconButton>
                      <KeyboardArrowUp color="error" />
                    </IconButton>
                    <Typography variant="body1">High</Typography>
                  </Stack>
                </Grid>
              </Grid>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography>Show 8 more fields</Typography>
                <IconButton
                  aria-label="More"
                  sx={(theme) => ({
                    p: 1,
                    m: 0,
                    color: theme.palette.grey[900],
                    border: 2,
                    borderRadius: 2,
                    borderColor: theme.palette.grey[300],
                  })}
                >
                  <KeyboardArrowRight />
                </IconButton>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
