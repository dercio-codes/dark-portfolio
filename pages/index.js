import Nav from "../components/Nav";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import HomePage from "../components/HomePage";
import About from "../components/About";
import MyPhotos from "../components/MyPhotos";

export default function Home() {
  return (
    <Grid container spacing={1}>
      <Box
        style={{
          display: "flex",
        }}
      >
        <Grid
          md={2}
          sx={{ height: "100vh", position: "sticky", left: 0, top: 0 }}
        >
          <Nav />
        </Grid>
        <Grid
          md={12}
          sx={{
            minHeight: "100vh",
            padding: "90px",
            background: "black",
          }}
        >
         
          <HomePage />
          <About/>
          <MyPhotos />
        </Grid>
      </Box>
    </Grid>
       
 
  );
}
