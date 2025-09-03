import { MoreHoriz } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import TabComponent from "../../components/TabComponent";

export default function GoalPageView() {
  return (
    <>
      <Box border="1px solid grey" borderRadius={2} p={4}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h4">Goals</Typography>
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
        <TabComponent />
      </Box>
    </>
  );
}
