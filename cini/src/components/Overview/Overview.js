import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Overview(props) {
  return (
    <TableContainer component={Paper} elevation={0}>
      <Table aria-label="caption table">
        <TableBody>
          {props.rows.map((row, ind) => (
            <TableRow key={ind}>
              <TableCell sx={{border: 0}} component="th" scope="row">
                <Table>
                  <TableBody>
                    <TableRow>
                     <TableCell sx={{display: 'flex', flexDirection: 'column', border: 0}}>
                        <h3>Overview</h3>
                        <div>
                          {row.overview}
                        </div>
                     </TableCell> 
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{border: 0}}>
                        <Table>
                            <TableBody>
                              <TableRow>
                                <TableCell sx={{border: 0}}>Director</TableCell>
                                <TableCell sx={{border: 0}}>Producer</TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableCell>
              <TableCell align="right" sx={{border: 0}}>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell sx ={{display: 'flex', flexDirection: 'column', border: 0}}>
                        <h3>Status</h3>
                        <div>{row.status}</div>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell sx ={{display: 'flex', flexDirection: 'column', border: 0}}>
                        <h3>Original Language</h3>
                        <div>{row.original_language}</div>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell sx ={{display: 'flex', flexDirection: 'column', border: 0}}>
                        <h3>Budget</h3>
                        <div>{row.budget}</div>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell sx ={{display: 'flex', flexDirection: 'column', border: 0}}>
                        <h3>Revenue</h3>
                        <div>{row.revenue}</div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Overview;
