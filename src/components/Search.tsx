import * as React from "react";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";

export default function Search() {
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
      {/* <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton> */}
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
      {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}
      {/* <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <DirectionsIcon />
      </IconButton> */}
    </Box>
  );
}
