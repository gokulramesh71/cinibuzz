import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { IconButton } from '@mui/material';
import { dateFormat, subTitle } from '../../services/Utils';

function ImageFrame(props) {
  return (
    <ImageList sx={{ width: '100%',overflowY: 'hidden' }} cols={props.colSize}>
      {props.imageArr && props.imageArr.map((item) => (
        <ImageListItem key={item.id} sx={{ objectFit: 'unset', borderRadius: '15px', width: `${props.width}em`, height: `${props.height}em !important` }} >
          <img
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}?w=100&h=150&fit=crop&auto=format`}
            srcSet={`https://image.tmdb.org/t/p/w500${item.poster_path}?w=100&h=150&fit=crop&auto=format&dpr=2 1x`}
            alt={item.title}
            loading="lazy"
            onClick={() => {props.furtherInfoCb(item)}}
            style={{borderRadius:'10px'}}
          />
          <ImageListItemBar
            title={item.title}
            subtitle={props.colSize === 1 ? subTitle(item) : dateFormat(item.release_date)}
            sx={{background: 'none', fontWeight: 'bolder'}}
            position={props.colSize === 1 ? "bottom":"below"}
            actionIcon={
              props.colSize === 1 && <IconButton
                sx={{ fontSize:'10px', color: 'green', borderColor: 'white', borderRadius: '20px', lineHeight: '20px', border: '2px solid white', mr: '6px', backgroundColor: 'white' }}
                aria-label={`info about ${item.title}`}
              >
               {item.vote_average * 10}%
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default ImageFrame;
