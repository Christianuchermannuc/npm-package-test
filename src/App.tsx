import { useState } from "react";
import reactLogo from "./assets/react.svg";
//import "./App.css";
import Button from "@mui/material/Button";
//import Dashboard from "./layout/src/Dashboard";
import Dashboard from "mainlayout";
import { Grid, Paper } from "@mui/material";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Dashboard component={[Products, Orders]} title="En test">
      {/* <Grid item xs={12} md={8} lg={9}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            test
          </Paper>
        </Grid> */}

      {/* <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            test 2
          </Paper>
        </Grid>
    
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            test 3
          </Paper>
        </Grid> */}
    </Dashboard>
    // <div className="App">
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src="/vite.svg" className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://reactjs.org" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    //   <div>
    //     <Button variant="contained">Hello World</Button>
    //   </div>
    // </div>
  );
}

export default App;
