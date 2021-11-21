import React from 'react';
import Chip from '@mui/material/Chip';

function Keywords(props) {
  return (
    <div className="chipBody">
      {props.chips.map((chip, ind) => {
        return <Chip sx={{margin:'10px'}} key={ind} label={chip.name} />
      })}
      
    </div>
  );
}

export default Keywords;
