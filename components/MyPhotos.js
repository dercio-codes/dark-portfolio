import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function MyPhotos() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Typography variant=""></Typography>
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
