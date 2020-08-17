import React from 'react';
import { Grid, Box } from '@material-ui/core';
import banner from '../media/banner.jpg';
import Navbar from './Navbar';
import Footer from './Footer';
import Shiraz from './wines/Shiraz';
import PinotNoir from './wines/PinotNoir';
import Cabernet from './wines/Cabernet';

function Home() {
  return(
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Navbar />

      <Grid item xs={12} style={{ textAlign: 'center' }}>
          <img src={banner} alt="Header" style={{ width: '100%', height: 'auto'}}/>
      </Grid>
      
      <Grid item xs={12}>
        <Shiraz />
      </Grid>
      
      <Grid item xs={12}><div style={{height:'100px'}}></div></Grid>

      <Grid item xs={12}>
        <PinotNoir />
      </Grid>

      <Grid item xs={12}><div style={{height:'100px'}}></div></Grid>

      <Grid item xs={12}>
        <Cabernet />
      </Grid>

      <Footer />
    </Grid>
  );
}

export default Home;
