import React from 'react';
import banner from '../media/banner.jpg';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  image: {
    width: '100%',
  },
})

function Banner() {
  const classes = useStyles();
  return(
    <img src={banner} alt="Header" className={classes.image}/>
  );
}

export default Banner;
