import React from 'react';
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function CategoryList(props) {
  const [alignment, setAlignment] = React.useState('New Releases');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      sx= {{alignSelf:'flex-start',color: 'black', width: '100%'}}
    >
      {
        props.options.length > 0 && props.options.map((opt, ind) => {
          return (<ToggleButton value={opt.name} key={ind} sx={{ pr: 2, border: 0, textTransform: 'none', fontSize:'0.875rem', borderRadius: '2px', flexGrow: 1 }}>
            {opt.name}
          </ToggleButton>);
        })
      }
    </ToggleButtonGroup>
  );
}

export default CategoryList;
