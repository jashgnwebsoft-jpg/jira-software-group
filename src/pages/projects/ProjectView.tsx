import { AutoStories, MoreHoriz, Star, StarBorder } from "@mui/icons-material";
import {
  Button,
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
  Box,
} from "@mui/material";

import React from "react";
import styled from "@emotion/styled";
import CustomizedSearchComponent from "../../components/TextField/CustomizedSearchComponent";
import { useProjects } from "../../services/queries";
import type { Project } from "../../types/Project";

const StyledTableCell = styled(TableCell)(() => ({
  borderBottom: "none",
}));

export default function ProjectView() {
  const [starred, setStarred] = React.useState<Record<number, boolean>>({});

  const handleStarChange = (id: number) => {
    setStarred((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const {data,isLoading,error} = useProjects();

  return (
    <Box border="1px solid grey" borderRadius={2} p={4}>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h4" fontWeight="bold">
          Projects
        </Typography>
        <Button variant="contained">Create Project</Button>
      </Stack>
      <CustomizedSearchComponent
        iconSide="start"
        border="1px solid rgba(0,0,0,0.15)"
        borderRadius="6px"
        placeholder="search"
        width="300px"
      />
      <TableContainer>
        <Table sx={{ borderCollapse: "collapse" }}>
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
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading && <Typography variant="h1">waiting for data...</Typography>}
            {error && <Typography variant="h1">Error...!</Typography>}
            {data && data.map((project:Project) => (
              <TableRow key={project.id} sx={{ lineHeight: 0 }}>
                <TableCell sx={{ borderBottom: "none", width: 50, padding: 1 }}>
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
                    <Typography color="primary">{project.lead.name}</Typography>
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
    </Box>
  );
}
