import React from 'react';
import { Element,} from 'react-scroll';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Navbar from './Navbar';
import Banner from './Banner';
import Shiraz from './wines/Shiraz';
import PinotNoir from './wines/PinotNoir';
import Cabernet from './wines/Cabernet';
import Footer from './Footer';

const useStyles = makeStyles({
});

function Home() {
  const classes = useStyles();
  return(
    <Grid container direction="row" justify="center" alignItems="center">
      <Navbar />
      <Grid item xs={12}><Banner /></Grid> 

      <Element name='shiraz'></Element>
      <Grid item xs={12}><Shiraz /></Grid>

      <Element name='pinotNoir'></Element>
      <Grid item xs={12}><PinotNoir /></Grid>

      <Element name='cabernet'></Element>
      <Grid item xs={12}><Cabernet /></Grid>

      <Element name='contact'></Element>
      <Footer />
    </Grid>
  );
}

export default Home;
