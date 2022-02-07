import React from 'react';
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


const HomePage = () => {
  return (
      <Box sx={{height:"100vh",background:"black"}}>
          <Typography variant="h3" align="center" sx={{color:"white",margin:"30px 0"}}>
               IM JOHN DOE
          </Typography>
          <img src="man_smoke.jpg" alt="" width="100%" />
          
      </Box>
  )
};

export default HomePage;
