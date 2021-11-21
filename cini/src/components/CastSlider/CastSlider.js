import React from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from "@mui/material/Tab";
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

function CastSlider(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: "background.paper" }}>
    <h2>
      Cast
    </h2>
    <Tabs
      variant="scrollable"
      scrollButtons
      aria-label="visible arrows tabs example"
      value={value}
      onChange={handleChange}
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
                  <ImageListItem sx={{width: '20em'}}>
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
