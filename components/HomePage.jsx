import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const HomePage = () => {
  return (
    <Box sx={{ height: "100vh", background: "black" }}>
      <Typography
        variant="h3"
        align="center"
        sx={{ color: "white", margin: "30px 0" }}
      >
        IM JOHN DOE
      </Typography>

      <Typography
        variant="h6"
        align="center"
        sx={{ color: "white", margin: "30px 0" }}
      >
        Photographer and Web Designer.
      </Typography>
      <Box
        sx={{
          height: "500px",
          background: `url(man_smoke.jpg),`,
          border: "1px solid red",
          backgroundPosition:"center"
        }}
      ></Box>
    </Box>
  );
};

export default HomePage;
