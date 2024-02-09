'use client';
import { Nunito_Sans } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Nunito_Sans({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    primary: {
        main: "#388087"
    },
    secondary: {
        main: "#C2EDCE"
    },
    success: {
        main: "#BADFE7"
    },
    info: {
        main: "#F6F6F2"
    },
    // error: {
    //     main: ""
    // },
    // warning: {
    //     main: ""
    // }
  }
});

export default theme;