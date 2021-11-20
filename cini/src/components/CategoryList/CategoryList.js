import React from 'react';
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function CategoryList(props) {
  const [alignment, setAlignment] = React.useState("New Release");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  // const options = ['New Release', 'Upcoming', 'Action', 'Comedy', 'Crime', 'Drama', 'Thriller', 'Sci-Fi', 'Family', 'Horror'];

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
          return (<ToggleButton key={ind} sx={{ pr: 2, border: 0, textTransform: 'none', fontSize:'0.875rem', borderRadius: '2px', flexGrow: 1 }} value={opt.name}>
            {opt.name}
          </ToggleButton>);
        })
      }
    </ToggleButtonGroup>
  );
}

export default CategoryList;
