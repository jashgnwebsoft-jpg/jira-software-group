import {
  AutoStories,
  MoreHoriz,
  Search,
  Star,
  StarBorder,
} from "@mui/icons-material";
import {
  Button,
  Grid,
  InputBase,
  Paper,
  Stack,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TableCell,
  Table,
  TableBody,
  Avatar,
  Checkbox,
  IconButton,
} from "@mui/material";

import React from "react";
import styled from "@emotion/styled";
import { projects } from "../../data/TempData";

const StyledTableCell = styled(TableCell)(() => ({
  borderBottom: "none",
  padding: 1,
}));

export default function ProjectView() {
  const [starred, setStarred] = React.useState<Record<number, boolean>>({});

  const handleStarChange = (id: number) => {
    setStarred((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <Grid container direction="column" spacing={3} marginX={8} marginY={2}>
      <Grid>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h4" fontWeight="bold">
            Projects
          </Typography>
          <Button variant="contained">Create Project</Button>
        </Stack>
      </Grid>

      <Grid>
        <Paper
          sx={{
            width: 200,
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
          <InputBase sx={{ fontSize: 14 }} />
          <Search sx={{ color: "rgba(0,0,0,0.6)" }} />
        </Paper>
      </Grid>

      <Grid>
        <TableContainer>
          <Table sx={{ borderCollapse: "collapse", borderSpacing: "0px" }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ width: 10 }}>
                  <Star />
                </TableCell>
                <TableCell>
                  <Typography fontWeight="bold">Name</Typography>
                </TableCell>
                <TableCell>
                  <Typography fontWeight="bold">Code</Typography>
                </TableCell>
                <TableCell>
                  <Typography fontWeight="bold">Type</Typography>
                </TableCell>
                <TableCell>
                  <Typography fontWeight="bold">Lead</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.id} sx={{ lineHeight: 0 }}>
                  <TableCell
                    sx={{ borderBottom: "none", width: 50, padding: 1 }}
                  >
                    <Checkbox
                      icon={<StarBorder />}
                      checkedIcon={<Star sx={{ color: "black" }} />}
                      checked={!!starred[project.id]}
                      onChange={() => handleStarChange(project.id)}
                    />
                  </TableCell>
                  <StyledTableCell>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <AutoStories
                        sx={{
                          bgcolor: "#2a8ad9ff",
                          color: "#ffffff",
                          border: "2px #2a8ad9ff",
                          borderRadius: "4px",
                          padding: "2px",
                        }}
                      />
                      <Typography fontWeight="bold" color="primary">
                        {project.name}
                      </Typography>
                    </Stack>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography fontWeight="bold">{project.key}</Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography fontWeight="bold">{project.type}</Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Avatar src={project.lead.avatar} />
                      <Typography color="primary">
                        {project.lead.name}
                      </Typography>
                    </Stack>
                  </StyledTableCell>
                  <StyledTableCell>
                    <IconButton>
                      <MoreHoriz />
                    </IconButton>
                  </StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
