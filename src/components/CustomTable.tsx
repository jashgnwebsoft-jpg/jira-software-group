import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Avatar, Box, Pagination, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { issues } from "../data/tempDataNew";
import BugReportIcon from "@mui/icons-material/BugReport";
import TaskIcon from "@mui/icons-material/Task";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline"; // fallback
import { Campaign } from "@mui/icons-material";
import SyncIcon from "@mui/icons-material/Sync";

interface Column {
  id: "type" | "key" | "summary" | "assignee" | "reporter";
  label: string;
  minWidth?: number;
  width?: number | string;
  align?: "right" | "center" | "left";
  pl?: number;
  pr?: number;
}

const columns: readonly Column[] = [
  { id: "type", label: "Type", width: 30 },
  { id: "key", label: "Key", width: 30 },
  { id: "summary", label: "Summary", width: 350 },
  { id: "assignee", label: "Assignee", width: 70 },
  { id: "reporter", label: "Reporter", width: 100, align: "left" },
];

const hideScrollbar = {
  "&::-webkit-scrollbar": { display: "none" },
  msOverflowStyle: "none",
  scrollbarWidth: "none",
};

export default function CustomTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage] = React.useState(30);
  const [selectedRow, setSelectedRow] = React.useState("0");

  const handleSelectRow = (id: string) => {
    console.log(id);
    setSelectedRow(id);
    console.log(selectedRow);
  };

  const totalPages = Math.ceil(issues.length / rowsPerPage);

  return (
    <>
      <Box
        sx={{
          width: "99%",
          overflow: "hidden",
          margin: 2,
          borderBottom: "1px solid #d8d8d8ff",
          boxShadow: "inset -4px 0 6px -2px rgba(0,0,0,0.2)",
        }}
      >
        <TableContainer
          sx={{
            maxHeight: 660,
            //   maxWidth: 1500,
            overflowY: "auto",
            ...hideScrollbar,
          }}
        >
          <Table
            stickyHeader
            aria-label="sticky table"
            sx={{
              "& td": { borderBottom: "none" },
              "& th": { borderBottom: "2px solid #706f6fff" },
            }}
          >
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    sx={{
                      minWidth: column.minWidth,
                      width: column.width,
                      pl: column.pl,
                      pr: column.pr,
                      fontWeight: "bold",
                      fontSize: "17px",
                      color: grey[700],
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {issues
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow
                    hover
                    onClick={() => handleSelectRow(row.key)}
                    role="checkbox"
                    tabIndex={-1}
                    key={row.key}
                    sx={{
                      cursor: "pointer",
                      backgroundColor:
                        selectedRow === row.key ? "#a9c3e4ff" : "",
                      // "&.hover": {
                      //   bgcolor: "#ee004fff",
                      // },
                    }}
                  >
                    <TableCell>
                      <Box display="flex" alignItems="center" gap={1}>
                        {row.type === "Bug" ? (
                          <BugReportIcon fontSize="medium" color="error" />
                        ) : row.type === "Task" ? (
                          <TaskIcon fontSize="small" color="success" />
                        ) : (
                          <HelpOutlineIcon fontSize="small" color="disabled" />
                        )}
                      </Box>
                    </TableCell>

                    <TableCell sx={{ color: "#767677ff", fontWeight: 600 }}>
                      {row.key}
                    </TableCell>

                    <TableCell
                      sx={{
                        fontSize: "18px",
                        color: "#1e88e5",
                        fontWeight: 600,
                      }}
                    >
                      {row.summary}
                    </TableCell>

                    <TableCell
                      sx={{ fontWeight: 600, color: "#676a6bff", fontSize: 16 }}
                    >
                      {row.assignee && (
                        <Box display="flex" alignItems="center" gap={1}>
                          <Avatar
                            alt="Remy Sharp"
                            src={row.reporter.avatarUrl}
                            sx={{ width: 35, height: 35 }}
                          />
                          {row.assignee.name}
                        </Box>
                      )}
                    </TableCell>

                    <TableCell
                      sx={{ fontWeight: 600, color: "#545758ff", fontSize: 16 }}
                    >
                      <Box display="flex" alignItems="center" gap={1}>
                        <Avatar
                          alt="Remy Sharp"
                          src={row.reporter.avatarUrl}
                          sx={{ width: 35, height: 35 }}
                        />
                        {row.reporter.name}
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Stack
        spacing={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mt: 2 }}
      >
        <Stack direction="row" gap={1} alignItems="center">
          <Campaign />
          <Typography sx={{ fontWeight: 500, color: "gray" }}>
            Give Feedback
          </Typography>
        </Stack>
        <Stack direction="row" fontSize="small" gap={1} sx={{ color: "gray" }}>
          <Typography sx={{ fontWeight: 600, color: "gray" }}>
            Showing {page * rowsPerPage + 1}–
            {Math.min((page + 1) * rowsPerPage, issues.length)} of{" "}
            {issues.length}
          </Typography>
          <SyncIcon />
        </Stack>
        <Pagination
          count={totalPages}
          page={page + 1}
          shape="rounded"
          color="primary"
          onChange={(_, value) => setPage(value - 1)}
        />
      </Stack>
    </>
  );
}
