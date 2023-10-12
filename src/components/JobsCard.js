import * as React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function JobsCard({ job }) {
  return (
    <Card sx={{ minWidth: 275, backgroundColor: "#FFC1C1" }}>
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="red" gutterBottom>
          {job.title}
          <hr />
        </Typography>
        <Typography
          variant="h5"
          style={{ display: "flex", justifyContent: "center" }}
          component="div"
        >
          {job.city}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <Stack spacing={1} direction="row" alignItems="center">
            {job.skills.map((skill, index) => (
              <Chip
                key={index}
                label={skill}
                color="primary"
                sx={{ backgroundColor: "#993366" }}
                alignItems="center"
              />
            ))}
          </Stack>
        </Typography>
        <Typography variant="body2">
          {job.description}
          <br />
          {job.salaryLow} - {job.salaryHigh}
        </Typography>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          color="success"
          sx={{ backgroundColor: "#9966FF" }}
        >
          Learn more
        </Button>
      </CardActions>
    </Card>
  );
}
