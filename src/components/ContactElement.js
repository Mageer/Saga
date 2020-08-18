import React from 'react';
import {Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import lime from '@material-ui/core/colors/lime';

const useStyles = makeStyles({
  icon: {
    textAlign: 'right',
    color: lime[200],
    paddingRight: '10px',
  },
  info: {
    textAlign: 'left',
    color: '#EDF4E0',
  }
});

function ContactElement(props) {
  const { icon, text } = props;
  const classes = useStyles();

  return(
    <Grid 
      container 
      direction="row" 
      justify="center" 
      alignItems="center" 
      className={classes.contact}
    >
      <Grid item xs={3} className={classes.icon} >
        {icon}
      </Grid>
      <Grid item xs={9} className={classes.info}>
        <Typography variant={'b1'}>
          {text}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default ContactElement;
