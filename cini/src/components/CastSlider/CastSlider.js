import React from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from "@mui/material/Tab";

function CastSlider() {
  return (
    <Box sx={{ flexGrow: 1, maxWidth: 480, bgcolor: "background.paper" }}>
    <Tabs
      variant="scrollable"
      scrollButtons
      aria-label="visible arrows tabs example"
      sx={{
        [`& .${tabsClasses.scrollButtons}`]: {
          "&.Mui-disabled": { opacity: 0.3 }
        }
      }}
    >
      <Tab
        icon={<img
          src={`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=100&h=150&fit=crop&auto=format`}
          srcSet={`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=100&h=150&fit=crop&auto=format&dpr=2 1x`}
          alt="jiji"
        />}
      />
      <Tab
        icon={<img
          src={`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=100&h=150&fit=crop&auto=format`}
          srcSet={`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=100&h=150&fit=crop&auto=format&dpr=2 1x`}
          alt="jiji"
        />}
      />
      <Tab
        icon={<img
          src={`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=100&h=150&fit=crop&auto=format`}
          srcSet={`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=100&h=150&fit=crop&auto=format&dpr=2 1x`}
          alt="jiji"
        />}
      />
      <Tab
        icon={<img
          src={`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=100&h=150&fit=crop&auto=format`}
          srcSet={`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=100&h=150&fit=crop&auto=format&dpr=2 1x`}
          alt="jiji"
        />}
      />
    </Tabs>
  </Box>
);
}

export default CastSlider;
