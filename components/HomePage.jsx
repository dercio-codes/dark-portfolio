import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const HomePage = () => {
  return (
      <Box sx={{minHeight:"180vh",background:"black",marginBottom:'16px'}}>
          <Typography variant="h3" align="center" sx={{color:"white",margin:"30px 0"}}>
               IM JOHN DOE 
          </Typography> 
    
          <Typography variant="h6" align="center" sx={{color:"white",margin:"30px 0"}}>
          Photographer and Web Designer.
          </Typography> 
          <Box sx={{
            height:"180vh", 
            background:'pink' 
          }} >
          <img src="man_smoke.jpg" alt="" width="100%" height="100%" style={{ objectFit:'cover'}} />
          </Box>
          
      </Box>
  )
};

export default HomePage;
