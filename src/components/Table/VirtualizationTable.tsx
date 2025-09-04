import * as React from "react";
import {
  Avatar,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { BugReport, TaskOutlined } from "@mui/icons-material";
import { TableVirtuoso, type TableComponents } from "react-virtuoso";
import type { IssueRow, User } from "../../types/IssueType";
import { useIssues } from "../../services/queries";

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
    <Stack direction="row" alignItems="center" gap={1} key={id}>
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
          align={column.numeric ? "right" : "left"}
          style={{ width: column.width }}
          sx={{
            backgroundColor: "background.paper",
            borderBottom: "2px solid black",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
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
    <React.Fragment key={row.key}>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric ? "right" : "left"}
        >
          {column.dataKey === "type" ? (
            row.type === "Bug" ? (
              <BugReport color="error" />
            ) : (
              <TaskOutlined color="success" />
            )
          ) : column.dataKey === "summary" ? (
            <Typography fontSize={18} fontWeight="bold" color="primary" noWrap>
              {row.summary}
            </Typography>
          ) : column.dataKey === "assignee" || column.dataKey === "reporter" ? (
            <RenderAssigner {...(row[column.dataKey] as User)} />
          ) : (
            row[column.dataKey]
          )}
        </TableCell>
      ))}
    </React.Fragment>
  );
}

export default function ReactVirtualizedTable() {
  const { data, isLoading, error } = useIssues();

  const rows: IssueRow[] = data ?? [];

  return (
    <Paper style={{ height: 630, width: "100%" }}>
      {isLoading && (
        <Typography variant="body1" sx={{ p: 2 }}>
          Data coming soon...
        </Typography>
      )}
      {error && (
        <Typography variant="body1" color="error" sx={{ p: 2 }}>
          An error occurred while loading data.
        </Typography>
      )}
      {!isLoading && !error && data && (
        <TableVirtuoso
          data={rows}
          components={VirtuosoTableComponents}
          fixedHeaderContent={fixedHeaderContent}
          itemContent={rowContent}
        />
      )}
    </Paper>
  );
}
