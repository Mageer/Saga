import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  footer: {
    marginTop: '1rem',
    padding: '1rem',
    backgroundColor: 'rgb(235, 195, 64)',
    bottom: '0',
    left:'0',
    width: '100%',
  }
});

function Footer() {
  const classes = useStyles();
  return(
    <div className={classes.footer}>
      <p>This is some content in sticky footer</p>
    </div>
  );
}


export default Footer;