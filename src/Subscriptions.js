import withRoot from './modules/withRoot';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect } from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import AppAppBar from './modules/views/AppAppBar';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const useStyles = makeStyles({
  container: {
    marginTop: 50,
  },
  table: {
    minWidth: 650,
  },
});

function createData(subscription, img_url, username, password) {
  return { subscription, img_url, username, password };
}

const rows = [
  createData("Spotify", "/spotify.png", "uhtufmyi@fwb.com", "vAyq5p5zKAjW2RZr"),
  createData("Netflix", "/netflix.png", "ehioynkq@fwb.com", "aJFhP2nqBVXNSXoA"),
  createData("Hulu", "/hulu.svg", "mmibkodp@fwb.com", "sYU27nhBYK5cnM8N"),
  createData("Disney+", "/disney+.svg", "wbzydfid@fwb.com", "BpPHwN9P89gTZ9RG"),
  createData("Amazon Prime Video", "/amazonprime.svg", "cvxsoenz@fwb.com", "bUFRdX5qp5WSanYy"),
  createData("HBO Now", "/hbonow.svg", "icynzpnk@fwb.com", "5CtDkbex39YZd6iS"),
];

function Index() {
  const classes = useStyles();
  const query = useQuery();
  const user = query.get("user");
  useEffect (() => {
    // get data from server
  }, []);
  return (
    <React.Fragment>
      <AppAppBar />
      <Container maxWidth="md">
      <TableContainer className={classes.container} component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Subscription</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Password</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.subscription}>
                <TableCell align="right"><img src={row.img_url} alt={row.subscription} height="60"/></TableCell>
                <TableCell>{row.username}</TableCell>
                <TableCell>{row.password}</TableCell>
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
