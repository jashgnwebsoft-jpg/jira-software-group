import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";

export default function SearchComponent() {
  return (
    <Box
      component="form"
      sx={{
        p: "2px 2px",
        display: "flex",
        alignItems: "center",
        width: 200,
        border: "1px solid grey",
        height: 30,
        borderRadius: 1,
        backgroundColor: grey[100],
      }}
    >
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          color: grey[900],
          "& .MuiInputBase-input": {
            fontWeight: 550,
          },
        }}
        placeholder="Search Issues"
        inputProps={{ "aria-label": "search issues" }}
      />
      <IconButton
        type="button"
        sx={{ p: "10px", color: grey[900] }}
        aria-label="search"
      >
        <SearchIcon sx={{ color: grey[700] }} />
      </IconButton>
    </Box>
  );
}
