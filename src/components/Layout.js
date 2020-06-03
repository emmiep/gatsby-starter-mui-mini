import React from 'react';
import {CssBaseline, Container} from '@material-ui/core';
import './layout.css';

export default function Layout({children}) {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        {children}
      </Container>
    </>
  );
}
