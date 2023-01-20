import Grid from "@mui/material/Grid/Grid";
import Paper from "@mui/material/Paper";
import React from "react";
var Home = function () { return (React.createElement(Grid, { item: true, xs: 12 },
    React.createElement(Paper, { sx: {
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 240,
        } }, "Home"))); };
export default Home;
