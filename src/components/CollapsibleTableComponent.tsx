import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  DateRangeOutlined,
  KeyboardArrowRight,
  ModeStandbyOutlined,
  MoreHoriz,
} from "@mui/icons-material";
import type { Goal } from "../types/GoalType";
import { goals } from "../data/TempData";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Collapse,
  LinearProgress,
  linearProgressClasses,
  Stack,
  styled,
  Typography,
} from "@mui/material";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
    ...theme.applyStyles("dark", {
      backgroundColor: "#308fe8",
    }),
  },
}));

function Row(props: { row: Goal }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRight />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" sx={{ px: 0 }}>
          <Stack direction="row" gap={1}>
            {row.status === "ON TRACK" ? (
              <ModeStandbyOutlined color="success" />
            ) : (
              ""
            )}
            {row.status === "AT RISK" ? (
              <ModeStandbyOutlined color="warning" />
            ) : (
              ""
            )}
            {row.status === "OFF TRACK" ? (
              <ModeStandbyOutlined color="error" />
            ) : (
              ""
            )}
            <Typography>{row.goal}</Typography>
          </Stack>
        </TableCell>
        <TableCell align="left">
          {row.status === "ON TRACK" ? (
            <Chip
              sx={{ borderRadius: 1 }}
              size="small"
              label="ON TRACK"
              color="success"
            />
          ) : (
            ""
          )}
          {row.status === "AT RISK" ? (
            <Chip
              sx={{ borderRadius: 1 }}
              size="small"
              label={row.score + " AT RISK"}
              color="warning"
            />
          ) : (
            ""
          )}
          {row.status === "OFF TRACK" ? (
            <Chip
              sx={{ borderRadius: 1 }}
              size="small"
              label="OFF TRACK"
              color="error"
            />
          ) : (
            ""
          )}
        </TableCell>
        <TableCell align="left">
          <BorderLinearProgress
            value={Number(row.progress)}
            variant="determinate"
          />
        </TableCell>
        <TableCell align="left">
          <Button
            startIcon={<DateRangeOutlined />}
            variant="outlined"
            size="small"
            sx={{ borderColor: "#aeaeae", color: "#615f5fff" }}
          >
            {row.targetDate}
          </Button>
        </TableCell>
        <TableCell align="left">
          <Avatar src="/src/assets/7309681.jpg" />
        </TableCell>
        <TableCell align="left">{row.lastUpdate}</TableCell>
        <TableCell>
          <Button
            sx={{ borderColor: "#aeaeae", color: "#615f5fff" }}
            variant="outlined"
          >
            Follow
          </Button>
        </TableCell>
        <TableCell>
          <IconButton>
            <MoreHoriz />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="left">Amount</TableCell>
                    <TableCell align="left">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Demo</TableCell>
                    <TableCell>Demo</TableCell>
                    <TableCell>Demo</TableCell>
                    <TableCell>Demo</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTableComponent() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "grey.200" }}>
            <TableCell>Goal</TableCell>
            <TableCell />
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Progress</TableCell>
            <TableCell align="left">Target Date</TableCell>
            <TableCell align="left">Owner</TableCell>
            <TableCell align="left">Last update</TableCell>
            <TableCell />
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {goals.map((row, index) => (
            <Row key={index} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
