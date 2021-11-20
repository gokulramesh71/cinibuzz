import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { IconButton } from '@mui/material';

function ImageFrame() {
  return (
    <ImageList sx={{ width: '70%',overflowY: 'hidden' }} cols={4} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.img} sx={{ objectFit: 'unset' }} >
          <img
            src={`${item.img}?w=100&h=150&fit=crop&auto=format`}
            srcSet={`${item.img}?w=100&h=150&fit=crop&auto=format&dpr=2 1x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            sx={{background: 'none', fontWeight: 'bolder'}}
            position="below"
            actionIcon={
              <IconButton
                sx={{ fontSize:'10px', color: 'green', borderColor: 'white', borderRadius: '20px', lineHeight: '20px', border: '2px solid white', mr: '6px', backgroundColor: 'white' }}
                aria-label={`info about ${item.title}`}
              >
                83%
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Avengers Endgame',
    author:'04/26/2019 (IN) | Adventure,Science Fiction, Action | 3h 1m'
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];

export default ImageFrame;
