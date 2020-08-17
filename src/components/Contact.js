import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  paper: {
    padding: '50px',
    textAlign: 'left',
    backgroundColor: '#DFDFB2'
  },
});

function About() {
  const classes = useStyles();
  return(
    <Grid container>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <Paper elevation={2} className={classes.paper}>
          <Typography variant={'h4'}>Contact</Typography>
          <Typography variant={'b1'}>
            <br/><br/>
            For more information, please don't hesitate to send an email to:
            <br/><br/>
          </Typography>
          <Typography variant={'b1'}>
            contact@saga-wine-and-spirits.com
          </Typography>
        </Paper>  
      </Grid>
      <Grid item xs={4}></Grid>

    </Grid>
  );
}

export default About;
