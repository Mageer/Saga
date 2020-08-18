import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
  Grid,
  Box,
  Typography,
  Tooltip
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';
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
    paddingTop: '30px',
    height: '150px',
    backgroundColor: 'black',
    color: 'gray',
    textAlign: 'center',
  },
  contact: {
    paddingTop: '20px',
    textAlign: 'left',
    color: '#EDF4E0'
  },
  icon: {
    color: '#A4EEFF',
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
  }
});

function Footer() {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <Tooltip title='Go up' placement='top' arrow>
        <img src={triangleImg} alt='Up' className={classes.upImage} onClick={() => scroll.scrollToTop()}/>
      </Tooltip>

      <div className={classes.footer}>
        <Grid container>
          <Grid item xs={2}>
            <img src={hnjLogo} alt='Helen & Joey logo' className={classes.hnjImg}/>
          </Grid>
          <Grid item xs={7}></Grid>
          <Grid item xs={3}>
            <Box className={classes.contact}>
              <Typography variant={'h6'}>
                Contact us
              </Typography>
              <br/>
              <AlternateEmailIcon className={classes.icon} />
              <Typography variant={'b1'}>
                contact@saga-wine-and-spirits.com
              </Typography>
              <br/>
              <PhoneIcon className={classes.icon} />
              <Typography variant={'b1'}>
                123-456-7890
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}


export default Footer;