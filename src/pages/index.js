import React from 'react';
import Layout from '../components/Layout';
import {Paper, Typography, makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2, 3, 3),
  },
  heading: {
    marginBottom: theme.spacing(1),
  },
}));

export default function IndexPage() {
  const classes = useStyles();

  return (
    <Layout>
      <Paper className={classes.root}>
        <Typography className={classes.heading} variant="h3" component="h1">
          Hi people
        </Typography>
        <Typography variant="body1">
          Welcome to your new Gatsby site.
        </Typography>
        <Typography variant="body1">
          Now go build something great.
        </Typography>
      </Paper>
    </Layout>
  );
}
