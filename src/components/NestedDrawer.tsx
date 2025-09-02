import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Button from '@mui/material/Button';

export default function NestedDrawerExample() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openNestedList, setOpenNestedList] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const handleNestedListClick = () => {
    setOpenNestedList(!openNestedList);
  };

  return (
    <div>
      <Button onClick={handleDrawerOpen}>Open Drawer</Button>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={handleDrawerClose}
      >
        <List
          sx={{ width: 250 }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItemButton>
          <ListItemButton onClick={handleNestedListClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Nested Items" />
            {openNestedList ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openNestedList} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </Drawer>
    </div>
  );
}