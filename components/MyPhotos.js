import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function MyPhotos() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Stack
        sx={{
          marginTop: "32px",
          marginBottom: "32px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#eee",
            marginBottom: "16px",
          }}
        >
          My Photos
        </Typography>
        <div
          style={{ width: "200px", height: "1px", background: "#eee" }}
        ></div>
      </Stack>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <img
            src="https://www.w3schools.com/w3images/wedding.jpg"
            alt="random image"
            width="100%"
            style={{
              marginBottom: "16px",
            }}
          />
          <img
            src="https://www.w3schools.com/w3images/rocks.jpg"
            alt=""
            width="100%"
            style={{
              marginBottom: "16px",
            }}
          />
          <img
            src="https://www.w3schools.com/w3images/sailboat.jpg"
            alt="random image"
            width="100%"
            style={{
              marginBottom: "16px",
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <img
            src="https://www.w3schools.com/w3images/underwater.jpg"
            alt="random image"
            width="100%"
            style={{
              marginBottom: "16px",
            }}
          />
          <img
            src="https://www.w3schools.com/w3images/chef.jpg"
            alt="random image"
            width="100%"
            style={{
              marginBottom: "16px",
            }}
          />
          <img
            src="https://www.w3schools.com/w3images/wedding.jpg"
            alt="random image"
            width="100%"
            style={{
              marginBottom: "16px",
            }}
          />
          <img
            src="https://www.w3schools.com/w3images/p6.jpg"
            alt="random image"
            width="100%"
            style={{
              marginBottom: "16px",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
