import React from 'react';
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function CategoryList() {
  const [alignment, setAlignment] = React.useState("New Release");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const options = ['New Release', 'Upcoming', 'Action', 'Comedy', 'Crime', 'Drama', 'Thriller', 'Sci-Fi', 'Family', 'Horror'];

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      {
        options.map((opt, ind) => {
          return (<ToggleButton key={ind} sx={{ mr: 1, border: 0 }} value={opt}>
            {opt}
          </ToggleButton>);
        })
      }
    </ToggleButtonGroup>
  );
}

export default CategoryList;
