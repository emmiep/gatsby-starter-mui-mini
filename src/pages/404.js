import React from 'react'
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

export default function NotFoundPage() {
  const classes = useStyles();

  return (
    <Layout>
      <Paper className={classes.root}>
        <Typography className={classes.heading} variant="h3" component="h1">
          NOT FOUND
        </Typography>
        <Typography variant="body1">
          You just hit a route that doesn&#39;t exist... the sadness.
        </Typography>
      </Paper>
    </Layout>
  );
}
