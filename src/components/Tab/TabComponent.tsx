import { Box, Tabs, Tab, Typography } from "@mui/material";
import React from "react";
import AllGoalView from "../../pages/goal/views/AllGoalView";
import type { TabPanelProps } from "../../types/TabPanelType";
import CustomMenuButtonComponent from "../Button/CustomMenuButtonComponent";

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabComponent() {
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="custom tab coponent"
        >
          <Tab label="All Goals" {...a11yProps(0)} />
          <Tab label="My goals" {...a11yProps(1)} />
          <Tab label="Add view" {...a11yProps(2)} />
          <Tab
            label={
              <CustomMenuButtonComponent
                title="More views"
                backgroundColorProps="white"
                colorProps="grey"
              />
            }
            {...a11yProps(3)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <AllGoalView />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Typography variant="h6">My goals</Typography>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Typography variant="h6">Add views</Typography>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Typography variant="h6">More views</Typography>
      </CustomTabPanel>
    </>
  );
}
