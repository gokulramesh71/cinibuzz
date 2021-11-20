import React from 'react';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';

function Search() {
  return (
    <Paper elevation={0}
      component="form"
      sx={{ display: 'flex', alignItems: 'center', width: 800, minHeight:150, backgroundColor: '#F0F0F0', justifyContent: 'center', flexDirection:'row'}}
    >
            <Paper 
                sx={{ display: 'flex', width: '60%', justifyContent: 'center', alignItems: 'center' }}
                >
                <SearchIcon sx={{padding: '5px'}} />
                <InputBase  
                sx={{ ml: 1, flex: 1, fontSize: '13px' }}
                placeholder="Search movies"
                />
            </Paper>
            <Button variant="contained"
            sx={{marginLeft: '15px', minHeight: '24px', fontSize: '10px', lineHeight: '24px'}}>SEARCH</Button>
        
        
    </Paper>
  );
}

export default Search;
