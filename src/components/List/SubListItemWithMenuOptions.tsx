import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { alpha, ListItemIcon, ListItemText, Stack } from "@mui/material";
import type { MainListMenuItem } from "../../types/SubListMenuType";

export default function SubListItemWithMenuOptions(menuList: MainListMenuItem) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [selected, setSelected] = useState(0);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSelectItems = (index: number) => {
    setSelected(index);
  };
  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreHorizIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              maxHeight: "auto",
            },
          },
          list: {
            "aria-labelledby": "long-button",
          },
        }}
      >
        {menuList &&
          menuList?.listItems?.map((item, index) => {
            return (
              <Stack key={index} direction="row">
                <MenuItem
                  key={item.text}
                  selected={item.isSelected}
                  onClick={() => {
                    item.onClickFunction();
                    handleSelectItems(index);
                  }}
                  sx={{
                    pb: 1,
                    borderRadius: 3,
                    borderColor: "blue",
                    borderLeft: index == selected ? "3px solid blue" : "",
                    backgroundColor: alpha(
                      index == selected ? "#72cff8" : "#ffffffff",
                      0.2
                    ),
                  }}
                >
                  <ListItemIcon>{item.iconData}</ListItemIcon>
                  <ListItemText sx={{ px: 1 }}>{item.text}</ListItemText>
                </MenuItem>

                {item.isSubList && (
                  <SubListItemWithMenuOptions
                    listItems={item.subListItems?.listItems}
                  />
                )}
              </Stack>
            );
          })}
      </Menu>
    </div>
  );
}
