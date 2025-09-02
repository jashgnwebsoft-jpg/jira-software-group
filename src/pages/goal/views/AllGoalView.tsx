import {
  ArrowDownward,
  GroupOutlined,
  MoreHoriz,
  PersonOutlineOutlined,
  Search,
  Tag,
  ViewWeekOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CollapsibleTableComponent from "../../../components/CollapsibleTableComponent";

export default function AllGoalView() {
  return (
    <>
      <Box>
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
          fullWidth
        />
        <Stack direction="row" gap={2} py={2}>
          <Button
            variant="outlined"
            startIcon={<Tag />}
            sx={{ borderColor: "#aeaeae", color: "#615f5fff" }}
          >
            Filter by topic
          </Button>
          <Button
            variant="outlined"
            startIcon={<Tag />}
            sx={{ borderColor: "#aeaeae", color: "#615f5fff" }}
          >
            Status
          </Button>
          <Button
            variant="outlined"
            startIcon={<PersonOutlineOutlined />}
            sx={{ borderColor: "#aeaeae", color: "#615f5fff" }}
          >
            Owner
          </Button>
          <Button
            variant="outlined"
            startIcon={<GroupOutlined />}
            sx={{ borderColor: "#aeaeae", color: "#615f5fff" }}
          >
            Team
          </Button>
          <IconButton
            aria-label="Add"
            sx={(theme) => ({
              p: 1,
              m: 0,
              color: theme.palette.grey[700],
              border: 2,
              borderRadius: 2,
              borderColor: theme.palette.grey[300],
            })}
          >
            <MoreHoriz />
          </IconButton>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h5">3,214 Goals</Typography>
          <Stack direction="row" gap={2}>
            <Button
              variant="outlined"
              endIcon={<ArrowDownward />}
              sx={{ borderColor: "#aeaeae", color: "#615f5fff" }}
            >
              Sort by follwers count
            </Button>
            <IconButton
              aria-label="Add"
              sx={(theme) => ({
                p: 1,
                m: 0,
                color: theme.palette.grey[700],
                border: 2,
                borderRadius: 2,
                borderColor: theme.palette.grey[300],
              })}
            >
              <ViewWeekOutlined />
            </IconButton>
          </Stack>
        </Stack>
        <Box py={2}>
          <CollapsibleTableComponent />
        </Box>
      </Box>
    </>
  );
}
