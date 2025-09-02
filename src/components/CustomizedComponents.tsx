import styled from "@emotion/styled";
import { Dialog, Paper } from "@mui/material";

const BootstrapDialog = styled(Dialog)(() => ({
  "& .MuiPaper-root": {
    width: "80%",
    maxWidth: "none",
    overflow: "auto",
  },
  "& .MuiPaper-root::-webkit-scrollbar": {
    display: "none",
  },
}));

const CustomPaper = styled(Paper)(() => ({
  width: "100%",
  maxWidth: "none",
  maxHeight: "none",
  height: "100vh",
}));

export { BootstrapDialog, CustomPaper };
