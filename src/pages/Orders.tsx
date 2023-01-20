import Grid from "@mui/material/Grid/Grid";
import Paper from "@mui/material/Paper";

const Orders = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            Orders
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Orders;
