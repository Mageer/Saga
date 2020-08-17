import React from 'react';
import { Paper, Typography } from '@material-ui/core';

function InformationBox(props) {
  const { name, description } = props;

  return(
    <Paper elevation={3} justifyContent="center"  style={{ padding: '50px' }}>
      <Typography variant="h4">{name}</Typography>
      <br/>
      <Typography variant="b1" style={{whiteSpace: 'pre-line'}}>{description}</Typography>
    </Paper>
  );
}

export default InformationBox;