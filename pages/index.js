import Nav from "../components/Nav";
import MyPhotos from "../components/MyPhotos";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import HomePage from "../components/HomePage";
import About from "../components/About";

export default function Home() {
  return (
    <Box
      style={{
        display: "flex",
      }}
    >
      <Grid md={2} sx={{ height: "100vh" , position:'sticky',left:0 , top:0}}>
        <Nav />
      </Grid>
      <Grid
        md={12}
        sx={{
          minHeight: "100vh",
          padding: "0 50px",
          background: "black",
        }}
      >
        <HomePage />
        <MyPhotos />
        <About/>
      </Grid>
    </Box>
  );
}
