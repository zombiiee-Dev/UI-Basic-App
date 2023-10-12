import React from "react";
import { Button } from "@mui/material";
import ButtonAppBar from "./components/ButtonAppBar";
import JobsCard from "./components/JobsCard";
import Grid from "@mui/material/Grid";
import { getData } from "./data";
import BasicPagination from "./components/BasicPagination";

function App() {
  let data = getData();
  return (
    <div>
      <ButtonAppBar />
      <Grid container spacing={2} sx={{ mt: 1.5 }}>
        {data.slice(0, 5).map((data) => (
          <Grid key={data.id} item xs={12} md={4}>
            <JobsCard job={data} />
          </Grid>
        ))}
      </Grid>
      <BasicPagination />
    </div>
  );
}

export default App;
