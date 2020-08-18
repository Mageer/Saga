import React from 'react';
import { Link } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  ButtonGroup,
  Button
} from '@material-ui/core';
import sagaLogo from '../media/saga_logo.jpg';

const useStyles = makeStyles({
  navbar: {
    marginBottom: '1rem',
    padding: '1rem',
    backgroundColor: 'black',
    position: 'fixed',
    top: '0',
    left:'0',
    width: '100%',
    boxShadow: '0px 0px 5px #000000',
  },
  logo: {
    color: 'gray',
    textAlign: 'left',
  },
  links: {
    color: 'white',
    textAlign: 'center',
  }
});

function Navbar() {
  const classes = useStyles();
  return(
    <div className={classes.navbar}>
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item xs={4}>
        {/* <Typography variant={'h5'} className={classes.logo}>SÅGA</Typography> */}
        <img src={sagaLogo} alt="sagaLogo" style={{ width: '64px', height: 'auto'}}/>
      </Grid>
      <Grid item xs={4} style={{textAlign: 'center', color: 'white'}}>
        <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
          <Button>
            <Link activeClass="active" to="shiraz" spy={true} smooth={true} duration={500}>
              Shiraz
            </Link>
          </Button>

          <Button>
            <Link activeClass="active" to="pinotNoir" spy={true} smooth={true} duration={500}>
              Pinot Noir
            </Link>
          </Button>

          <Button>
            <Link activeClass="active" to="cabernet" spy={true} smooth={true} duration={500}>
              Cabernet
            </Link>
          </Button>
        </ButtonGroup>
      </Grid>
      <Grid item xs={4} style={{ textAlign: 'right', paddingRight: '50px'}}>
        <Button color='primary'>
            <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}>
              Contact
            </Link>
        </Button>
      </Grid>
    </Grid>
    </div>

  );
}


export default Navbar;