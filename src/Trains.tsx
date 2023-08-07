import React from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { Train } from './types'
import { useNavigate} from 'react-router-dom';


export type TrainsProp = {
    trains : Train[]
}

const Trains:React.FC<TrainsProp> = ({trains}) => {

    const navigate = useNavigate();

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
              onClick = {()=>navigate(`/train/${train.trainNumber}`)}
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
                       Depature Time: {train.departureTime.Hours}hours{train.departureTime.Minutes}Minutes{train.departureTime.Seconds}seconds
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
