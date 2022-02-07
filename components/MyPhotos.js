import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function MyPhotos() {
  return (
    <Box sx={{ height:"100vh",border:"1px solid red" }}>
      <Grid container spacing={2}>
        <Grid item md={6} xs={6}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item md={6} xs={6}>
          <Item>xs=4</Item>
        </Grid>
        
      </Grid>
    </Box>
  );
}
