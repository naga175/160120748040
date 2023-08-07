import { Paper, Grid, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { Train } from "./types";


export type TrainPageProp = {
  trains:Train[]
}
const TrainPage:React.FC<TrainPageProp> = ({trains}) => {
  const { trainNumber } = useParams();

  console.log(trainNumber);

  const train : Train = trains.filter((train)=>train?.trainNumber === trainNumber)?.[0];

  return (
    <Paper
            key={train?.trainNumber}
              sx={{
                p: 2,
                margin: 'auto',
                maxWidth: 500,
                flexGrow: 1,
                border:'1px solid',
                marginTop:'20px',
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
              }}
            >
              <Grid container spacing={2}>
    
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom  component="div">
                      TrainName :{train?.trainName}
                      </Typography>
                      <Typography  gutterBottom>
                      trainNumber: {train?.trainNumber}
                      </Typography>
                      <Typography  color="text.secondary">
                       Sleeper Class 
                      </Typography>
                      <Typography  color="text.secondary">
                       seats Available:{train?.seatsAvailable.sleeper}
                       price :{train?.price.sleeper}
                      </Typography>
                    </Grid>
                    <Grid item>
                    <Typography  color="text.secondary">
                       AC Class 
                      </Typography>
                    <Typography  color="text.secondary">
                       seats Available:{train?.seatsAvailable.AC}
                       price :{train?.price.AC}
                      </Typography>
                      <Typography  color="text.secondary">
                       Depature Time: {train?.departureTime.Hours}hours{train?.departureTime.Minutes}Minutes{train?.departureTime.Seconds}seconds
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography  component="div">
                      Delayed By :{train?.delayedBy}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
  )
};

export default TrainPage;
