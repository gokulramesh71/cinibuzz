import React from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from "@mui/material/Tab";
import Typography from '@mui/material/Typography';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

function CastSlider(props) {
  return (
    <Box sx={{ flexGrow: 1, bgcolor: "background.paper" }}>
    <Typography variant="h5" component="h5">
      Cast
    </Typography>
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
      {props.castList.map((cast, ind) => {
          return <Tab
                  key={ind}
                  icon={
                  <ImageListItem>
                    <img
                    src={`https://image.tmdb.org/t/p/w500${cast.profile_path}?w=100&h=150&fit=crop&auto=format`}
                    srcSet={`https://image.tmdb.org/t/p/w500${cast.profile_path}?w=100&h=150&fit=crop&auto=format&dpr=2 1x`}
                    alt={cast.name}
                  />
                    <ImageListItemBar
                        title={cast.name}
                        subtitle={cast.character}
                        sx={{background: 'none', fontWeight: 'bolder'}}
                        position="below"
                      />
                    </ImageListItem>
                  }
                  />
          })
      }
    </Tabs>
  </Box>
);
}

export default CastSlider;
