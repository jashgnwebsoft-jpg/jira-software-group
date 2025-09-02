import { Celebration, Remove, Search, WavingHand } from "@mui/icons-material";
import { Avatar, Box, Chip, InputBase, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

export default function CommentBox() {
  return (
    <Stack direction={"row"} gap={1} justifyContent={"flex-start"}>
      <Avatar
        alt="Travis Howard"
        src="https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png"
        sx={{ width: 40, height: 40, marginX: "auto" }} 
      />
      <Box width={"90%"}>
        <Box border={2} borderRadius={1} borderColor={grey[400]} p={1}>
          <Stack>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Add a comment..."
              inputProps={{
                "aria-label": "Add a comment...",
              }}
            />
            <Stack
              direction={"row"}
              gap={1}
              p={1}
              overflow={"scroll"}
              sx={{
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": { display: "none" },
                msOverflowStyle: "none",
              }}
            >
              <Chip icon={<Celebration />} label="looks good" />
              <Chip icon={<WavingHand color="warning" />} label="Need Help?" />
              <Chip
                icon={<Remove color="error" />}
                label="This is blocked...."
              />
              <Chip icon={<Search />} label="Can you clarify...?" />
              <Chip icon={<Celebration />} label="looks good" />
              <Chip icon={<WavingHand color="warning" />} label="Need Help?" />
              <Chip
                icon={<Remove color="error" />}
                label="This is blocked...."
              />
              <Chip icon={<Search />} label="Can you clarify...?" />
            </Stack>
          </Stack>
        </Box>
        <Stack direction={"row"} alignItems={"center"}>
          <Typography variant="subtitle1" fontWeight={"bold"} component="h2">
            Pro tip:
          </Typography>
          <Typography>
            press <Chip label="M" style={{ borderRadius: 2 }} size="small" /> to
            comment
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
}
