import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles({
  footer: {
    bottom: '0',
    left:'0',
    width: '100vw',
    paddingTop: '50px',
    height: '150px',
    backgroundColor: 'black',
    color: 'gray',
    textAlign: 'center',
  },
  contact: {
    textAlign: 'left',
    color: '#EDF4E0'
  },
  icon: {
    color: '#A4EEFF',
  }
});

function Footer() {
  const classes = useStyles();
  return(
    <div className={classes.footer}>
    <Grid container>
      <Grid item xs={9}></Grid>
      <Grid item xs={3}>
      <Box className={classes.contact}>
        <Typography variant={'h6'}>
          Contact us
        </Typography>
        <br/>
        <AlternateEmailIcon className={classes.icon} />
        <Typography variant={'b1'}>
          contact@saga-wine-and-spirits.com
        </Typography>
        <br/>
        <PhoneIcon className={classes.icon} />
        <Typography variant={'b1'}>
           123-456-7890
        </Typography>
      </Box>
      </Grid>
    </Grid>

    </div>
  );
}


export default Footer;