import {
  KeyboardArrowDown,
  Flag,
  LocalCafe,
  TripOrigin,
} from "@mui/icons-material";
import {
  Button,
  MenuItem,
  Divider,
  alpha,
  Menu,
  styled,
  type MenuProps,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: "rgb(55, 65, 81)",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
        ...theme.applyStyles("dark", {
          color: "inherit",
        }),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
    ...theme.applyStyles("dark", {
      color: theme.palette.grey[300],
    }),
  },
}));

type Props = {
  title: string;
  backgroundColorProps?: string;
  colorProps?: string;
  fontWeightProps?: number | string;
  hoverEffect?: boolean;
};

export default function CustomMenuButtonComponent(props: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const {
    title,
    backgroundColorProps,
    colorProps,
    fontWeightProps,
    hoverEffect,
  } = props;

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // console.log(props);
  return (
    <>
      <Button
        id="custom-menu-button"
        aria-controls={open ? "custom-menu-button-id" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDown />}
        sx={{
          fontFamily: '"Charlie Text", sans-serif',
          fontWeight: fontWeightProps,
          bgcolor: backgroundColorProps,
          color: colorProps,
          "&:hover": {
            bgcolor: hoverEffect ? "rgb(173, 200, 255)" : "#0000000",
            color: hoverEffect ? "rgb(0, 42, 251)" : "#000000",
          },
        }}
      >
        {title}
      </Button>
      <StyledMenu
        id="custom-menu-button-id"
        slotProps={{
          list: {
            "aria-labelledby": "custom-menu-button",
          },
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={handleClose}
          disableRipple
          disabled
          sx={{
            opacity: 1,
            cursor: "default",
            py: 1,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Charlie Text",
              fontSize: "14px",
              fontWeight: "bold",
              "&": {
                color: "#000 !important",
              },
              textTransform: "uppercase",
            }}
          >
            Recent
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Flag
              sx={{
                color: "error.main",
                bgcolor: "#ffab00",
                width: "28px",
                height: "28px",
              }}
            />
            <Stack direction="column">
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                Mario's World (MW)
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Software Projects
              </Typography>
            </Stack>
          </Stack>
        </MenuItem>

        <MenuItem onClick={handleClose} disableRipple>
          <Stack direction="row" alignItems="center" spacing={2}>
            <TripOrigin
              sx={{
                fontSize: 24,
                color: "#ff6d00",
                bgcolor: "#00b0ff",
                width: "28px",
                height: "28px",
              }}
            />
            <Stack direction="column">
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                Onboarding (ON)
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Software Projects
              </Typography>
            </Stack>
          </Stack>
        </MenuItem>

        <MenuItem onClick={handleClose} disableRipple>
          <Stack direction="row" alignItems="center" spacing={2}>
            <LocalCafe
              sx={{
                fontSize: 24,
                color: "#ff9800",
                bgcolor: "#0091ea",
                width: "28px",
                height: "28px",
              }}
            />
            <Stack direction="column">
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                Space Cafe (SC)
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Software Projects
              </Typography>
            </Stack>
          </Stack>
        </MenuItem>

        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <Typography>View All Project</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <Typography>Create Project</Typography>
        </MenuItem>
      </StyledMenu>
    </>
  );
}
