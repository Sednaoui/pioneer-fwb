import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(5),
    alignItems: 'center',
    textAlign:'center'
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>


        <img
          src="/static/themes/onepirate/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>
        <Grid item xs={12} md={12} >
         <Typography color="inherit" align="center" variant="h5" marked="center">
        Choose Your Favorite Apps
      </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/spotify3.png"
                alt="suitcase"
              />
            
            </div>
          </Grid>
          <Grid item xs={12} md={2}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/primevideo.png"
                alt="graph"
              />
              
            </div>
          </Grid>
          <Grid item xs={12} md={2}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/hbo.png"
                alt="graph"
              />
              
            </div>
          </Grid>
          <Grid item xs={12} md={2}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/netflix2.png"
                alt="graph"
              />
              
            </div>
          </Grid>
          <Grid item xs={12} md={2}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/hulu.png"
                alt="graph"
              />
              
            </div>
          </Grid>
          <Grid item xs={12} md={2}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/disney_plus.svg"
                alt="clock"
              />
           
            </div>
          </Grid>
          
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
