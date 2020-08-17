import React from 'react';
import { Grid, Box } from '@material-ui/core';
import InformationBox from './InformationBox';

function RightElement(props) {
  const { name, description, image } = props;

  return(
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{padding: '50px'}}
    >
     <Grid item xs={5}>
        <Box style={{ textAlign: 'right' }}>
          <img src={image} alt={name} style={{ height: '350px', width: 'auto', }}/>
        </Box>
      </Grid>
      <Grid item xs={2}></Grid>

      <Grid item xs={3}>
        <InformationBox name={name} description={description} />
      </Grid>

      <Grid item xs={2}></Grid>
    </Grid>
  );
}

export default RightElement;