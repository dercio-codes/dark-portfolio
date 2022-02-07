import Nav from "../components/Nav"
import MyPhotos from "../components/MyPhotos"
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <Box style={{
      display:'flex'
    }}>
     <Nav />
     <Box sx={{flex:10,minHeight:'100vh'}}>
      <MyPhotos />
     </Box>
    </Box>
  )
}
