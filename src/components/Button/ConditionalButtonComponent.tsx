import { Button } from "@mui/material";
export type Props = {
  buttonName?: string;
  border?: string;
  borderRadius?: string;
  bgColor?: string;
  size?: "small" | "medium" | "large";
  isSelected: boolean;
  onBtnClick: () => void;
  defaultColor?: string;
  selectedColor?: string;
  defaultBgColor?: string;
  selectedBgColor?: string;
  iconSide?: "start" | "end";
  icon?: React.ReactNode;
  variant?: "outlined" | "contained" | "text";
};

export default function ConditionalButtonComponent(props: Props) {
  const {
    buttonName,
    size,
    isSelected,
    onBtnClick,
    defaultBgColor = "rgba(102, 105, 102, 0.33)",
    defaultColor = "black",
    selectedBgColor = "rgba(149, 196, 207, 0.33)",
    selectedColor = "primary",
    variant = "outlined",
    icon,
    iconSide,
  } = props;
  return (
    <Button
      variant={variant}
      size={size}
      sx={{
        backgroundColor: isSelected ? selectedBgColor : defaultBgColor,
        color: isSelected ? selectedColor : defaultColor,
        border: isSelected ? "1" : "none",
      }}
      onClick={onBtnClick}
    >
      {iconSide === "start" ? icon : <></>}
      {buttonName}
      {iconSide === "end" ? icon : <></>}
    </Button>
  );
}
