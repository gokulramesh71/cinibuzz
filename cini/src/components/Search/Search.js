import React from 'react';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';

function Search(props) {
  let searchText = '';
  return (
    <Paper elevation={0}
      component="form"
      sx={{ display: 'flex', alignItems: 'center', width: '100%', minHeight:200, backgroundColor: '#F0F0F0', justifyContent: 'center', flexDirection:'column',
      borderRadius: '10px'}}
    >
          <div style={{fontSize: '20px', padding: '20px'}}>Find perfect movie for <b>evening</b></div>
          <div style={{display:'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Paper 
                  sx={{ display: 'flex', width: '60%', justifyContent: 'center', alignItems: 'center' }}
                  >
                  <SearchIcon sx={{padding: '5px'}} />
                  <InputBase
                    sx={{ ml: 1, flex: 1, fontSize: '13px' }}
                    placeholder="Search movies"
                    onChange={(e) => {searchText = e.target.value}}
                  />
            </Paper>
            <Button variant="contained" sx={{marginLeft: '15px', minHeight: '24px', fontSize: '10px', lineHeight: '24px'}}
              onClick={(e) => { props.searchCb(searchText);}}>SEARCH</Button>
          </div>
            
        
        
    </Paper>
  );
}

export default Search;
