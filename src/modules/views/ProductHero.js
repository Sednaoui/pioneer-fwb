import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import { Link } from 'react-router-dom';

const backgroundImage =
  'https://unsplash.com/photos/w4znns7NTA0?auto=format&fit=crop&w=1400&q=80';

const styles = (theme) => ({
  background: {
    
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(7),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Friends With Benefits
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        Pay a fraction for online subscriptions by finding others to pay for a share
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
      >
        <Link to="/signup">
        Start Viewing
        </Link>
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
