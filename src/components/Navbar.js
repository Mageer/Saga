import React from 'react';
import { Link } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  ButtonGroup,
  Button
} from '@material-ui/core';
import sagaLogo from '../media/saga_logo_white_thick.png';

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
    width: '64px', 
    height: 'auto',
  },
  menu: {
    textAlign: 'center',
  },
  conactButton: {
    textAlign: 'right', 
    paddingRight: '50px',
  },
});

const linkButton = (refName, name) => (
  <Button color='primary'>
    <Link activeClass="active" to={refName} spy={true} smooth={true} duration={500}>
      {name}
    </Link>
  </Button>
);

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
      <Grid item xs={2}>
        <img src={sagaLogo} alt="sagaLogo" className={classes.logo} />
      </Grid>
      <Grid item xs={8} className={classes.menu}>
        <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
          {linkButton(`pinotNoir`, `Pinot Noir`)}
          {linkButton(`cabernet`, `Cabernet`)}
          {linkButton(`shiraz`, `Shiraz`)}
          {linkButton(`blancDeBlanc`, `Blanc de Blanc`)}
          {linkButton(`waywardChildIlion`, `Wayward Child Ilion`)}
          {linkButton(`rose`, `Rosé`)}
        </ButtonGroup>
      </Grid>

      <Grid item xs={2} style={{ textAlign: 'right', paddingRight: '50px'}}>
        {linkButton(`contact`, `Contact us`)}
      </Grid>
    </Grid>
    </div>

  );
}


export default Navbar;