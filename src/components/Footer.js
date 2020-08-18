import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { Grid, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Contact from './Contact';
import triangleImg from '../media/triangle_multi.png';
import hnjLogo from '../media/hnj_logo.png';

const useStyles = makeStyles({
  root: {
    bottom: '0',
    left:'0',
    width: '100vw',
    paddingTop: '100px',
    textAlign: 'center',
  },
  footer: {
    paddingTop: '20px',
    height: '150px',
    backgroundColor: 'black',
  },
  upImage: {
    width: '100px',
    height: 'auto',
    margin: '-4px',
    '&:hover': {
      cursor: 'pointer',
    }
  },
  hnjImg: {
    width: '130px',
    height: 'auto',
  },
});

function Footer() {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <Tooltip title='Go up' placement='top' arrow>
        <img src={triangleImg} alt='Up' className={classes.upImage} onClick={() => scroll.scrollToTop()}/>
      </Tooltip>

      <div className={classes.footer}>
        <Grid
          container
          direction="row" 
          justify="center" 
          alignItems="center"
        >
          <Grid item xs={2}>
            <img src={hnjLogo} alt='Helen & Joey logo' className={classes.hnjImg}/>
          </Grid>

          <Grid item xs={7}></Grid>

          <Grid item xs={3}>
            <Contact />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
