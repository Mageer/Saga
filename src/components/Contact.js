import React from 'react';
import { Grid } from '@material-ui/core';
import ContactElement from './ContactElement';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

function About() {
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
