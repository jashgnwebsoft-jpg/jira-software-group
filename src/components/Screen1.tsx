import * as React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { BootstrapDialog } from "./CustomizedComponents";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  Divider,
  Grid,
  Stack,
  InputBase,
} from "@mui/material";
import {
  AccountTreeOutlined,
  Add,
  Casino,
  Commit,
  Edit,
  ExpandMore,
  MoreHoriz,
  Settings,
  Share,
  SortOutlined,
  ThumbUpAltOutlined,
  VisibilityOutlined,
  Warning,
} from "@mui/icons-material";
import CustomizedMenus from "./CustomizedMenus";
import CommentBox from "../components/CommentBox";
import DynamicPage from "../components/Dynamic";

type Props = {
  open: boolean;
  handleClose: () => void;
};
export default function Screen1(prop: Props) {
  const { handleClose, open } = prop;
  const [asset, setAsset] = React.useState<string>("");
  const [mouse, setMouse] = React.useState<string>("");
  const [selectedBtn, setSelectedBtn] = React.useState<string>("comments");

  console.log("selected BTN", selectedBtn);

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{ padding: 2, scrollbarWidth: "none", msOverflowStyle: "none" }}
        style={{ height: "95vh" }}
      >
        <DialogTitle
          sx={{ m: 0, p: 4 }}
          id="customized-dialog-title"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Breadcrumbs>
            <Stack direction="row" gap={1}>
              <Edit fontSize="small" />
              <Typography>Add Parent</Typography>
            </Stack>
            <Stack direction="row" gap={1}>
              <Casino fontSize="small" sx={{ color: "red" }} />
              <Typography>NB-8</Typography>
            </Stack>
          </Breadcrumbs>
          <Stack direction="row" gap={2}>
            <Stack direction="row">
              <VisibilityOutlined color="primary" />{" "}
              <Typography fontSize="medium" color="primary">
                1
              </Typography>
            </Stack>
            <IconButton
              aria-label="like"
              sx={(theme) => ({
                p: 0,
                m: 0,
                color: theme.palette.grey[900],
              })}
            >
              <ThumbUpAltOutlined />
            </IconButton>
            <IconButton
              aria-label="share"
              sx={(theme) => ({
                p: 0,
                m: 0,
                color: theme.palette.grey[900],
              })}
            >
              <Share />
            </IconButton>
            <IconButton
              aria-label="more"
              sx={(theme) => ({
                p: 0,
                m: 0,
                color: theme.palette.grey[900],
              })}
            >
              <MoreHoriz />
            </IconButton>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={(theme) => ({
                p: 0,
                m: 0,
                color: theme.palette.grey[900],
              })}
            >
              <CloseIcon />
            </IconButton>
          </Stack>
        </DialogTitle>

        <DialogContent
          sx={{ p: 2 }}
          style={{ scrollbarWidth: "none", height: "95vh" }}
        >
          <Grid container>
            <Grid size={{ md: 8, xs: 12 }}>
              <Typography
                variant="h4"
                component="h2"
                mb={3}
                fontWeight={"bold"}
              >
                Incredible Soft Chicken
              </Typography>
              <Stack direction="row" gap={1} mb={3}>
                <IconButton
                  sx={{
                    p: 1,
                    m: 0,
                    color: "grey.900",
                    borderRadius: 2,
                    background: "#c7cdd0b9",
                  }}
                >
                  <Add />
                </IconButton>
                <IconButton
                  sx={{
                    p: 1,
                    m: 0,
                    color: "grey.900",
                    borderRadius: 2,
                    background: "#c7cdd0b9",
                  }}
                >
                  <Settings />
                </IconButton>
              </Stack>
              <Typography variant="h6" component="h2" fontWeight="bold">
                Description
              </Typography>
              <Typography variant="subtitle1" component="h2" mb={2}>
                Cross-platform intermediate standardization
              </Typography>
              <Typography variant="h6" component="h2" fontWeight="bold">
                Environment
              </Typography>
              <InputBase
                sx={{ ml: 1, flex: 1, mb: 2, width: 600 }}
                placeholder="None"
                inputProps={{
                  "aria-label": "Environment",
                }}
              />
              <Typography variant="h6" component="h2" fontWeight="bold">
                Paragraph Field
              </Typography>
              <InputBase
                sx={{ ml: 1, flex: 1, mb: 10, width: 600 }}
                placeholder="None"
                inputProps={{
                  "aria-label": "Paragraph Field",
                }}
              />
              <Typography variant="h6" component="h2" fontWeight="bold">
                Activity
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                mb={3}
              >
                <Stack
                  direction={{ xs: "column", md: "row" }}
                  flex={"word-wrap"}
                  alignItems="center"
                  gap={1}
                >
                  <Typography variant="subtitle1" component="h2">
                    Show:
                  </Typography>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      backgroundColor:
                        selectedBtn === "all"
                          ? "rgba(149, 196, 207, 0.33)"
                          : "rgba(102, 105, 102, 0.33)",
                      color: selectedBtn === "all" ? "primary" : "black",
                      border: selectedBtn === "all" ? "1" : "none",
                    }}
                    onClick={() => {
                      setSelectedBtn("all");
                    }}
                  >
                    All
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      backgroundColor:
                        selectedBtn === "comments"
                          ? "rgba(149, 196, 207, 0.33)"
                          : "rgba(102, 105, 102, 0.33)",
                      color: selectedBtn === "comments" ? "primary" : "black",
                      border: selectedBtn === "comments" ? "1" : "none",
                    }}
                    onClick={() => {
                      setSelectedBtn("comments");
                    }}
                  >
                    Comments
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      backgroundColor:
                        selectedBtn === "history"
                          ? "rgba(149, 196, 207, 0.33)"
                          : "rgba(102, 105, 102, 0.33)",
                      color: selectedBtn === "history" ? "primary" : "black",
                      border: selectedBtn === "history" ? "1" : "none",
                    }}
                    onClick={() => {
                      setSelectedBtn("history");
                    }}
                  >
                    History
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      backgroundColor:
                        selectedBtn === "worklog"
                          ? "rgba(149, 196, 207, 0.33)"
                          : "rgba(102, 105, 102, 0.33)",
                      color: selectedBtn === "worklog" ? "primary" : "black",
                      border: selectedBtn === "worklog" ? "1" : "none",
                    }}
                    onClick={() => {
                      setSelectedBtn("worklog");
                    }}
                  >
                    Work Log
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      backgroundColor:
                        selectedBtn === "transitions"
                          ? "rgba(149, 196, 207, 0.33)"
                          : "rgba(102, 105, 102, 0.33)",
                      color:
                        selectedBtn === "transitions" ? "primary" : "black",
                      border: selectedBtn === "transitions" ? "1" : "none",
                    }}
                    onClick={() => {
                      setSelectedBtn("transitions");
                    }}
                  >
                    Transitions
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      backgroundColor:
                        selectedBtn === "checklisthistory"
                          ? "rgba(149, 196, 207, 0.33)"
                          : "rgba(102, 105, 102, 0.33)",
                      color:
                        selectedBtn === "checklisthistory"
                          ? "primary"
                          : "black",
                      border: selectedBtn === "checklisthistory" ? "1" : "none",
                    }}
                    onClick={() => {
                      setSelectedBtn("checklisthistory");
                    }}
                  >
                    Checklist history
                  </Button>
                </Stack>
                <Stack direction="row" alignItems="center" gap={1}>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      backgroundColor: "none",
                      color: "black",
                      border: "none",
                    }}
                    onClick={() => {
                      setSelectedBtn("newestfirst");
                    }}
                  >
                    <Typography variant="subtitle1" component="h2">
                      Newest first
                    </Typography>
                    <SortOutlined />
                  </Button>
                </Stack>
              </Stack>
              {selectedBtn === "all" && <DynamicPage name="All"/>}
              {selectedBtn === "comments" && <CommentBox />}
              {selectedBtn === "history" && <DynamicPage name="History"/>}
              {selectedBtn === "worklog" && <DynamicPage name="Work Log"/>}
              {selectedBtn === "transitions" && <DynamicPage name="Transitions"/>}
              {selectedBtn === "checklisthistory" && <DynamicPage name="Check List History"/>}
              {selectedBtn === "newestfirst" && <DynamicPage name="Check List Newest First"/>}
            </Grid>
            <Grid size={{ md: 4, xs: 12 }} p={2}>
              <Stack direction={"row"} gap={1} mb={2}>
                <CustomizedMenus name="To Do" />
                <CustomizedMenus name="Actions" />
              </Stack>
              <Accordion style={{ width: "100%" }}>
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                  sx={{ border: 2, borderColor: "grey.300" }}
                >
                  <Typography component="span">Details</Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ p: 0, border: 2, borderColor: "grey.300" }}
                >
                  <Box p={2}>
                    <Grid container spacing={2}>
                      <Grid size={{ xs: 4 }}>
                        <Typography variant="body1">Assignee</Typography>
                      </Grid>
                      <Grid size={{ xs: 8 }}>
                        <Stack
                          direction="row"
                          gap={1}
                          justifyContent="flex-start"
                          alignItems="center"
                        >
                          <Avatar variant="circular" />
                          <Typography variant="body1">Unassigned</Typography>
                        </Stack>
                        <Button>
                          <Typography
                            variant="body1"
                            color="primary"
                            fontWeight={"bold"}
                          >
                            Assign to me
                          </Typography>
                        </Button>
                      </Grid>
                      <Grid size={{ xs: 4 }}>
                        <Typography variant="body1">Reporter</Typography>
                      </Grid>
                      <Grid size={{ xs: 8 }}>
                        <Stack
                          direction="row"
                          gap={1}
                          justifyContent="flex-start"
                          alignItems="center"
                        >
                          <Avatar
                            alt="Darryl Lee"
                            src="https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png"
                          />
                          <Typography variant="body1">Darryl Lee</Typography>
                        </Stack>
                      </Grid>
                      <Grid size={{ xs: 4 }}>
                        <Typography variant="body1">Development</Typography>
                      </Grid>
                      <Grid size={{ xs: 8 }}>
                        <Accordion
                          style={{ width: "100%" }}
                          sx={{ p: 0, border: "none" }}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMore color="primary" />}
                          >
                            <Stack direction="row" alignItems={"center"}>
                              <IconButton>
                                <Settings color="primary" />
                              </IconButton>
                              <Typography
                                variant="body1"
                                color="primary"
                                fontWeight={"bold"}
                              >
                                Set up code tools
                              </Typography>
                            </Stack>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Stack
                              direction="column"
                              gap={1}
                              alignItems={"start"}
                            >
                              <Button
                                size="small"
                                sx={{
                                  backgroundColor: "#f7d5aeff",
                                  padding: 0.5,
                                  color: "#ec9c07ff",
                                  fontWeight: "bold",
                                }}
                              >
                                pending
                              </Button>
                              <Divider
                                orientation="horizontal"
                                sx={{
                                  width: "98%",
                                  border: 2,
                                  borderColor: "grey.300",
                                }}
                                flexItem
                              />
                              <Stack direction="row" alignItems={"center"}>
                                <IconButton>
                                  <AccountTreeOutlined color="primary" />
                                </IconButton>
                                <Typography
                                  variant="body1"
                                  color="primary"
                                  fontWeight={"bold"}
                                >
                                  Create Branch
                                </Typography>
                              </Stack>
                              <Stack direction="row" alignItems={"center"}>
                                <IconButton>
                                  <Commit color="primary" />
                                </IconButton>
                                <Typography
                                  variant="body1"
                                  color="primary"
                                  fontWeight={"bold"}
                                >
                                  Create Commit
                                </Typography>
                                <IconButton>
                                  <ExpandMore color="primary" />
                                </IconButton>
                              </Stack>
                            </Stack>
                          </AccordionDetails>
                        </Accordion>
                      </Grid>
                      <Typography variant="body1" fontWeight={"bold"}>
                        Releases
                      </Typography>
                      <Grid size={{ xs: 12 }}>
                        <Accordion
                          style={{ width: "100%" }}
                          sx={{ p: 0, border: "none" }}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMore color="primary" />}
                          >
                            <Stack direction="row" alignItems={"center"}>
                              <IconButton>
                                <Settings color="primary" />
                              </IconButton>
                              <Typography
                                variant="body1"
                                color="primary"
                                fontWeight={"bold"}
                              >
                                Set up Deployement tools
                              </Typography>
                            </Stack>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Button
                              size="small"
                              sx={{
                                backgroundColor: "#f7d5aeff",
                                padding: 0.5,
                                color: "#ec9c07ff",
                                fontWeight: "bold",
                              }}
                            >
                              pending
                            </Button>
                            <Grid container>
                              <Grid size={{ xs: 4 }} mb={2}>
                                <Typography variant="body1">Labels</Typography>
                              </Grid>
                              <Grid size={{ xs: 8 }}>
                                <Stack
                                  direction="row"
                                  gap={1}
                                  justifyContent="flex-start"
                                  alignItems="center"
                                >
                                  <Button
                                    size="small"
                                    sx={{
                                      backgroundColor: "grey.200",
                                      padding: 0.5,
                                      color: "primary",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    blitz_test
                                  </Button>
                                  <Button
                                    size="small"
                                    sx={{
                                      backgroundColor: "grey.200",
                                      padding: 0.5,
                                      color: "primary",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    bugfix
                                  </Button>
                                </Stack>
                              </Grid>
                              <Grid size={{ xs: 4 }} mb={2}>
                                <Typography variant="body1">Lusers</Typography>
                              </Grid>
                              <Grid size={{ xs: 8 }}>
                                <InputBase
                                  sx={{ ml: 1, flex: 1 }}
                                  placeholder="None"
                                  inputProps={{
                                    "aria-label": "Lusers",
                                  }}
                                  onChange={(e) => {
                                    setAsset(e.target.value);
                                  }}
                                />
                              </Grid>
                              <Grid size={{ xs: 4 }} mb={2}>
                                <Typography variant="body1">
                                  My Asset
                                </Typography>
                              </Grid>
                              <Grid size={{ xs: 8 }}>
                                <Stack
                                  direction={"row"}
                                  justifyContent={"flex-end"}
                                >
                                  {" "}
                                  <InputBase
                                    sx={{ ml: 1, flex: 1 }}
                                    placeholder=""
                                    inputProps={{
                                      "aria-label": "Asset",
                                    }}
                                    onChange={(e) => {
                                      setAsset(e.target.value);
                                    }}
                                  />
                                  {Number(asset?.length) == 0 ? (
                                    <Warning color="error" />
                                  ) : (
                                    <></>
                                  )}
                                </Stack>
                              </Grid>
                              <Grid size={{ xs: 4 }} mb={2}>
                                <Typography variant="body1">
                                  My Mouse
                                </Typography>
                              </Grid>
                              <Grid size={{ xs: 8 }}>
                                <Stack
                                  direction={"row"}
                                  justifyContent={"flex-end"}
                                >
                                  {" "}
                                  <InputBase
                                    sx={{ ml: 1, flex: 1 }}
                                    placeholder=""
                                    inputProps={{
                                      "aria-label": "My Mouse",
                                    }}
                                    onChange={(e) => {
                                      setMouse(e.target.value);
                                    }}
                                  />
                                  {Number(mouse?.length) == 0 ? (
                                    <Warning color="error" />
                                  ) : (
                                    <></>
                                  )}
                                </Stack>
                              </Grid>
                              <Grid size={{ xs: 4 }} mb={2}>
                                <Typography variant="body1">
                                  Checkboxes
                                </Typography>
                              </Grid>
                              <Grid size={{ xs: 8 }}>
                                <InputBase
                                  sx={{ ml: 1, flex: 1 }}
                                  placeholder="None"
                                  inputProps={{
                                    "aria-label": "Checkboxes",
                                  }}
                                  onChange={(e) => {
                                    setAsset(e.target.value);
                                  }}
                                />
                              </Grid>
                              <Grid size={{ xs: 4 }} mb={2}>
                                <Typography variant="body1">
                                  Not Checked
                                </Typography>
                              </Grid>
                              <Grid size={{ xs: 8 }}>
                                <InputBase
                                  sx={{ ml: 1, flex: 1 }}
                                  placeholder="None"
                                  inputProps={{
                                    "aria-label": "Not Checked",
                                  }}
                                  onChange={(e) => {
                                    setAsset(e.target.value);
                                  }}
                                />
                              </Grid>
                              <Grid size={{ xs: 4 }} mb={2}>
                                <Typography variant="body1">
                                  Select Multiple Choices
                                </Typography>
                              </Grid>
                              <Grid size={{ xs: 8 }}>
                                <InputBase
                                  sx={{ ml: 1, flex: 1 }}
                                  placeholder="None"
                                  inputProps={{
                                    "aria-label": "Select Multiple Choices",
                                  }}
                                  onChange={(e) => {
                                    setAsset(e.target.value);
                                  }}
                                />
                              </Grid>
                            </Grid>
                          </AccordionDetails>
                        </Accordion>
                      </Grid>
                    </Grid>
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
