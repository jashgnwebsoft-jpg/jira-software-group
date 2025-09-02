import { Button, Grow, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router";

export default function NotFoundPage() {
  return (
    <>
      <Grow in timeout={1000} unmountOnExit>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          height="100vh"
          gap={3}
        >
          <Typography component="h1" variant="h1">
            404 Page Not Found
          </Typography>
          <NavLink to="/jira/subtaskview">
            <Button variant="contained">Go to Page</Button>
          </NavLink>
        </Stack>
      </Grow>
    </>
  );
}
