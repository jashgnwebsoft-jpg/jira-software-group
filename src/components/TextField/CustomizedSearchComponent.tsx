import { Search } from "@mui/icons-material";
import { InputBase, Paper } from "@mui/material";
export type Props = {
  iconSide: "start" | "end";
  placeholder?: string;
  border?: string;
  borderRadius: string;
  bgColor?: string;
  width?: string;
};

export default function CustomizedSearchComponent(props: Props) {
  const { iconSide, bgColor, border, borderRadius, placeholder, width } = props;
  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        px: 1,
        py: 0.3,
        border: border,
        borderRadius: borderRadius,
        bgcolor: bgColor,
        width: width,
      }}
      elevation={0}
    >
      {iconSide === "start" ? (
        <Search sx={{ color: "rgba(0,0,0,0.6)" }} />
      ) : (
        <></>
      )}
      <InputBase placeholder={placeholder} sx={{ ml: 1, fontSize: 14 }} />
      {iconSide === "end" ? (
        <Search sx={{ color: "rgba(0,0,0,0.6)" }} />
      ) : (
        <></>
      )}
    </Paper>
  );
}
