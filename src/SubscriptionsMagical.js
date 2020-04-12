import withRoot from './modules/withRoot';
import { makeStyles } from '@material-ui/core/styles';
import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import AppAppBar from './modules/views/AppAppBar';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  container: {
    marginTop: 50,
  },
  table: {
    minWidth: 650,
  },
});

function createData(subscription, img_url, link_url) {
  return { subscription, img_url, link_url };
}

const rows = [
  createData("Spotify", "/spotify.png", "https://open.spotify.com"),
  createData("Netflix", "/netflix.png", "https://netflix.com"),
  createData("Hulu", "/hulu.svg", ""),
  createData("Disney+", "/disney+.svg", ""),
  createData("Amazon Prime Video", "/amazonprime.svg", ""),
  createData("HBO Now", "/hbonow.svg", ""),
];

function Index() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppAppBar />
      <Container maxWidth="md">
      <TableContainer className={classes.container} component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Subscription</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.subscription}>
                <TableCell align="right"><img src={row.img_url} alt={row.subscription} height="60"/></TableCell>
                <TableCell><Button color={row.link_url ? "secondary" : "disabled"} variant="contained" href={row.link_url}>Connect</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Container>
    </React.Fragment>
  );
}

export default withRoot(Index);
