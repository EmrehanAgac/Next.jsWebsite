import React from 'react';
import '../styles/global.css'; 
import { CssBaseline } from '@mui/material'; 

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CssBaseline /> 
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
