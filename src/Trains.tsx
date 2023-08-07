import React, {  useEffect } from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { Train } from './types'


export type TrainsProp = {
    trains : Train[]
}

const Trains:React.FC<TrainsProp> = ({trains}) => {

    console.log("trains",trains);

    useEffect(()=>{

    },[trains])

    // return(
    //     <>Train</>
    // )
    

    return (
        <div>
          {trains?.map((train) => (
            <Paper
            key={train.trainNumber}
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
                      TrainName :{train.trainName}
                      </Typography>
                      <Typography  gutterBottom>
                      trainNumber: {train.trainNumber}
                      </Typography>
                      <Typography  color="text.secondary">
                       Sleeper Class 
                      </Typography>
                      <Typography  color="text.secondary">
                       seats Available:{train.seatsAvailable.sleeper}
                       price :{train.price.sleeper}
                      </Typography>
                    </Grid>
                    <Grid item>
                    <Typography  color="text.secondary">
                       AC Class 
                      </Typography>
                    <Typography  color="text.secondary">
                       seats Available:{train.seatsAvailable.AC}
                       price :{train.price.AC}
                      </Typography>
                      <Typography  color="text.secondary">
                       Depature Time: {train.departureTime.hours}hours{train.departureTime.minutes}Minutes{train.departureTime.seconds}seconds
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography  component="div">
                      Delayed By :{train.delayedBy}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          )
          )};
        </div>
      );
}

export default Trains
