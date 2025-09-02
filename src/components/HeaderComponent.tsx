import {
  Add,
  AppsRounded,
  Assignment,
  HelpOutline,
  Notifications,
  Search,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Icon,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export default function HeaderComponent() {
  return (
    <>
      <Box p={1}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ md: "center" }}
          gap={{ xs: 2, md: 0 }}
        >
          <Stack direction="row" gap={1} alignItems="center">
            <Icon>
              <AppsRounded />
            </Icon>
            <Icon color="primary">
              <Assignment />
            </Icon>
            <Typography variant="h4">Jira</Typography>
          </Stack>
          <Stack direction="row" gap={2} alignItems="center">
            <TextField
              id="input-with-icon-textfield"
              placeholder="Search Assistant"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                },
              }}
              variant="outlined"
            />
            <Button startIcon={<Add />} variant="contained">
              Create
            </Button>
          </Stack>
          <Stack direction="row" alignItems="center" gap={1}>
            <Icon>
              <HelpOutline />
            </Icon>
            <Icon>
              <Notifications />
            </Icon>
            <Avatar src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww" />
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
