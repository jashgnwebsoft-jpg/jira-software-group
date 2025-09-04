import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableVirtuoso, type TableComponents } from "react-virtuoso";
import { Avatar, Stack, Typography } from "@mui/material";
import { BugReport, TaskOutlined } from "@mui/icons-material";
import type { IssueRow, User } from "../../types/IssueType";
import { issues } from "../../data/TempData";

interface ColumnData {
  dataKey: keyof IssueRow;
  label: string;
  numeric?: boolean;
  width?: number;
}

const columns: ColumnData[] = [
  {
    width: 50,
    label: "Type",
    dataKey: "type",
  },
  {
    width: 50,
    label: "Key",
    dataKey: "key",
  },
  {
    width: 150,
    label: "Summary",
    dataKey: "summary",
  },
  {
    width: 110,
    label: "Assignee",
    dataKey: "assignee",
  },
  {
    width: 110,
    label: "Reporter",
    dataKey: "reporter",
  },
];

const rows: IssueRow[] = Array.from(
  { length: 30 },
  (_, index) => issues[index]
);

const VirtuosoTableComponents: TableComponents<IssueRow> = {
  Scroller: React.forwardRef<HTMLDivElement>((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table
      {...props}
      sx={{ borderCollapse: "separate", tableLayout: "fixed" }}
    />
  ),
  TableHead: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableHead {...props} ref={ref} />
  )),
  TableRow,
  TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

function RenderAssigner({ avatarUrl, name, id }: User) {
  return (
    <Stack direction={"row"} alignItems={"center"} gap={1} key={id}>
      <Avatar src={avatarUrl} alt={name} />
      <Typography>{name}</Typography>
    </Stack>
  );
}

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric || false ? "right" : "left"}
          style={{ width: column.width }}
          sx={{
            backgroundColor: "background.paper",
            borderBottom: " 2px",
            borderTop: "0px",
            borderLeft: "0px",
            borderRight: "0px",
            borderColor: "black",
            borderStyle: "solid",
          }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index: number, row: IssueRow) {
  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric || false ? "right" : "left"}
        >
          {column.label === "Type" ? (
            row[column.dataKey] === "Bug" ? (
              <BugReport color="error" />
            ) : (
              <TaskOutlined color="success" />
            )
          ) : column.dataKey === "summary" ? (
            <Typography fontSize={18} fontWeight="bold" color="primary">
              {row[column.dataKey]}
            </Typography>
          ) : column.dataKey === "reporter" || column.dataKey === "assignee" ? (
            RenderAssigner(row[column.dataKey])
          ) : (
            row[column.dataKey]
          )}
        </TableCell>
      ))}
    </React.Fragment>
  );
}

export default function ReactVirtualizedTable() {
  return (
    <Paper style={{ height: 630, width: "100%" }}>
      <TableVirtuoso
        data={rows}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}
