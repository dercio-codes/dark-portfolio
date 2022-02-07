import Nav from "../components/Nav"
import MyPhotos from "../components/MyPhotos"
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import HomePage from "../components/HomePage";

export default function Home() {
  return (
    <Box style={{
      display:'flex'
    }}>
      
      <Grid md={2} sx={{height:"100vh"}}>
     <Nav />
      </Grid>

     <Grid md={12} sx={{overflowY:"scroll",padding:"0 50px",background:"black"}}>
       <HomePage/>
      
     </Grid>
    </Box>
  )
}
