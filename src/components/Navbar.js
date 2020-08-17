import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  navbar: {
    marginBottom: '1rem',
    padding: '1rem',
    backgroundColor: 'rgb(235, 195, 64)',
    position: 'fixed',
    top: '0',
    left:'0',
    width: '100%',
  }
});

function Navbar() {
  const classes = useStyles();
  return(
    <div className={classes.navbar}>
      <p>This is the navbar</p>
    </div>
  );
}


export default Navbar;