import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const About = () => {
  return (
    <>
      <Box
        sx={{
          border: "1px solid red",
          height: "100vh",
          width: "100%",
          marginTop: "50px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#eee",
            marginBottom: "16px",
          }}
        >
          My Name
        </Typography>
        <Box
          style={{ width: "200px", height: "1px", background: "#eee" }}
        ></Box>
        <Typography variant="p" sx={{color:"white", marginTop:"20px"}}>
        Some text about me. Some text about me. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Typography>
       
      

      </Box>

   
    </>
  );
};

export default About;
