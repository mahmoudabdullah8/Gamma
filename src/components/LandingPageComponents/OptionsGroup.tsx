"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import OptionOne from "./OptionsGroup/OptionOne";
import OptionTwo from "./OptionsGroup/OptionTwo";
import OptionThree from "./OptionsGroup/OptionThree";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function OptionsGroup() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div
      className="  
      w-full p-2 sm:p-0
   sm:w-10/12 md:w-10/12 
    custom:w-9/12
     lg:w-11/12 
     m-auto  
     

    "
    >
      <Box sx={{   position:"relative"  }}>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Option 1" {...a11yProps(0)} />
            <Tab label="Option 2" {...a11yProps(1)} />
            <Tab label="Option 3" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <OptionOne />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <OptionTwo />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <OptionThree />
        </CustomTabPanel>
      </Box>
    </div>
  );
}
