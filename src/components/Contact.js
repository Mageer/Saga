import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ContactElement from './ContactElement';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

const useStyles = makeStyles({
  contactUs: {
    textAlign: 'center',
    color: 'white',
    border: '1px solid red'
  }
});

function About() {
  const classes = useStyles();
  return(
    <Grid
      container
      direction="row" 
      justify="center" 
      alignItems="center"
    >
      <ContactElement icon={<LocationOnIcon />} text={`Nydalen Allé 5, 0484 OSLO`} />
      <ContactElement icon={<PhoneIcon />} text={`48 20 51 54`} />
      <ContactElement icon={<AlternateEmailIcon />} text={`info@sagawinespirits.no`} />
    </Grid>
  );
}

export default About;
