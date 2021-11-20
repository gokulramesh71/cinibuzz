import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { IconButton } from '@mui/material';

function ImageFrame(props) {
  return (
    <ImageList sx={{ width: '100%',overflowY: 'hidden' }} cols={props.colSize} gap={30}>
      {props.imageArr && props.imageArr.map((item) => (
        <ImageListItem key={item.id} sx={{ objectFit: 'unset', borderRadius: '15px' }} >
          <img
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}?w=100&h=${props.colSize === 1 ? props.height: 150}&fit=crop&auto=format`}
            srcSet={`https://image.tmdb.org/t/p/w500${item.poster_path}?w=100&h=${props.colSize === 1 ? props.height: 150}&fit=crop&auto=format&dpr=2 1x`}
            alt={item.title}
            loading="lazy"
            onClick={() => {props.furtherInfoCb(item)}}
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.release_date}
            sx={{background: 'none', fontWeight: 'bolder'}}
            position={props.colSize === 1 ? "bottom":"below"}
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

export default ImageFrame;
