import Grid from "@mui/material/Grid/Grid";
import Paper from "@mui/material/Paper";
import React from "react";

const Home = () => (
  <Grid item xs={12}>
    <Paper
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        height: 240,
      }}
    >
      Home
    </Paper>
  </Grid>
);

export default Home;
